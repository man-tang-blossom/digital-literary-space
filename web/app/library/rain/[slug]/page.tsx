import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../components/SiteHeader";
import { autumnRainReadings } from "../../../../data/autumn-rain-readings";
import { springRainReadings } from "../../../../data/spring-rain-readings";
import { summerStormReadings, summerStormReadingsBySlug } from "../../../../data/summer-storm-readings";
import { winterRainReadings } from "../../../../data/winter-rain-readings";

type Props = { params: Promise<{ slug: string }> };

const rainReadings = [...springRainReadings, ...summerStormReadings, ...autumnRainReadings, ...winterRainReadings];

export function generateStaticParams() { return rainReadings.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reading = summerStormReadingsBySlug[slug] ?? springRainReadings.find((item) => item.slug === slug) ?? autumnRainReadings.find((item) => item.slug === slug) ?? winterRainReadings.find((item) => item.slug === slug);
  return reading ? { title: `《${reading.title}》· 雨` } : {};
}

export default async function RainReadingPage({ params }: Props) {
  const { slug } = await params;
  const reading = summerStormReadingsBySlug[slug] ?? springRainReadings.find((item) => item.slug === slug) ?? autumnRainReadings.find((item) => item.slug === slug) ?? winterRainReadings.find((item) => item.slug === slug);
  if (!reading) notFound();
  const isSpring = springRainReadings.some((item) => item.slug === slug);
  const isAutumn = autumnRainReadings.some((item) => item.slug === slug);
  const isWinter = winterRainReadings.some((item) => item.slug === slug);
  const backHref = isSpring ? "/library/rain#spring-rain" : isAutumn ? "/library/rain#autumn-rain" : isWinter ? "/library/rain#winter-rain" : "/library/rain#summer-rain";
  const seasonTitle = isSpring ? "春雨" : isAutumn ? "秋雨" : isWinter ? "冬雨" : "夏末的一场疾风骤雨";
  const seasonEnglish = isSpring ? "Spring Rain / 春雨" : isAutumn ? "Autumn Rain / 秋雨" : isWinter ? "Winter Rain / 冬雨" : "Summer Storm / 夏末的一场疾风骤雨";
  return <main className="inner-page archive-detail flower-reading-page storm-reading-page"><SiteHeader /><Link className="archive-back" href={backHref}>← 返回{seasonTitle}</Link><section className="flower-reading-hero"><p className="page-kicker">{seasonEnglish}</p><h1>《{reading.title}》</h1><p>{reading.author} · {reading.era}</p></section><section className="reader-text"><div className="archive-section__heading"><p>01 / Original</p><h2>全文</h2><span>一场雨，慢慢读完</span></div><blockquote>{reading.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><a href={reading.sourceUrl} target="_blank" rel="noreferrer">前往原典阅读全文 ↗</a></section><section className="flower-translation"><p className="page-kicker">02 / Translation</p><h2>译文</h2><p>{reading.translation}</p></section><section className="reader-analysis"><p className="page-kicker">03 / Reading</p><h2>读这场雨</h2><p>{reading.note}</p></section><nav className="reader-nav" aria-label="雨篇诗作导航">{rainReadings.map((item) => <Link key={item.slug} className={item.slug === reading.slug ? "is-current" : ""} href={`/library/rain/${item.slug}`}>{item.author} · {item.title}</Link>)}</nav></main>;
}
