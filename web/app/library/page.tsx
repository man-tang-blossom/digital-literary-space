import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "文学藏馆 · 目录" };

type CatalogueItem = { title: string; intro: string; href: string };
type CatalogueSection = { number: string; title: string; intro: string; items: CatalogueItem[] };

const catalogue: CatalogueSection[] = [
  { number: "01", title: "神话 · 纹样 · 器物", intro: "从神灵、图案，到被人握在手里的日常器物。", items: [
    { title: "神话篇 · 精卫填海", intro: "微木与沧海的信念", href: "/library/myths/jingwei" },
    { title: "神话篇 · 九歌诸神", intro: "屈原《九歌》十一神", href: "/library/myths/nine-songs" },
    { title: "纹样篇 · 宝相花", intro: "一朵花的秩序", href: "/library/patterns/baoxianghua" },
    { title: "器物篇 · 葫芦", intro: "匏、瓠、壶卢", href: "/library/objects/gourd" },
    { title: "器物篇 · 汝窑", intro: "雨过天青云破处", href: "/library/objects/porcelain/ru-kiln" },
  ] },
  { number: "02", title: "四时 · 节令 · 天气", intro: "沿着草木、雨声、灯火和节气，读一年在人间的变化。", items: [
    { title: "四时 · 总览", intro: "春夏秋冬四张淡色卡片", href: "/library/seasons" },
    { title: "四时篇 · 春", intro: "立春、雨水、惊蛰、春分、清明、谷雨", href: "/library/seasons/spring" },
    { title: "四时篇 · 夏", intro: "荷尖、梅雨、石榴、麦田、蝉鸣、蛙声与夏夜", href: "/library/seasons/summer" },
    { title: "四时篇 · 秋", intro: "月色、梧桐、新雨、暮江与远行", href: "/library/seasons/autumn" },
    { title: "四时篇 · 冬", intro: "雪、炉火、夜归人与风雨", href: "/library/seasons/winter" },
    { title: "雨篇 · 春雨", intro: "细雨、杏花雨与清明烟雨", href: "/library/rain#spring-rain" },
    { title: "雨篇 · 夏雨", intro: "夏末的一场疾风骤雨", href: "/library/rain#summer-rain" },
    { title: "雨篇 · 秋雨", intro: "残荷、灯与归期", href: "/library/rain#autumn-rain" },
    { title: "节令篇 · 新春", intro: "除夕、元日、元夕", href: "/library/festivals/new-year" },
    { title: "节令篇 · 七夕", intro: "牛郎织女与乞巧", href: "/library/festivals/qixi" },
  ] },
  { number: "03", title: "花 · 月 · 景色 · 意象", intro: "花各有性，月照人间；一条山水路也能通向许多诗。", items: [
    { title: "花事 · 总览", intro: "花各有性", href: "/library/flowers" },
    { title: "月下人间", intro: "相望、离别与时间感", href: "/library/moonlit-world" },
    { title: "景色篇 · 行旅山水", intro: "落日、平芜与溪荷", href: "/library/collections/landscape-journey" },
    { title: "意象词典", intro: "文学星云的底层素材库", href: "/library/imagery" },
  ] },
  { number: "04", title: "少女 · 爱情 · 人生 · 日常", intro: "笑语、初见、婚书、告别，以及一个人慢慢明白的事。", items: [
    { title: "少女篇 · 笑语喧然", intro: "斗草、踏歌、采莲、浣衣", href: "/library/girls-in-company" },
    { title: "心事篇 · 初见", intro: "相遇、等待、青梅与桃花", href: "/library/first-love" },
    { title: "日常篇 · 婚礼", intro: "欢喜与契约", href: "/library/life/marriage" },
    { title: "人生感悟", intro: "流光、飞鸿与苔花", href: "/library/collections/life-reflections" },
    { title: "江湖再见", intro: "远行、送别、重逢与退场", href: "/library/jianghu-farewell" },
    { title: "关山行旅", intro: "关山、马蹄、孤客、风雪、报国心", href: "/library/wind-snow" },
  ] },
  { number: "05", title: "诗人 · 词人 · 文章", intro: "顺着一位写作者的生活、口气与作品，慢慢走近他。", items: [
    { title: "诗人篇 · 李白", intro: "梦境与真实", href: "/library/poets/li-bai" },
    { title: "诗人篇 · 刘禹锡", intro: "秋日胜春朝", href: "/library/poets/liu-yuxi" },
    { title: "词人篇 · 灯影、长亭与旧梦", intro: "温庭筠、柳永、晏几道", href: "/library/poets/liuyong-wentingyun" },
    { title: "文章篇 · 唐宋八大家", intro: "八盏灯", href: "/library/eight-masters" },
  ] },
  { number: "06", title: "游记 · 静处 · 登临", intro: "在山水、亭台和一场梦里，看见人的去处。", items: [
    { title: "游记篇 · 小石潭记", intro: "清冽", href: "/library/travel/xiaoshitan" },
    { title: "梦忆篇 · 张岱", intro: "明末繁华与国破旧梦", href: "/library/travel/huxinting" },
    { title: "静处篇", intro: "禅与山水", href: "/library/stillness" },
    { title: "梦境篇", intro: "仙梦、蝶梦与迷梦", href: "/library/poetry/dreaming-tianmu" },
    { title: "登临篇 · 亭台楼阁", intro: "名胜与无名栏杆", href: "/library/landmarks" },
  ] },
];

export default function LibraryPage() {
  return <main className="inner-page library-page catalogue-page">
    <SiteHeader />
    <header className="catalogue-hero"><p>Digital Literary Space / Contents</p><h1>文学藏馆</h1><span>目录</span><strong>34 篇</strong><div><a href="#catalogue">从目录开始</a><Link href="/nebula">进入文学星云</Link></div></header>
    <section className="catalogue-opening"><p>这里的每一篇，都从一句诗、一个意象、一段古人的生活开始。它们可以独自阅读，也可以顺着花、水、月、人物和时代继续走下去。</p></section>
    <nav className="catalogue-nav" aria-label="文学藏馆目录导航">{catalogue.map((section) => <a href={`#catalogue-${section.number}`} key={section.number}><span>{section.number}</span>{section.title}</a>)}</nav>
    <section className="catalogue-sections" id="catalogue">{catalogue.map((section) => <section className="catalogue-section" id={`catalogue-${section.number}`} key={section.number}><header><span>{section.number}</span><div><p>Catalogue</p><h2>{section.title}</h2><em>{section.intro}</em></div></header><div className="catalogue-grid">{section.items.map((item, index) => <Link href={item.href} key={item.title}><small>{String(index + 1).padStart(2, "0")}</small><h3>{item.title}</h3><p>{item.intro}</p><span>进入篇章 →</span></Link>)}</div></section>)}</section>
    <footer className="catalogue-footer"><p>目录会随着新的收录继续生长。</p><Link href="/library/imagery">从意象词典继续漫游 →</Link></footer>
  </main>;
}
