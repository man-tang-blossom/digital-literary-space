import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";
import { farewellPhrases } from "../../../data/archive-content";

export const metadata: Metadata = { title: "江湖再见" };

export default function FarewellPage() {
  return (
    <main className="inner-page archive-detail">
      <SiteHeader />
      <ArchiveHeader kicker="Collection 01" title="江湖再见" intro="有些告别不说珍重，只饮完一杯酒，各自去往不同的山河。" status="第一辑 · 8 条" />
      <section className="quote-gallery">
        {farewellPhrases.map((item, index) => (
          <article key={item.text}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <blockquote>{item.text}</blockquote>
            <div>
              <p>{[item.author, item.era, item.source].filter(Boolean).join(" · ")}</p>
              {item.note && <small>{item.note}</small>}
              {item.sourceUrl && <a href={item.sourceUrl} target="_blank" rel="noreferrer">查看核验来源</a>}
              {item.status === "to-check" && <b>出处待考</b>}
            </div>
          </article>
        ))}
      </section>
      <section className="mini-collection">
        <p className="page-kicker">Next Collection</p>
        <h2>风雪行人</h2>
        <p>关山、孤客、马蹄与远行已经另列选题；古诗、现代拟古与来源不明的句子将分开呈现。</p>
      </section>
    </main>
  );
}
