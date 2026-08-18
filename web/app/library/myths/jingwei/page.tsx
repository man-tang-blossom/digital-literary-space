import type { Metadata } from "next";
import Image from "next/image";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "精卫填海｜神话志" };

const sources = [
  ["《山海经·北山经》原典", "https://ctext.org/shan-hai-jing/bei-shan-jing/zh"],
  ["《太平御览》所引《山海经》", "https://ctext.org/text.pl?if=en&node=409122&remap=gb"],
  ["中国关键词：精卫填海", "https://english.scio.gov.cn/featured/chinakeywords/2024-08/30/content_117397301.htm"],
];

export default function JingweiPage() {
  return (
    <main className="inner-page archive-detail myth-page">
      <SiteHeader />
      <ArchiveHeader kicker="Mythology 01" title="精卫填海" intro="微弱的力量面对苍茫的大海，仍然选择一次次衔木、投石。" status="神话志 · 原典已核验" />

      <figure className="myth-hero-image">
        <Image src="/images/archive/jingwei-sea.png" alt="精卫衔着一根细小树枝飞越苍茫海面，现代水墨重构示意" width={1672} height={940} priority unoptimized />
        <figcaption>现代水墨重构示意，不是古代文物图像。</figcaption>
      </figure>

      <section className="myth-source-section">
        <div className="archive-section__heading"><p>01 / Source</p><h2>古籍记载</h2><span>《山海经·北山经》</span></div>
        <blockquote className="classical-text">又北二百里，曰发鸠之山，其上多柘木。有鸟焉，其状如乌，文首、白喙、赤足，名曰精卫，其鸣自詨。是炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫。常衔西山之木石，以堙于东海。漳水出焉，东流注于河。</blockquote>
        <p className="classical-translation">向北二百里，有一座发鸠山。山上生长着许多柘树。山中有一种鸟，形状像乌鸦，头上有花纹，白嘴红脚，名叫精卫。它原是炎帝的小女儿女娃。女娃游于东海，溺水而没有归来，于是化为精卫，常常衔取西山的木石，用来填塞东海。</p>
      </section>

      <section className="myth-ideas">
        <div className="archive-section__heading"><p>02 / Ideas</p><h2>关键思想</h2><span>从失去，到行动</span></div>
        <div className="myth-idea-grid">
          <article><span>一</span><h3>悲痛没有停在悲痛里</h3><p>女娃的死亡不是故事终点。她把无法挽回的失去，转换成持续的行动。</p></article>
          <article><span>二</span><h3>力量可以微弱，意志不必微弱</h3><p>一只鸟、一根树枝、一粒石子，与东海完全不成比例；正因为不成比例，选择才显得庄严。</p></article>
          <article><span>三</span><h3>行动的价值不只由结果决定</h3><p>神话没有告诉我们海最终被填平。精卫的意义，是在看似不可能之中仍然留下人的回答。</p></article>
        </div>
      </section>

      <section className="belief-panel">
        <p className="page-kicker">03 / Belief</p>
        <h2>一根细枝，投向无边的大海</h2>
        <p>精卫所代表的，不是对力量差距的无知，而是明知天地辽阔、命运强大，仍不肯把自己的意志交出去。微小者可以失败，可以疲惫，却不必因此沉默。</p>
        <blockquote>中华民族许多古老叙事都珍视这种信念：不向命运屈服，不因道路漫长而停止行动；以一次又一次微小而真实的努力，回答看似不可改变的世界。</blockquote>
      </section>

      <section className="source-list"><h2>资料来源</h2>{sources.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{name}<span>↗</span></a>)}</section>
    </main>
  );
}
