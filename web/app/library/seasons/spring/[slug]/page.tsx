import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { springPoems } from "../../../../../data/spring-poems";

export function generateStaticParams() { return springPoems.map((poem) => ({ slug: poem.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const poem = springPoems.find((item) => item.slug === slug); return { title: poem ? `${poem.title}｜四时篇·春` : "四时篇·春" }; }
export default async function SpringPoemPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const poem = springPoems.find((item) => item.slug === slug); if (!poem) notFound(); return <main className="inner-page archive-detail poem-detail"><SiteHeader /><Link className="archive-back" href="/library/seasons/spring">← 返回四时篇·春</Link><section className="archive-hero poem-detail__hero"><p className="page-kicker">{poem.term}</p><h1>《{poem.title}》</h1><span>{poem.author}</span></section><section className="poem-detail__body"><article><p className="page-kicker">Full Text</p><blockquote>{poem.fullLines.map((line) => <span key={line}>{line}</span>)}</blockquote></article><article><p className="page-kicker">译文</p><p>{poem.translation}</p></article><article><p className="page-kicker">读这一首</p><p>{poem.reading}</p></article></section><nav className="poem-detail__nav"><Link href="/library/seasons">回到四时篇</Link><Link href="/library/seasons/spring">继续读春天</Link></nav></main>; }
