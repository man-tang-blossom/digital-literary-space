import type { Metadata } from "next";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "器物篇：葫芦" };

const meanings = [
  ["福禄", "“葫芦”与“福禄”音近。明清吉祥图案、瓷器和民间陈设常借此祝福幸福、俸禄与大吉大利。"],
  ["多子多福", "葫芦结子多，藤蔓长。它让人想到“瓜瓞绵绵”：日子有根，有枝，也有人接着往下过。"],
  ["大腹能容", "它上圆下圆，中间收束，能盛水、酒、药和种子。所谓“能容”，最早是很实际的生活经验。"],
  ["药与疗愈", "葫芦轻便，腹大口小，适合盛药丸、药散与药酒。神仙身边的宝葫芦，也从这种日常药器里长出想象。"],
  ["避灾与新生", "在一些地方的洪水传说中，葫芦护住了伏羲、女娲兄妹和重新开始的希望。各地版本不同，这是一类民间神话母题。"],
];

const sources = [
  ["《诗经·匏有苦叶》", "https://zh.wikisource.org/zh/%E8%A9%A9%E7%B6%93/%E5%8C%8F%E6%9C%89%E8%8B%A6%E8%91%89"],
  ["故宫博物院：葫芦瓶", "https://www.dpm.org.cn/lemmas/239383.html"],
  ["成都博物馆：葫芦里到底装了什么药？", "https://www.cdmuseum.com/xinwen/202112/2558.html"],
  ["吴昌硕《葫芦》", "https://artsandculture.google.com/asset/%E8%91%AB%E8%8A%A6/xAEEe7yUzAXndQ?hl=zh-CN"],
  ["北京画院：明清绘画中的葫芦", "https://bjaa2013.bjaa.com.cn/news.html?clg=171&hcs=11&news=1585"],
];

export default function GourdPage() {
  return (
    <main className="inner-page archive-detail object-page">
      <SiteHeader />
      <ArchiveHeader
        kicker="Object Archive 01"
        title="器物篇：葫芦"
        intro="它是果实、容器、酒瓢、药壶，也是婚礼中的合卺器与想象中神仙身边的法器。“葫芦”与“福禄”谐音，是中国古代一种亲切的祝福。"
        status="器物 · 意象 · 已核验"
      />

      <section className="object-opening">
        <p>葫芦并不神秘。它最早来自普通人的日常生活：藤蔓攀援，果实成熟后可剖作瓢，用来舀水、盛酒、储存种子与药物。后来，人们才一点一点把祝愿、信仰与想象放进它圆润的腹中。</p>
      </section>

      <section className="object-section">
        <div className="archive-section__heading"><p>01 / Origin</p><h2>果实与容器</h2><span>意象从田野开始</span></div>
        <div className="object-prose">
          <p>葫芦古称“匏”“瓠”“壶卢”等。《诗经》里已经有它的记录：</p>
          <blockquote>匏有苦叶，济有深涉。<br />七月食瓜，八月断壶。</blockquote>
          <p>前一句写渡河与婚嫁，后一句写农事节令。葫芦最早就是农家植物和日常器物的记忆：长在田地和篱边，成熟以后采收、晾晒，再被加工成瓢。</p>
        </div>
      </section>

      <section className="object-section">
        <div className="archive-section__heading"><p>02 / Meanings</p><h2>五重寓意</h2><span>一只果实，慢慢装进许多愿望</span></div>
        <div className="object-meaning-list">
          {meanings.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="object-section object-section--two-col">
        <div><div className="archive-section__heading"><p>03 / Literature</p><h2>诗词中的葫芦</h2></div><blockquote className="object-quote">吾岂匏瓜也哉？<br />焉能系而不食？</blockquote><p>孔子借“匏瓜”自喻：它被系在那里，却不能食用。葫芦在这里成了“人不应被闲置”的比喻。</p><blockquote className="object-quote">剖为大瓢，醉我斗室。</blockquote><p>葫芦剖开可作酒瓢，因此也带着一点酒意、山居与自在。</p></div>
        <div><div className="archive-section__heading"><p>04 / Painting</p><h2>画作中的葫芦</h2></div><p>葫芦是中国花鸟画里很有生命力的题材。圆润的果实、宽大的叶片和曲折的藤蔓，既能画丰收，也能画一院寻常人家的安稳。</p><p>吴昌硕画葫芦，用浓叶和狂草般的藤蔓写出旺盛的长势；虚谷《葫芦图》则更显清逸，瓜藤绵延，把“福禄万代”的意思放得很自然。明清人物画、道释画和祝寿画中，它也常出现在神仙、高士与钟馗身边。</p></div>
      </section>

      <section className="object-section object-section--closing">
        <div className="archive-section__heading"><p>05 / From Shape to Meaning</p><h2>器物里的葫芦</h2><span>从形到意</span></div>
        <div className="object-prose"><p>宋代南北方已有葫芦瓶烧造，元以后景德镇大量生产，明清时期更常见。瓶形本身取“福禄”之意；再配以寿字、蝙蝠、八仙、花卉等纹样，便有了福、禄、寿、喜与平安相互叠加的祝福。</p><p>葫芦不只在“福禄”二字。它原本只是田野间一枚普通的果实：沿着篱笆生长，成熟后被剖成瓢，盛水、盛酒、盛药。后来，人们把愿望一点点放进去——希望家中有余粮，希望病痛能被安放，希望亲人平安，希望后代绵延。</p><p>这大概就是它与中国人最接近的地方：不说很大的道理，只盼一家人的日子，有收成，有照应，有传承，也有可以继续过下去的来日。</p></div>
      </section>

      <section className="source-list"><h2>资料来源</h2>{sources.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{name}<span>↗</span></a>)}</section>
    </main>
  );
}
