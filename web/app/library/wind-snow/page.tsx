import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";
import { windSnowPhrases } from "../../../data/archive-content";

export const metadata: Metadata = { title: "风雪行人" };

export default function WindSnowPage() {
  return (
    <main className="inner-page archive-detail">
      <SiteHeader />
      <ArchiveHeader kicker="Collection 02" title="风雪行人" intro="在风雪里飞奔的人：关山、马蹄、孤客，也有尚未冷却的少年心。" status="古诗与现代拟古分栏保存" />
      <section className="quote-gallery quote-gallery--snow">
        {windSnowPhrases.map((item, index) => (
          <article key={item.text}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <blockquote>{item.text}</blockquote>
            <div>
              <p>{[item.author, item.era, item.source].filter(Boolean).join(" · ")}</p>
              {item.note && <small>{item.note}</small>}
              <b>{item.status === "verified" ? "古典原文 · 已核验" : item.status === "modern" ? "现代拟古素材" : "出处待考"}</b>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
