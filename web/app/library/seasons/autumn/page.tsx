import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";
export const metadata: Metadata = { title: "四时篇·秋：月色、梧桐与远行" };
const cards = [
  ["立秋 / 新雨", "山居秋暝", "王维 · 唐", ["空山新雨后，天气晚来秋。", "明月松间照，清泉石上流。"], "雨过以后，山里一下静了。月光落在松间，泉水从石上流过去。"],
  ["白露 / 秋日高处", "秋词·其一", "刘禹锡 · 唐", ["自古逢秋悲寂寥，我言秋日胜春朝。", "晴空一鹤排云上，便引诗情到碧霄。"], "秋天也可以明亮。鹤飞进高空，诗人的心也跟着高起来。"],
  ["中秋 / 人间共月", "水调歌头·选句", "苏轼 · 北宋", ["但愿人长久，千里共婵娟。"], "月亮不替人团聚，却给远处的人一个共同抬头的地方。"],
  ["秋雨 / 残荷", "宿骆氏亭寄怀崔雍崔衮·选句", "李商隐 · 唐", ["秋阴不散霜飞晚，留得枯荷听雨声。"], "荷花已过，荷叶也枯了。雨声因此有了更深的一层。"],
  ["秋雨 / 梧桐", "水仙子·夜雨·选句", "徐再思 · 元", ["一声梧叶一声秋，一点芭蕉一点愁。"], "雨落在梧桐和芭蕉上。秋意就在这些细碎的声音里。"],
];
export default function AutumnPage() { return <main className="inner-page archive-detail seasons-page autumn-page"><SiteHeader /><Link className="archive-back" href="/library">← 返回文学藏馆</Link><SeasonTop season="秋" subtitle="月色、梧桐与远行" active="秋" terms={["立秋", "处暑", "白露", "秋分", "寒露", "霜降"]} opening="秋天先从一场新雨开始。暑气退下去，月亮升起来，梧桐和残荷慢慢接住雨声。也有人在霜晨出发，走过板桥，往更远的地方去。" cards={cards} /><section className="season-rain-link"><Link href="/library/rain#autumn-rain">进入「雨」篇，读秋雨 →</Link></section></main>; }
function SeasonTop({ season, subtitle, active, terms, opening, cards }: { season:string; subtitle:string; active:string; terms:string[]; opening:string; cards:string[][] }) { return <><section className="archive-hero seasons-hero"><p className="page-kicker">Four Seasons / 四时篇</p><h1>{season}</h1><span>{subtitle}</span></section><nav className="season-timeline">{["春","夏","秋","冬"].map(x => x === active ? <strong key={x}>{x} · 正在展开</strong> : <Link key={x} href={`/library/seasons/${x === "春" ? "spring" : x === "夏" ? "summer" : x === "冬" ? "winter" : "autumn"}`}>{x} · 已归栏</Link>)}</nav><div className="solar-terms">{terms.map(t => <span key={t}>{t}</span>)}</div><section className="seasons-opening"><p>{opening}</p></section><section className="season-moments">{cards.map(([term,title,author,...rest], i) => { const lines = rest.slice(0,-1); const reading = rest.at(-1); return <article className="season-moment" key={title}><div className="season-moment__time"><span>{String(i+1).padStart(2,"0")}</span><p>{term}</p></div><div className="season-moment__poem"><p>{author}</p><h2>《{title}》</h2><blockquote>{lines.map(line=><span key={line}>{line}</span>)}</blockquote></div><div className="season-moment__reading"><h3>读这一刻</h3><p>{reading}</p></div></article>})}</section></>; }
