import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";
import { autumnRainReadings } from "../../../data/autumn-rain-readings";
import { springRainReadings } from "../../../data/spring-rain-readings";
import { summerStormReadings } from "../../../data/summer-storm-readings";

export const metadata: Metadata = { title: "雨篇 · 春雨、夏雨、秋雨", description: "春雨、夏雨、秋雨。沿着四时的雨声阅读。" };

const seasons = [
  { name: "春雨", english: "Spring Rain", note: "小雨、夜雨、杏花与清明路", status: "已归栏", href: "#spring-rain" },
  { name: "夏雨", english: "Summer Rain", note: "荷叶、雷声、黑云与骤雨", status: "已归栏", href: "#summer-rain" },
  { name: "秋雨", english: "Autumn Rain", note: "残荷、梧桐与夜深的灯", status: "已归栏", href: "#autumn-rain" },
];

export default function RainPage() {
  return (
    <main className="inner-page archive-detail rain-page">
      <SiteHeader />
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
      <section className="archive-hero rain-hero"><p className="page-kicker">Rain Archive / 雨篇</p><h1>雨</h1><span>春雨 · 夏雨 · 秋雨</span></section>
      <section className="rain-season-grid" aria-label="雨的四季">
        {seasons.map((season) => season.href ? <Link href={season.href} key={season.name}><p>{season.english}</p><h2>{season.name}</h2><span>{season.note}</span><small>{season.status} →</small></Link> : <article key={season.name}><p>{season.english}</p><h2>{season.name}</h2><span>{season.note}</span><small>{season.status}</small></article>)}
      </section>
      <section className="summer-storm rain-section--spring" id="spring-rain">
        <div className="summer-storm__hero"><p className="page-kicker">Spring Rain / 春雨</p><h2>春雨</h2><span>小雨、夜雨、杏花雨与清明时节</span></div>
        <div className="summer-storm__poems">
          {springRainReadings.map((reading, index) => <article key={reading.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><p>{["初春小雨", "春夜喜雨", "杏花雨", "清明时节"][index]}</p><h3>{reading.author}《{reading.title}》</h3></div>
            <Link href={`/library/rain/${reading.slug}`} aria-label={`阅读${reading.author}《${reading.title}》全文、译文与说明`}><blockquote>{reading.excerpt.map((line) => <span key={line}>{line}</span>)}</blockquote><small>点击读全文、译文与说明 →</small></Link>
          </article>)}
        </div>
      </section>
      <section className="summer-storm" id="summer-rain">
        <div className="summer-storm__hero"><p className="page-kicker">Late Summer / 处暑</p><h2>夏末的一场疾风骤雨</h2><span>古人是这样描写的</span></div>
        <div className="summer-storm__poems">
          {summerStormReadings.map((reading, index) => <article key={reading.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><p>{["海棠骤雨", "荷上急雨", "风如拔山", "翻墨跳珠"][index]}</p><h3>{reading.author}《{reading.title}》</h3></div>
            <Link href={`/library/rain/${reading.slug}`} aria-label={`阅读${reading.author}《${reading.title}》全文、译文与说明`}><blockquote>{reading.excerpt.map((line) => <span key={line}>{line}</span>)}</blockquote><small>点击读全文、译文与说明 →</small></Link>
          </article>)}
        </div>
      </section>
      <section className="summer-storm rain-section--autumn" id="autumn-rain">
        <div className="summer-storm__hero"><p className="page-kicker">Autumn Rain / 秋雨</p><h2>秋雨</h2><span>江天暮雨，巴山夜雨，梧桐、残荷与芭蕉</span></div>
        <div className="summer-storm__poems">
          {autumnRainReadings.map((reading, index) => <article key={reading.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><p>{["江天暮雨", "巴山夜雨", "残荷听雨", "芭蕉夜雨"][index]}</p><h3>{reading.author}《{reading.title}》</h3></div>
            <Link href={`/library/rain/${reading.slug}`} aria-label={`阅读${reading.author}《${reading.title}》全文、译文与说明`}><blockquote>{reading.excerpt.map((line) => <span key={line}>{line}</span>)}</blockquote><small>点击读全文、译文与说明 →</small></Link>
          </article>)}
        </div>
      </section>
      <section className="qixi-afterword rain-links"><div><Link href="/library/seasons/summer">连到四时篇：夏 →</Link><Link href="/library/flowers">连到花事篇：荷花 →</Link><Link href="/nebula">进入文学星云：搜索“雨” →</Link></div></section>
    </main>
  );
}
