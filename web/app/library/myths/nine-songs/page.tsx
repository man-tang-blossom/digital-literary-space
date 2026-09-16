import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "神话篇 · 九歌诸神" };

const heaven = [
  { name: "东皇太一", slug: "dong-huang-tai-yi", role: "天之尊神", image: "高台上鼓声很重，香草和白玉已经摆好。人群并没有真正看见他，只知道他来了。天忽然显得很高，所有人的声音都低了下来。", note: "通常被解释为《九歌》中最尊贵的天神。" },
  { name: "云中君", slug: "yun-zhong-jun", role: "云神", image: "他经过时，山顶先暗下来，水面浮起雾；等人想看清他，他已经被风带到远处。", note: "常被解释为云神；关于具体神格与性别，后世说法并不一致。" },
  { name: "大司命", slug: "da-si-ming", role: "寿命之神", image: "人间的灯一盏盏亮起来，又一盏盏熄下去。他不催促，也不挽留，只站在时间后面，知道每个人会走到哪里。", note: "通常被解释为主管人的寿命与生死。" },
  { name: "少司命", slug: "shao-si-ming", role: "子嗣之神", image: "她更像春天刚长出的叶子，像一间屋里为婴儿留着的一盏灯。外面风大，她把门掩上一点。", note: "通常被解释为主管子嗣与儿童命运；“守着新生的人”是本馆的现代说明。" },
  { name: "东君", slug: "dong-jun", role: "太阳神", image: "光先落在树梢，再落到河面，最后照到赶路的人脸上。东君不为谁停下，但他每天都会来。", note: "太阳神，关联晨光、扶桑、车驾与出发。" },
];

const earth = [
  { name: "湘君", slug: "xiang-jun", role: "湘水之神", image: "船好像来过，又好像没有来。岸边有香草，水面很宽。湘君站在一边，望着对岸，像是在等一个约好的人。", note: "通常与湘夫人构成湘水配偶神。" },
  { name: "湘夫人", slug: "xiang-fu-ren", role: "湘水女神", image: "她没有大哭。只是风吹过洞庭，水上的叶子一片片落下来。她知道对岸有人，可水太长，雾太深。", note: "后世常附会为舜与娥皇、女英的故事，但并非唯一解释。" },
  { name: "河伯", slug: "he-bo", role: "河神", image: "河水宽得看不见尽头。风从浪头上掠过，船被推着走，也可能忽然失去方向。", note: "通常与黄河联系最紧密；水能载人，也能留人。" },
  { name: "山鬼", slug: "shan-gui", role: "山中神灵", image: "傍晚的山里起雾。她披着薜荔，腰间系着女萝，站在树影和雨气之间，像是在等一个没有来的人。", note: "通常被解释为山神或山中精灵。" },
];

const whiteSketches = [
  ["东皇太一", "高台、鼓声、玉器、香草、不可直视的天"], ["云中君", "雾、风、山影、没有落脚处的衣袍"], ["湘君", "舟、岸、香草、望向对岸的人"], ["湘夫人", "洞庭、秋风、落叶、隔水的等待"], ["大司命", "熄灭的灯、走远的人、生命的限度"], ["少司命", "新叶、婴儿、门内的一盏灯"], ["东君", "晨光、车马、扶桑、不断向前"], ["河伯", "浪头、长风、渡口、无法驯服的大河"], ["山鬼", "薜荔、女萝、雨雾、没有赴约的人"], ["国殇", "战旗、车辙、沉默的名字"], ["礼魂", "灯火、鼓声、人群散去后的空地"],
];

const sources = [
  ["《楚辞集解·九歌》", "https://www.shidianguji.com/zh/book/NA11072/chapter/1ko0kv2os3pk3"], ["楚墓竹简所记神祇与《九歌》神祇研究", "https://www.aisixiang.com/data/85860.html"], ["《九歌图卷》资料", "https://www.shuge.org/view/jiu_ge_tu_juan/"], ["中国美术馆：傅抱石《九歌图》研究", "https://www.namoc.org/zgmsg/qknrlj/201803/b17c8a4809f140b8977c443e0651818d.shtml"],
];

function DeityCards({ items }: { items: typeof heaven }) {
  return <div className="nine-deity-grid">{items.map((deity, index) => <Link href={`/library/myths/nine-songs/${deity.slug}`} key={deity.name}><span>{String(index + 1).padStart(2, "0")}</span><small>{deity.role}</small><h3>{deity.name}</h3><p>{deity.image}</p><em>{deity.note}</em><b>读《{deity.name}》 →</b></Link>)}</div>;
}

