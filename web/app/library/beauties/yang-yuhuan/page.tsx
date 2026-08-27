import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "美人篇：杨玉环",
  description: "从沉香亭的牡丹、唐代乐舞到马嵬之后的后世叙事，重新看杨玉环。",
};

const otherBeauties = [
  ["西施", "春秋", "浣纱的水波与吴越之间的故事"],
  ["王昭君", "西汉", "出塞的雁影，与漫长的边地想象"],
  ["貂蝉", "后世小说", "月下的身影，也是一段被戏曲塑造的叙事"],
];

export default function YangYuhuanPage() {
  return (
    <main className="inner-page archive-detail beauty-page">
      <SiteHeader />
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
      <section className="archive-hero beauty-hero">
        <p className="page-kicker">Four Beauties / 01</p>
        <h1>杨玉环</h1>
        <span>花与人相照，盛世与旧梦相照</span>
      </section>

      <section className="beauty-opening">
        <p>“四大美人”是后世逐渐固定下来的称呼。杨玉环在其中常被叫作“羞花”，可一朵花遮不住她的一生。她曾在唐代宫廷乐舞的光里被看见，也在安史之乱后的马嵬坡，成为无数诗文反复回望的人。</p>
      </section>

      <section className="beauty-section">
        <div className="archive-section__heading"><p>01 / Peony</p><h2>沉香亭前</h2><span>一首诗把牡丹与美人写在同一阵春风里</span></div>
        <blockquote className="classical-text beauty-quote">云想衣裳花想容，<br />春风拂槛露华浓。<small>李白《清平调·其一》</small></blockquote>
        <div className="beauty-prose"><p>天宝年间的一个春日，唐玄宗与杨玉环在沉香亭赏牡丹，召李白写《清平调》。诗里先有云，又有花，最后才让春风拂过栏杆。杨玉环没有被硬放在画面中央，她和带露的牡丹互相映照，显得丰润、明亮。</p><p>这首诗可以收进牡丹篇，也该留在这里。它记住的并非只有一张脸，还记住了唐人怎样想象富丽，怎样把人间的好日子写得近乎仙境。</p></div>
        <a className="beauty-source" href="https://www.gushiwen.cn/shiwenv_170df91879a2.aspx" target="_blank" rel="noreferrer">读《清平调·其一》全文与注释 ↗</a>
      </section>

      <section className="beauty-section beauty-section--music">
        <div className="archive-section__heading"><p>02 / Music</p><h2>她也在音乐里</h2><span>史书里的杨贵妃，懂歌舞，也通音律</span></div>
        <div className="beauty-prose"><p>《旧唐书》写她“善歌舞，通音律”。今天的人已经听不到当年的曲谱，也无法看见原来的舞步；可《霓裳羽衣曲》留下的名字，仍让人想到唐代宫廷乐舞的轻、缓、盛大。</p><p>这里不把她简化成一段帝王爱情。她生活在一个格外崇尚乐舞的时代，也以自己的艺术才能进入了那个时代最耀眼的场景。后世关于《霓裳羽衣》的许多细节夹杂着传说，读时要把传说的光和史实的边界都留住。</p></div>
        <a className="beauty-source" href="https://zh.wikisource.org/zh-hans/%E6%97%A7%E5%94%90%E4%B9%A6/%E5%8D%B751" target="_blank" rel="noreferrer">读《旧唐书·杨贵妃传》↗</a>
      </section>

      <section className="beauty-section">
        <div className="archive-section__heading"><p>03 / Afterwards</p><h2>马嵬以后</h2><span>她的生命止于乱世，故事却没有停下</span></div>
        <div className="beauty-prose"><p>公元756年，玄宗西行至马嵬坡，杨玉环死于兵变之中。此后，白居易写《长恨歌》，陈鸿写《长恨歌传》，戏曲、小说、画作又不断添上新的月色、铃声与想象。</p><p>她常被写成“倾国”的原因，也常被用来解释一个王朝的崩塌。这样的讲法太省事，把复杂的政治与战争推给一个女人。留在这一页的杨玉环，可以是美人，可以是舞者，也可以是一个被时代推到风口、又被后世层层书写的人。</p></div>
        <a className="beauty-source" href="https://zh.wikisource.org/zh-hans/%E9%95%BF%E6%81%A8%E6%AD%8C" target="_blank" rel="noreferrer">读白居易《长恨歌》↗</a>
      </section>

      <section className="beauty-section beauty-section--next">
        <div className="archive-section__heading"><p>04 / To Be Continued</p><h2>其余三人</h2><span>先留下名字，等待她们各自完整的一页</span></div>
        <div className="beauty-next-grid">{otherBeauties.map(([name, era, note]) => <article key={name}><p>{era}</p><h3>{name}</h3><span>{note}</span><small>整理中</small></article>)}</div>
      </section>

      <footer className="source-list beauty-footer"><p>史料与原典参照 <a href="https://zh.wikisource.org/zh-hans/%E6%97%A7%E5%94%90%E4%B9%A6/%E5%8D%B751" target="_blank" rel="noreferrer">《旧唐书·杨贵妃传》</a>、<a href="https://www.gushiwen.cn/shiwenv_170df91879a2.aspx" target="_blank" rel="noreferrer">《清平调·其一》</a>。</p><Link href="/library/flowers/li-bai-qing-ping-diao-i">进入牡丹篇读《清平调》全文 →</Link><Link href="/library/flowers">回到花事篇 →</Link></footer>
    </main>
  );
}
