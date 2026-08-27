import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "梦境篇：庄生晓梦" };

const jinse = ["锦瑟无端五十弦，一弦一柱思华年。", "庄生晓梦迷蝴蝶，望帝春心托杜鹃。", "沧海月明珠有泪，蓝田日暖玉生烟。", "此情可待成追忆，只是当时已惘然。"];
const butterfly = ["昔者庄周梦为胡蝶，栩栩然胡蝶也。", "自喻适志与！不知周也。", "俄然觉，则蘧蘧然周也。", "不知周之梦为胡蝶与？胡蝶之梦为周与？", "周与胡蝶，则必有分矣。此之谓物化。"];

export default function ZhuangshengDreamPage() {
  return <main className="inner-page archive-detail dream-zhuang-page">
    <SiteHeader />
    <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
    <section className="archive-hero dream-zhuang-hero"><p className="page-kicker">Dreamscape / 蝴蝶 · 追忆 · 物化</p><h1>庄生晓梦</h1><span>从庄周的一场梦，到李商隐的一句诗</span></section>
    <section className="dream-zhuang-opening"><p>蝴蝶在这里飞过了很长的时间。庄子梦见自己成了一只蝶，醒来后不知道究竟是谁梦见了谁。李商隐把这个梦放进《锦瑟》，写成一段回望不清的人生。一个人在问自我与万物，另一个人在回想那些已经过去、当时也说不明白的情感。</p></section>
    <section className="dream-zhuang-section dream-zhuang-section--jinse"><div className="archive-section__heading"><p>01 / 李商隐</p><h2>蝴蝶飞进《锦瑟》</h2><span>唐 · 李商隐</span></div><blockquote>{jinse.map((line) => <span key={line}>{line}</span>)}</blockquote><div className="dream-zhuang-reading"><article><h3>译文</h3><p>锦瑟为什么偏偏有五十根弦，每一根弦柱都让我想起已逝的年华。庄周在梦里迷失于蝴蝶，望帝把一腔春心寄托给杜鹃。明月照着沧海，珍珠仿佛带着泪；日光照着蓝田，温润的玉气像烟一样升起。这些情感到了后来，原可以成为追忆，只是就在当时，人已经觉得茫然。</p></article><article><h3>读这一句</h3><p>“庄生晓梦迷蝴蝶”借的是庄周梦蝶，却没有把庄子的意思原封不动搬来。它落在《锦瑟》里，成了人生难以说清的一瞬。李商隐的《锦瑟》历来有多种解读，诗里究竟追忆什么，不能轻易定成一个答案。蝴蝶留下的，是迷惘和回声。</p></article></div></section>
    <section className="dream-zhuang-section dream-zhuang-section--zhuang"><div className="archive-section__heading"><p>02 / 庄子</p><h2>庄周梦蝶</h2><span>《庄子·齐物论》</span></div><blockquote>{butterfly.map((line) => <span key={line}>{line}</span>)}</blockquote><div className="dream-zhuang-reading"><article><h3>译文</h3><p>从前庄周梦见自己变成蝴蝶，轻快自在，很满意，完全不知道自己原来是庄周。忽然醒来，他又清清楚楚是庄周了。他不知道，是庄周梦见了蝴蝶，还是蝴蝶梦见了庄周。庄周与蝴蝶当然有分别，这种变化就叫作“物化”。</p></article><article><h3>这场梦问什么</h3><p>庄子并不只是在问梦是真是假。他写的是人在变化之中，怎样不把自己锁死在一个固定的位置。梦里的蝶很自在，醒来的庄周也确实存在。两者之间有界限，也有一瞬间的互相进入。</p></article></div></section>
    <section className="dream-zhuang-meet"><p className="page-kicker">Read Together</p><h2>同一只蝶，不同的心事</h2><p>庄子的蝴蝶飞得轻。它让庄周暂时忘记“我是庄周”这件事，带来的是一种松开自我的自由。</p><p>李商隐的蝴蝶飞得更慢。它落在锦瑟声里，连着杜鹃、珠泪和玉烟。人醒着，却还在迷惘里。庄子的梦把门打开，李商隐的梦让人站在门口回望。</p><Link href="/library/poetry/dreaming-tianmu">再读李白《梦游天姥吟留别》：另一种梦中出走 →</Link></section>
    <footer className="source-list travel-sources"><p>文本参照：<a href="https://zh.wikisource.org/wiki/%E9%8C%A6%E7%91%9F" target="_blank" rel="noreferrer">李商隐《锦瑟》</a>；<a href="https://zh.wikisource.org/zh-hans/%E5%8D%97%E8%8F%AF%E7%9C%9F%E7%B6%93%E5%8F%A3%E7%BE%A9/3" target="_blank" rel="noreferrer">《庄子·齐物论》梦蝶段</a>。</p></footer>
  </main>;
}
