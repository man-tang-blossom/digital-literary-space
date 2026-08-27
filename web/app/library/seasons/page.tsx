import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = { title: "四时篇：春夏秋冬" };

const seasons = [
  { name: "春", english: "Spring", subtitle: "东风、春雨与满城花开", text: "草色初生，纸鸢上天，春江先暖，最后花压低枝。", href: "/library/seasons/spring" },
  { name: "夏", english: "Summer", subtitle: "荷风、梅雨与长夜", text: "从荷尖到满塘碧叶，从午睡到蛙声与流萤。", href: "/library/seasons/summer" },
  { name: "秋", english: "Autumn", subtitle: "月色、梧桐与远行", text: "新雨、晴空、江天暮雨，还有霜晨板桥上的行人。", href: "/library/seasons/autumn" },
  { name: "冬", english: "Winter", subtitle: "雪、炉火与夜归人", text: "寒江的雪，屋里的酒，与柴门外顶雪归来的人。", href: "/library/seasons/winter" },
];

export default function SeasonsPage() { return <main className="inner-page seasons-index"><SiteHeader /><section className="page-intro page-intro--wide"><p className="page-kicker">Four Seasons</p><h1>四时篇</h1><p>春夏秋冬，先是天时，后来才落进诗里。每一季都按节气和物候展开，诗句可以继续走到原文、译文与读法。</p></section><section className="seasons-index-grid">{seasons.map((season) => <Link className={`season-index-card season-index-card--${season.english.toLowerCase()}`} href={season.href} key={season.name}><small>{season.english}</small><h2>{season.name}</h2><h3>{season.subtitle}</h3><p>{season.text}</p><span>进入这一季 →</span></Link>)}</section></main>; }
