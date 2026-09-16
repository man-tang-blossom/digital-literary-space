import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";
import { supplementalReadings } from "./supplemental-readings";

type Reading = { author: string; title: string; titleType: string; label: string; original: string[]; translation: string; close: string[]; personal: string; echo: string; source: string; place?: { name: string; location: string; description: string } };

const baseReadings: Record<string, Reading> = {
  "xiting-rimou": { author: "李清照", title: "如梦令", titleType: "词牌名", label: "溪亭日暮 · 夏日游赏", original: ["常记溪亭日暮，沉醉不知归路。", "兴尽晚回舟，误入藕花深处。", "争渡，争渡，惊起一滩鸥鹭。"], translation: "我常常想起那次在溪边亭子旁玩到日暮，喝得微醺，竟不知归路。兴致尽了才划船回去，不小心进了荷花深处。急着划出去，急着划出去，惊起了满滩的鸥鹭。", close: ["“常记”不是偶然想起，是这幅画面在心里留得很久。日暮、微醉、荷花与小舟，都是轻快的事。", "“误入”让游赏有了小小的意外。最后两个“争渡”短促急切，鸥鹭一惊，整首词忽然有了水声和翅膀声。"], personal: "我们很难把这次溪亭游赏准确放在某一年。词里的人很放松，喝酒、晚归、划船，全无顾忌。它留住的是李清照较早人生里一份明亮的兴致。她后来会经历南渡、丧夫与流离，但那些更沉重的年月，不该反过来遮住这一日荷花深处的笑闹。", echo: "它也让人看见宋代士人家庭中的另一种日常。女子并非只在闺中等待，她们也会结伴出游、饮酒赏花、把一次玩得忘了归路的下午写进词里。这样的片刻并不能代表所有女性的处境，却留下了一个具体而难得的自由画面。", source: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E5%A4%A2%E4%BB%A4_(%E6%9D%8E%E6%B8%85%E7%85%A7)/%E5%A6%82%E5%A4%A2%E4%BB%A4_(%E5%B8%B8%E8%A8%98%E6%BA%AA%E4%BA%AD%E6%97%A5%E6%9A%AE)" },
  lingaoge: { author: "李清照", title: "忆秦娥", titleType: "词牌名", label: "临高阁 · 秋日独处", original: ["临高阁，乱山平野烟光薄。", "烟光薄，栖鸦归后，暮天闻角。", "断香残酒情怀恶，西风催衬梧桐落。", "梧桐落，又还秋色，又还寂寞。"], translation: "登上高阁，只见乱山与平野笼在淡薄的烟光里。乌鸦归巢后，暮色中传来号角。香将燃尽，酒也剩下，人心烦闷。西风催着梧桐落叶，秋色又来了，寂寞也又来了。", close: ["“烟光薄”连说两次，眼前的光越来越少。栖鸦、暮天、号角都在把傍晚往深处推。", "末尾两个“又还”很克制。秋天会再来，寂寞也会再来，词人没有大声诉苦，话却留得很久。"], personal: "这首词写的是一个极具体的傍晚。她登阁远望，回到室内，香断、酒残，梧桐又被西风吹落。人对眼前的一切都提不起精神，连秋天的到来都像旧事重演。", echo: "词的年代历来有不同说法，后人多把它放在李清照南渡后的作品中阅读。彼时许多人都在战乱与迁徙中失去旧居和旧日秩序。词里没有直说国破，暮天的号角、薄烟与反复归来的寂寞，却能容下那个时代的惶惑。", source: "https://www.gushiwen.cn/shiwenv_96689ee0c664.aspx" },
  guiyuan: { author: "王昌龄", title: "闺怨", titleType: "诗题", label: "春日翠楼 · 少妇心事", original: ["闺中少妇不知愁，春日凝妆上翠楼。", "忽见陌头杨柳色，悔教夫婿觅封侯。"], translation: "闺中的少妇原本不知愁，春日里认真梳妆，兴致勃勃地登上翠楼。忽然看见路边杨柳的新绿，才后悔当初让丈夫去边塞求取功名。", close: ["前两句明亮。梳妆、春日、翠楼，本来都属于一段好时光。", "“忽见”一转，杨柳的新色提醒她春天又到了，丈夫却还不在身边。最后一句把功名和团聚放在一起，短短四句写出了代价。"], personal: "她开始登楼时还没有忧愁。杨柳一入眼，时间突然有了形状，春天又来了，而丈夫没有回来。后悔并非埋怨一时的离别，她想起的是当初曾把功名看得很重。", echo: "诗中的少妇由王昌龄塑造，不能当作女性自述。不过，唐诗中的闺怨反复写到征戍、仕途与家庭生活之间的牵连。边塞的功业在远处被谈论，留在家中的人承受的是等待、错过与春天一年年过去。", source: "https://zh.wikisource.org/wiki/%E9%96%A8%E6%80%A8" },
  xizhouqu: { author: "南朝乐府", title: "西洲曲", titleType: "乐府民歌", label: "西洲望归 · 无名的等待", original: ["鸿飞满西洲，望郎上青楼。", "楼高望不见，尽日栏杆头。", "栏杆十二曲，垂手明如玉。"], translation: "鸿雁飞满西洲，我为了望见心上人而登上青楼。楼虽高，仍看不见他，只能整日留在栏杆旁。曲折的栏杆有十二道，她垂下的手白得像玉。", close: ["“楼高望不见”很直白，正因为直白，等人的无奈才更重。", "结尾忽然写到一只垂下的手。远方的人看不见，读者却看见了等待的人。乐府民歌常有这样的分寸，不多解释，画面已经够了。"], personal: "她已经上了高楼，还是看不见要等的人。于是整天留在曲栏边。诗并不替她解释痛苦，只写她望、等、垂下手。", echo: "民歌没有留下作者姓名，也没有说明这段分离来自什么。正因为没有被某个人的生平锁住，它保留了许多普通人的相思。楼台在这里没有历史名声，只是一个人想把远方看得更清楚的地方。", source: "https://zh.wikisource.org/wiki/%E8%A5%BF%E6%B4%B2%E6%9B%B2" },
  chounuer: { author: "辛弃疾", title: "丑奴儿", titleType: "词牌名", label: "少年层楼 · 愁的两种年纪", original: ["少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。", "而今识尽愁滋味，欲说还休。欲说还休，却道天凉好个秋！"], translation: "少年并不真正懂得愁，却喜欢登楼，为写新词勉强说些愁话。如今尝尽愁滋味，反而想说又停，只说一句，天凉，真是个好秋天。", close: ["上片重复“爱上层楼”，有少年人故意把情绪写得很重的可爱。", "下片也重复“欲说还休”，可是分量完全不同。许多事已经说不清，便把话落在天气上。那句“好个秋天”越平静，压住的东西越多。"], personal: "词里的“而今”已经尝过许多不愿说出的事。辛弃疾想收复中原，却长期未获重用；他不缺话，也不缺写词的本事，真正让他停住的是壮志与现实之间的距离。", echo: "南宋一代人都活在中原失陷后的阴影里。许多士大夫把恢复故土当作愿望，也不得不面对朝廷内部的犹疑和日常政治的消磨。“天凉好个秋”留住的，正是这种人人能懂、又不便尽说的沉默。", source: "https://zh.wikisource.org/wiki/%E9%86%9C%E5%A5%B4%E5%85%92_(%E5%B0%91%E5%B9%B4%E4%B8%8D%E8%AD%98%E6%84%81%E6%BB%8B%E5%91%B3)" },
  yejinmen: { author: "朱淑真", title: "谒金门", titleType: "词牌名", label: "庭院凭栏 · 春愁", original: ["春已半，触目此情无限。十二阑干闲倚遍，愁来天不管。", "好是风和日暖，输与莺莺燕燕。满院落花帘不卷，断肠芳草远。"], translation: "春天已过一半，眼前景色处处都惹人伤怀。曲折的栏杆倚遍了，愁绪一来，连天也不管。风和日暖这样好，倒全让成双的莺燕享受了。满院落花，帘子也不想卷起，远处芳草连着断肠的思念。", close: ["“闲倚遍”里的“遍”很有时间感。她不是倚一下就走，而是把一段栏杆都倚过了。", "莺燕成双，自己却独处。朱淑真没有把这层孤单说得太满，落花、帘子与远草已经替她说完。"], personal: "她面对的是一个无处安放的暮春。天暖、鸟成双、花落满院，越是明丽，越衬出一个人不想卷帘、不愿看春光的心。", echo: "朱淑真的确切生平留下的材料不多，婚姻故事更有许多后世传说。词中能确定的是，一个女性的孤处被认真地写进了文学。她的凭栏与惜春，后来也成为许多女性词人反复书写的共同经验。", source: "https://www.gushiwen.cn/gushiwen_d558ed1254.aspx" },
};

const readings: Record<string, Reading> = { ...baseReadings, ...supplementalReadings };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = readings[slug]; return { title: item ? `${item.author}《${item.title}》｜数字文学空间` : "诗文阅读｜数字文学空间" }; }

