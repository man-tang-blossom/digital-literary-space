import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "诗人篇·刘禹锡，秋日胜春朝" };

export const liuYuxiWorks = [
  {
    slug: "autumn-poem",
    period: "朗州初贬",
    title: "秋词二首·其一",
    lines: ["自古逢秋悲寂寥，我言秋日胜春朝。", "晴空一鹤排云上，便引诗情到碧霄。"],
    translation: "从前的人一到秋天便觉得冷清萧瑟，我却觉得晴朗的秋日胜过春天。一只鹤穿过云层向上飞去，人的诗情也被带到高远的天空。",
    reading: "这首诗写在被贬朗州之后。刘禹锡没有把秋天写成衰飒的背景，他看见一只向上飞的鹤，心里的劲也跟着起来。第二首《秋词》仍有愤懑，这一首的明亮因而更有分量。",
  },
  {
    slug: "bamboo-branch-song",
    period: "夔州江边",
    title: "竹枝词二首·其一",
    lines: ["杨柳青青江水平，闻郎江上唱歌声。", "东边日出西边雨，道是无晴却有晴。"],
    translation: "江边杨柳青，江水很平，一位姑娘听见江上的男子唱歌。东边出了太阳，西边却落着雨。说它无晴，偏偏又有晴。这里的“晴”同“情”谐音。",
    reading: "刘禹锡在夔州接触当地民歌，写下多首竹枝词。这四句很像刚刚听见的一段歌，江水、杨柳、天气都在，心事藏在“晴”字里。",
  },
  {
    slug: "wuyi-lane",
    period: "长安旧迹",
    title: "乌衣巷",
    lines: ["朱雀桥边野草花，乌衣巷口夕阳斜。", "旧时王谢堂前燕，飞入寻常百姓家。"],
    translation: "朱雀桥边开着野草花，乌衣巷口斜照着夕阳。从前王、谢两家堂前的燕子，如今飞进了普通人家。",
    reading: "他不写王谢两家的盛大往事，只写野草、斜阳和燕子。燕子还在飞，旧日门第已经换了主人。四句很轻，六朝兴亡都压在里面。",
  },
  {
    slug: "rewarding-bai-juyi",
    period: "归来途中",
    title: "酬乐天扬州初逢席上见赠",
    lines: ["巴山楚水凄凉地，二十三年弃置身。", "怀旧空吟闻笛赋，到乡翻似烂柯人。", "沉舟侧畔千帆过，病树前头万木春。", "今日听君歌一曲，暂凭杯酒长精神。"],
    translation: "在巴山楚水这样的偏远之地，二十三年里我像被闲置的人。怀念旧友时，只能空吟向秀思念嵇康的《思旧赋》。回到故乡，又像看见斧柄朽坏才出山的王质，世事早已不同。沉船旁仍有千帆驶过，病树前也会有万木逢春。今天听了白居易为我作的诗，暂且借一杯酒振作精神。",
    reading: "白居易写诗相赠，刘禹锡便以此作答。前半首有长期贬谪与故人不在的痛，后半首忽然转到江面和春树。它并没有抹掉旧伤，只让人看见旧伤之后，水仍在走，树还会发。",
  },
  {
    slug: "returning-xuandu-temple",
    period: "再回长安",
    title: "再游玄都观",
    lines: ["百亩庭中半是苔，桃花净尽菜花开。", "种桃道士归何处，前度刘郎今又来。"],
    translation: "玄都观百亩庭院有一半长满青苔，桃花已经落尽，只剩菜花开着。当年种桃的道士到哪里去了。那位从前来过的刘郎，今天又回来了。",
    reading: "刘禹锡早年写《元和十年自朗州召至京戏赠看花诸君子》，借桃花讥刺权贵，后来再度外放。多年以后重游玄都观，他仍借桃花说事。语气平静，意思很硬。",
  },
] as const;

