import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "文学万象" };

const categories = [
  { name: "神话", latin: "Mythology", note: "楚辞神祇、神鸟、山海与远古记忆", href: "/library/myths/nine-songs" },
  { name: "纹样", latin: "Traditional Patterns", note: "宝相花、莲花、忍冬与器物上的秩序", href: "/library/patterns/baoxianghua" },
  { name: "四时", latin: "Seasons", note: "春风、夏雨、秋声与冬雪", href: "/library#collections" },
  { name: "山河", latin: "Landscapes", note: "江海、远山、故园与行旅", href: "/library#imagery" },
  { name: "草木", latin: "Flora", note: "梅、兰、荷、桂与紫藤", href: "/library#imagery" },
  { name: "天地", latin: "Heaven & Earth", note: "日月、星辰、风云与万物", href: "/library#imagery" },
  { name: "人间", latin: "Human World", note: "相逢、离别、家国与日常", href: "/library#collections" },
  { name: "时间", latin: "Time", note: "记忆、历史、迟暮与新生", href: "/library#collections" },
  { name: "梦境", latin: "Dreams", note: "想象、幻觉与未抵达之处", href: "/library#collections" },
  { name: "器物", latin: "Objects", note: "酒、葫芦、金樽、玉箫、灯、舟与剑", href: "/library/objects/gourd" },
  { name: "色彩", latin: "Colors", note: "青绿、天青、月白、鹅黄与黛色", href: "/library#colors" },
  { name: "故事", latin: "Anecdotes", note: "作者身上温柔、浪漫而重要的小事", href: "/library#stories" },
  { name: "文字", latin: "Language", note: "重新命名，也重新看见日常生活", href: "/library#essays" },
];

export default function UniversePage() {
  return (
    <main className="inner-page">
      <SiteHeader />
      <section className="page-intro page-intro--wide">
        <p className="page-kicker">Literary Categories</p>
        <h1>文学万象</h1>
        <p>从四时草木进入文学，也从山河、梦境、器物与人间心事重新看见作品。</p>
      </section>
      <section className="category-grid" aria-label="文学分类">
        {categories.map((category, index) => (
          <Link className="category-card" href={category.href} key={category.name}>
            <span className="category-card__number">{String(index + 1).padStart(2, "0")}</span>
            <p>{category.latin}</p>
            <h2>{category.name}</h2>
            <div className="category-card__line" />
            <p className="category-card__note">{category.note}</p>
            <span className="category-card__status">进入相关内容</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
