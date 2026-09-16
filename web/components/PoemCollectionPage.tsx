import Link from "next/link";
import type { PoemCollection } from "../data/poem-collections";
import { ArchiveHeader } from "./ArchiveHeader";
import { SiteHeader } from "./SiteHeader";

export function PoemCollectionPage({ collection }: { collection: PoemCollection }) {
  return <main className="inner-page archive-detail poem-collection-page">
    <SiteHeader />
    <ArchiveHeader kicker={collection.kicker} title={collection.title} intro={collection.intro} status={collection.status} />
    <section className="poem-collection-grid" aria-label={collection.title}>
      {collection.items.map((item, index) => <article className="poem-collection-card" key={item.title}>
        <header><span>{String(index + 1).padStart(2, "0")}</span><p>{item.era} · {item.author}</p><h2>《{item.title}》</h2></header>
        <blockquote>{item.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
        <p>{item.reading}</p>
        <a href={item.sourceUrl} target="_blank" rel="noreferrer">查看原文与出处 →</a>
      </article>)}
    </section>
    <section className="poem-collection-afterword"><p>{collection.afterword}</p></section>
    <nav className="poem-collection-nav"><Link href="/library">回到文学藏馆 →</Link></nav>
  </main>;
}
