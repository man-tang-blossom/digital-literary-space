import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";
export const metadata: Metadata = { title: "四时篇·冬：雪、炉火与夜归人" };
const cards = [
  ["大雪 / 寒江", "江雪", "柳宗元 · 唐", ["千山鸟飞绝，万径人踪灭。", "孤舟蓑笠翁，独钓寒江雪。"], "雪下得很大，山路和鸟影都没有了。江上却还有一个人，安静地坐在船里。"],
  ["大雪 / 塞外", "白雪歌送武判官归京·选句", "岑参 · 唐", ["北风卷地白草折，胡天八月即飞雪。"], "北风一来，草折，雪也来得早。冬天在边塞，总带着一种迎面而来的力气。"],
  ["冬夜 / 围炉", "问刘十九", "白居易 · 唐", ["绿蚁新醅酒，红泥小火炉。", "晚来天欲雪，能饮一杯无？"], "酒是新酿的，炉子很小，雪还没有落下来。朋友若能来，冬夜就有了去处。"],
  ["风雪夜 / 柴门", "逢雪宿芙蓉山主人", "刘长卿 · 唐", ["日暮苍山远，天寒白屋贫。", "柴门闻犬吠，风雪夜归人。"], "天黑以后，先听见狗叫，才知道有人顶着风雪回来了。诗到这里收住，屋里忽然有了一点人气。"],
];
export default function WinterPage() { return <main className="inner-page archive-detail seasons-page winter-page"><SiteHeader /><Link className="archive-back" href="/library">← 返回文学藏馆</Link><section className="archive-hero seasons-hero"><p className="page-kicker">Four Seasons / 四时篇</p><h1>冬</h1><span>雪、炉火与夜归人</span></section><nav className="season-timeline">{[["春","spring"],["夏","summer"],["秋","autumn"],["冬","winter"]].map(([name,slug]) => name === "冬" ? <strong key={name}>冬 · 正在展开</strong> : <Link key={name} href={`/library/seasons/${slug}`}>{name} · 已归栏</Link>)}</nav><div className="solar-terms">{["立冬","小雪","大雪","冬至","小寒","大寒"].map(t=><span key={t}>{t}</span>)}</div><section className="seasons-opening"><p>冬天有两种光。一种落在雪地上，冷而明净；一种留在屋里，照着一只小炉、一杯新酒，也照着夜归的人。</p></section><section className="season-moments">{cards.map(([term,title,author,lines,reading],i)=><article className="season-moment" key={title}><div className="season-moment__time"><span>{String(i+1).padStart(2,"0")}</span><p>{term}</p></div><div className="season-moment__poem"><p>{author}</p><h2>《{title}》</h2><blockquote>{(lines as string[]).map(line=><span key={line}>{line}</span>)}</blockquote></div><div className="season-moment__reading"><h3>读这一刻</h3><p>{reading}</p></div></article>)}</section><section className="season-rain-link"><p>雪将单独开成意象篇，接到梅花、鹤、湖心亭与踏雪寻梅。</p><Link href="/library/travel/huxinting">先去读张岱的湖心亭雪夜 →</Link></section></main>; }
