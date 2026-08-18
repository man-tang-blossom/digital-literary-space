import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveHeader } from "../../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { nineSongsBySlug, nineSongsReading } from "../../../../../data/nine-songs-reading";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return nineSongsReading.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = nineSongsBySlug[slug];
  return entry ? { title: `《九歌·${entry.title}》` } : {};
}

export default async function NineSongsReaderPage({ params }: Props) {
  const { slug } = await params;
  const entry = nineSongsBySlug[slug];
  if (!entry) notFound();
  const sourceUrl = `https://ctext.org/chu-ci/${entry.slug}/zh`;

  return (
    <main className="inner-page archive-detail nine-reader-page">
      <SiteHeader />
      <Link className="archive-back" href="/library/myths/nine-songs">← 返回《九歌》神祇谱系</Link>
      <ArchiveHeader kicker={`Nine Songs · ${entry.role}`} title={`《${entry.title}》`} intro={`从${entry.deity}的形象，回到屈原的诗里。`} status="原文选读 · 注释 · 解析" />
      <section className="reader-context"><p>{entry.deity}</p><h2>{entry.role}</h2><span>本页收录重点原文段落；完整原文与古注可在下方原典链接继续阅读。</span></section>
      <section className="reader-text">
        <div className="archive-section__heading"><p>01 / Original</p><h2>原文选读</h2><span>《楚辞·九歌》</span></div>
        <blockquote>{entry.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
        <a href={sourceUrl} target="_blank" rel="noreferrer">前往原典阅读全文与古注 ↗</a>
      </section>
      <section className="reader-notes">
        <div className="archive-section__heading"><p>02 / Notes</p><h2>注释</h2><span>只解释读这篇时绕不过去的词</span></div>
        <div>{entry.notes.map(([term, note], index) => <article key={term}><span>{String(index + 1).padStart(2, "0")}</span><h3>{term}</h3><p>{note}</p></article>)}</div>
      </section>
      <section className="reader-analysis">
        <p className="page-kicker">03 / Reading</p><h2>怎样读这一篇</h2><p>{entry.analysis}</p>
      </section>
      <nav className="reader-nav" aria-label="九歌篇目导航">
        {nineSongsReading.map((item) => <Link key={item.slug} className={item.slug === entry.slug ? "is-current" : ""} href={`/library/myths/nine-songs/${item.slug}`}>{item.title}</Link>)}
      </nav>
    </main>
  );
}
