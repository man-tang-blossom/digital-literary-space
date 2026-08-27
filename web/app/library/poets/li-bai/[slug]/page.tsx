import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { poemSlugs, works } from "../page";

export function generateStaticParams() { return Object.values(poemSlugs).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = Object.entries(poemSlugs).find(([, value]) => value === slug)?.[0];
  return { title: title ? `《${title}》｜李白` : "李白诗作" };
}

export default async function LiBaiPoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = Object.entries(poemSlugs).find(([, value]) => value === slug)?.[0];
  const poem = works.find((item) => item.title === title);
  if (!poem) notFound();

  return <main className="inner-page archive-detail poem-detail li-bai-poem-detail">
    <SiteHeader />
    <Link className="archive-back" href="/library/poets/li-bai">← 返回李白篇</Link>
    <section className="archive-hero poem-detail__hero li-bai-hero"><p className="page-kicker">Li Bai / {poem.kind}</p><h1>《{poem.title}》</h1><span>李白</span></section>
    <section className="poem-detail__body">
      <article><p className="page-kicker">全文</p><blockquote>{poem.lines.map((line) => <span key={line}>{line}</span>)}</blockquote></article>
      <article><p className="page-kicker">译文</p><p>{poem.translation}</p></article>
      <article><p className="page-kicker">读这一首</p><p>{poem.reading}</p></article>
    </section>
    <nav className="poem-detail__nav"><Link href="/library/poets/li-bai">继续沿着李白的时间线读 →</Link></nav>
  </main>;
}