export default function LiuYuxiPage() {
  return (
    <main className="inner-page archive-detail liu-yuxi-page">
      <SiteHeader />
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>

      <section className="archive-hero liu-yuxi-hero">
        <p className="page-kicker">Poets / A Crane in Autumn Sky</p>
        <h1>刘禹锡</h1>
        <span>秋日胜春朝</span>
      </section>

      <section className="liu-yuxi-opening">
        <p>刘禹锡生于 772 年，字梦得。他进士及第后入仕，参与永贞革新，改革失败便被贬到朗州。此后二十多年里，他在连州、夔州、和州等地为官，也把许多南方山水、民歌和地方生活写进诗里。</p>
        <p>他后来被称为“诗豪”。这个称呼让人先想到豪迈，其实他的诗里也有很长的贬谪、旧友的离散、重回长安时的陌生。他能把这些事写得明净，句子里仍留一口不肯低下去的气。</p>
      </section>

      <section className="liu-yuxi-works" aria-label="刘禹锡诗篇">
        <header>
          <p className="page-kicker">Selected Works</p>
          <h2>顺着他的诗走一段</h2>
          <p>从朗州的秋空，到夔州江边的歌声，再回到长安旧观。</p>
        </header>
        <div className="liu-yuxi-work-grid">
          {liuYuxiWorks.map((work, index) => (
            <Link className="liu-yuxi-work" href={`/library/poets/liu-yuxi/${work.slug}`} key={work.slug}>
              <article>
                <div><span>{String(index + 1).padStart(2, "0")}</span><small>{work.period}</small></div>
                <h3>《{work.title}》</h3>
                <blockquote>{work.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
                <em>读原文、译文与赏析 →</em>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="liu-liu-story">
        <p className="page-kicker">Liu and Liu</p>
        <h2>两个刘郎</h2>
        <p>刘禹锡与柳宗元同在贞元九年登进士第，后来又同在永贞革新的队伍里。革新失败后，一个去朗州，一个去永州。两地都远，路也都长。他们谈文章，也谈“天”与“人”之间的道理，后来的人把这段交游叫作“刘柳”。</p>
        <p>元和十年，两人一度奉诏北归，却又分别外放。史料记下一个细节。刘禹锡原拟去播州，路远且险，他母亲年事已高。柳宗元担心母子难以同行，想把自己将去的柳州同播州相换。后来在裴度等人的帮助下，刘禹锡改任连州刺史。</p>
        <p>柳宗元 819 年卒于柳州。临终前，他把遗稿托给刘禹锡。刘禹锡读信落泪，编次柳宗元文章，使它们流传下来。读《江雪》时，不妨也记得朗州有一位朋友，写过“晴空一鹤排云上”。两首诗没有互相唱和，却都从谪居的日子里长出来。</p>
        <div className="liu-liu-poems">
          <div><span>柳宗元</span><strong>千山鸟飞绝，万径人踪灭。</strong><small>《江雪》</small></div>
          <Link href="/library/poets/liu-yuxi/autumn-poem"><span>刘禹锡</span><strong>晴空一鹤排云上，便引诗情到碧霄。</strong><small>《秋词二首·其一》</small></Link>
        </div>
      </section>

      <footer className="source-list travel-sources">
        <p>资料参照 <a href="https://www.dpm.org.cn/lemmas/243567.html" target="_blank" rel="noreferrer">故宫博物院刘禹锡词条</a>，<a href="https://zjdy.zjdafw.gov.cn/art/2012/9/12/art_25_4737.html" target="_blank" rel="noreferrer">浙江历史名人辞典</a>，<a href="https://www.shidianguji.com/book/SBCK149/chapter/SBCK149_488" target="_blank" rel="noreferrer">刘禹锡所作柳宗元集序</a>，<a href="https://www.gdwsw.gov.cn/wsbl/content/post_38470.html" target="_blank" rel="noreferrer">文史广东刘禹锡专题</a>。</p>
      </footer>
    </main>
  );
}
