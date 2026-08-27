import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { newYearReadings, newYearReadingsBySlug } from "../../../../../data/new-year-readings";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return newYearReadings.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const reading = newYearReadingsBySlug[slug]; return reading ? { title: `${reading.title}｜新春` } : {}; }

export default async function NewYearReadingPage({ params }: Props) {
  const { slug } = await params; const reading = newYearReadingsBySlug[slug]; if (!reading) notFound();
  return <main className="inner-page archive-detail festival-reading-page"><SiteHeader /><Link className="archive-back" href="/library/festivals/new-year">← 返回新春</Link><section className="flower-reading-hero festival-reading-hero"><p className="page-kicker">New Year Reading / {reading.eyebrow}</p><h1>{reading.title.startsWith("东京") ? reading.title : `《${reading.title}》`}</h1><p>{reading.author} · {reading.era}</p></section><section className="reader-text"><div className="archive-section__heading"><p>01 / Original</p><h2>全文</h2><span>慢慢读完这一段新春</span></div><blockquote>{reading.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><a href={reading.sourceUrl} target="_blank" rel="noreferrer">前往原典阅读全文 ↗</a></section><section className="flower-translation"><p className="page-kicker">02 / Translation</p><h2>译文</h2><p>{reading.translation}</p></section><section className="reader-analysis"><p className="page-kicker">03 / Reading</p><h2>读这一篇</h2><p>{reading.reading}</p></section><nav className="reader-nav" aria-label="新春诗文导航">{newYearReadings.map((item) => <Link key={item.slug} className={item.slug === reading.slug ? "is-current" : ""} href={`/library/festivals/new-year/${item.slug}`}>{item.eyebrow} · {item.title}</Link>)}</nav></main>;
}
