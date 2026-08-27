import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../components/SiteHeader";
import { flowerReadings, flowerReadingsBySlug } from "../../../../data/flower-readings";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return flowerReadings.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reading = flowerReadingsBySlug[slug];
  return reading ? { title: `《${reading.title}》· ${reading.flower}` } : {};
}

export default async function FlowerReadingPage({ params }: Props) {
  const { slug } = await params;
  const reading = flowerReadingsBySlug[slug];
  if (!reading) notFound();

  return (
    <main className="inner-page archive-detail flower-reading-page">
      <SiteHeader />
      <Link className="archive-back" href="/library/flowers">← 返回花事篇</Link>
      <section className="flower-reading-hero">
        <p className="page-kicker">Flower Reading / {reading.flower}</p>
        <h1>《{reading.title}》</h1>
        <p>{reading.author} · {reading.era}</p>
      </section>
      <section className="reader-text">
        <div className="archive-section__heading"><p>01 / Original</p><h2>全文</h2><span>{reading.isExcerpt ? "与此花相关的原文选段" : "一首诗，慢慢读完"}</span></div>
        <blockquote>{reading.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
        {reading.isExcerpt && <p className="flower-reading-notice">《离骚》与《牡丹芳》篇幅较长；这里保留花事篇最相关的段落。</p>}
        <a href={reading.sourceUrl} target="_blank" rel="noreferrer">前往原典阅读全文 ↗</a>
      </section>
      <section className="flower-translation">
        <p className="page-kicker">02 / Translation</p>
        <h2>译文</h2>
        <p>{reading.translation}</p>
      </section>
      <section className="reader-analysis">
        <p className="page-kicker">03 / Reading</p>
        <h2>读这首诗</h2>
        <p>{reading.introduction}</p>
      </section>
      <nav className="reader-nav" aria-label="花事篇诗作导航">
        {flowerReadings.map((item) => <Link key={item.slug} className={item.slug === reading.slug ? "is-current" : ""} href={`/library/flowers/${item.slug}`}>{item.flower} · {item.title}</Link>)}
      </nav>
    </main>
  );
}
