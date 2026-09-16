import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { liuYuxiWorks } from "../page";

export function generateStaticParams() {
  return liuYuxiWorks.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const work = liuYuxiWorks.find((item) => item.slug === params.slug);
  return { title: work ? `刘禹锡《${work.title}》` : "刘禹锡诗篇" };
}

export default function LiuYuxiWorkPage({ params }: { params: { slug: string } }) {
  const work = liuYuxiWorks.find((item) => item.slug === params.slug);
  if (!work) notFound();
  return (
    <main className="inner-page archive-detail liu-yuxi-page liu-yuxi-work-page">
      <SiteHeader />
      <Link className="archive-back" href="/library/poets/liu-yuxi">← 返回刘禹锡篇</Link>
      <article className="poem-detail liu-yuxi-poem-detail">
        <p className="page-kicker">Liu Yuxi / {work.period}</p>
        <h1>《{work.title}》</h1>
        <p className="poem-detail__author">刘禹锡 · 唐</p>
        <blockquote>{work.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
        <section><h2>译文</h2><p>{work.translation}</p></section>
        <section><h2>读这首诗</h2><p>{work.reading}</p></section>
        <Link className="poem-detail__back" href="/library/poets/liu-yuxi">回到刘禹锡的诗页 →</Link>
      </article>
    </main>
  );
}
