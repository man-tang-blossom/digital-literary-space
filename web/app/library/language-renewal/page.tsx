import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";
import { reframingExamples } from "../../../data/archive-content";

export const metadata: Metadata = { title: "辞语新生" };

export default function RenewalPage() {
  return (
    <main className="inner-page archive-detail">
      <SiteHeader />
      <ArchiveHeader kicker="Language Renewal" title="辞语新生" intro="同一件事，换一种表达，气质便天差地别。这里收录语言包装、重新命名与重新叙述。" />
      <section className="reframing-list">
        {reframingExamples.map((item, index) => (
          <article key={item.literary}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><small>日常说法</small><p>{item.ordinary}</p></div>
            <i aria-hidden="true">→</i>
            <div><small>换一种叙述</small><blockquote>{item.literary}</blockquote></div>
            <p>{item.thought}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