export default function NineSongsPage() {
  return <main className="inner-page archive-detail nine-songs-page"><SiteHeader />
    <ArchiveHeader kicker="Mythology 02" title="神话篇 · 九歌诸神" intro="云、水、山、日光，与人的生死相思。" status="屈原《九歌》· 十一神" />
    <section className="nine-opening"><p>《九歌》原本是楚地祭祀时唱的歌。屈原把它写成诗以后，神不再只是神。云中君会飘远，湘君与湘夫人隔着水相望，山鬼在深山里等一个没有来的人。</p><p>这里收录《九歌》里的神灵，也收录他们在古代图像、当代绘画与音乐中留下的样子。</p><small>《九歌》有十一篇。前十篇分别祭祀神灵，《礼魂》一般被看作送神之曲。神灵身份在古注与后世研究中有不同解释，本馆会把“原文所见”“常见解释”“后世传说”分开记录。</small></section>
    <section className="nine-ritual"><div className="archive-section__heading"><p>01 / Ritual</p><h2>一场楚地的迎神仪式</h2><span>从天到地，从生到死，从相逢到送别</span></div><div className="nine-ritual__text"><p>鼓声先响起来，香草、玉器和酒摆在席上。巫觋起舞，人们等着神从云里、水上、山中来到人间。</p><p>《九歌》不是一张神仙名单。它更像一场仪式：东皇太一先被迎来，最后以《礼魂》送走。中间经过云、水、太阳、大河、山岭，也经过人最躲不开的几件事——等待、相思、出生、衰老、死亡。</p></div><ol className="nine-route"><li>东皇太一</li><li>云中君 · 东君 · 大司命 · 少司命</li><li>湘君 · 湘夫人 · 河伯 · 山鬼</li><li>国殇</li><li>礼魂</li></ol></section>
    <section className="nine-section"><div className="archive-section__heading"><p>02 / Heaven</p><h2>天上的神</h2><span>云、太阳与人的寿命</span></div><DeityCards items={heaven} /></section>
    <section className="nine-section"><div className="archive-section__heading"><p>03 / Water & Mountain</p><h2>水与山中的神</h2><span>湘水的相思，大河的水势，山中的等待</span></div><DeityCards items={earth} /><blockquote className="nine-quote">若有人兮山之阿，<br />被薜荔兮带女萝。</blockquote></section>
    <section className="nine-section nine-human"><div className="archive-section__heading"><p>04 / Human & Farewell</p><h2>人鬼与送神</h2><span>神灵走远以后，人还在</span></div><div className="nine-human-grid"><article><p>国殇</p><h3>为国而死的人</h3><span>他们不是山神，也不是河神。他们原本是活着的人，后来死在战场上。《国殇》让《九歌》从云、水、山和爱情，落回人的生死。</span></article><article><p>礼魂</p><h3>送神之曲</h3><span>祭祀结束以后，鼓声没有立刻停。人们跳舞、唱歌，把神送回他们来的地方。灯火还在，人已经散了。</span></article></div></section>
    <section className="nine-section nine-sketches"><div className="archive-section__heading"><p>05 / White Sketches</p><h2>神祇白描册</h2><span>不先讲身份，先让人看见</span></div><div className="nine-sketch-grid">{whiteSketches.map(([name, sketch], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{sketch}</p></article>)}</div></section>
    <section className="nine-section nine-art"><div className="archive-section__heading"><p>06 / Images</p><h2>古画里的神</h2><span>诗句怎样有了面容</span></div><div className="nine-art-grid"><article><h3>《九歌图卷》</h3><p>古代画家依照《九歌》篇目，一位一位绘出神灵。诗到了画里，神有了衣袍、舟车、山水与可以被看见的停留。</p></article><article><h3>傅抱石《九歌图》</h3><p>傅抱石尤其反复描绘二湘。他没有把湘夫人画得脆弱，而是让水气、秋风和人的等待一起留在画面里。</p></article><article><h3>仍在继续的图像</h3><p>《九歌》的形象从未固定。每一代人都在用自己的云、水、山和人脸，重新回答这些诗里的神。</p></article></div></section>
    <section className="nine-echo"><p className="page-kicker">07 / Contemporary Echoes</p><h2>当代回声</h2><p>《九歌》没有给每一位神留下固定的脸。有人从古画里看见他们，有人从楚地的云、水、山中看见他们，也有人用插画、舞蹈和音乐重新靠近他们。</p><p>这里不把当代作品当作“古代神像的标准答案”。它们只是今天的人读《九歌》以后，留下的另一种回应。</p><a className="nine-echo__link" href="https://v.douyin.com/8qGjFRPzLNM/" target="_blank" rel="noreferrer"><small>当代再创作 · 绘画与音乐</small><strong>既明《屈原〈九歌〉系列》</strong><span>观看原作 ↗</span></a></section>
    <section className="source-list"><h2>资料来源与说明</h2><p>神灵的身份、性别与来源，在古注和现代研究中仍有分歧。本馆优先呈现较通行的解释，也会保留不同说法，不把后世想象写成唯一事实。</p>{sources.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{name}<span>↗</span></a>)}</section>
  </main>;
}