export default async function LandmarkReadingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = readings[slug];
  if (!item) return <main className="inner-page archive-detail"><SiteHeader /><ArchiveHeader kicker="Reading Room" title="这篇正在校勘" intro="先回到登临篇，选择另一处亭台楼阁。" /><Link className="archive-back" href="/library/landmarks">← 返回登临篇</Link></main>;
  return <main className="inner-page archive-detail landmark-reader"><SiteHeader /><ArchiveHeader kicker={item.titleType} title={item.title} intro={item.author} status={item.label} />
    <section className="landmark-reader__original"><p>原文</p><blockquote>{item.original.map((line) => <span key={line}>{line}</span>)}</blockquote></section>
    <section className="landmark-reader__body"><div><p>译文</p></div><p>{item.translation}</p></section>
    <section className="landmark-reader__body landmark-reader__close"><div><p>咬文嚼字</p></div><div>{item.close.map((note) => <p key={note}>{note}</p>)}</div></section>
    {item.place && <section className="landmark-reader__place"><div><p>这座台</p><h2>{item.place.name}</h2><small>{item.place.location}</small></div><p>{item.place.description}</p></section>}
    <section className="landmark-reader__context"><p>此时此刻</p><div><section><small>一个人的心绪</small><p>{item.personal}</p></section><section><small>放到时代里</small><p>{item.echo}</p></section></div></section>
    <footer className="source-list landmark-reader__sources"><p>原文参照 <a href={item.source} target="_blank" rel="noreferrer">相关古籍与诗文来源</a>。</p><Link href="/library/landmarks">← 回到登临篇</Link></footer>
  </main>;
}
