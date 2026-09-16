import Link from "next/link";
import { ArchiveHeader } from "../../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { places } from "./place-data";

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = places[slug];
  if (!place) return <main className="inner-page archive-detail"><SiteHeader /><ArchiveHeader kicker="Place Archive" title="这座楼台正在整理" intro="先回到登临篇，继续从别处读起。" /></main>;
  return <main className="inner-page archive-detail place-reader"><SiteHeader /><ArchiveHeader kicker="Place Archive" title={place.name} intro={place.title} status={place.place} />
    <section className="place-reader__quote"><blockquote>{place.quote}</blockquote></section>
    <section className="place-reader__sections"><article><p>地理</p><div><h2>它在什么地方</h2><p>{place.geography}</p></div></article><article><p>沿革</p><div><h2>一座建筑怎样留下来</h2><p>{place.history}</p></div></article><article><p>空间</p><div><h2>人为什么愿意登上去</h2><p>{place.space}</p></div></article><article><p>文章</p><div><h2>文字怎样让它有了另一种生命</h2><p>{place.literature}</p></div></article></section>
    {place.readingHref && <Link className="place-reader__reading" href={place.readingHref}>{place.readingLabel} →</Link>}
    <footer className="source-list place-reader__sources"><p>地方沿革参照 <a href={place.source} target="_blank" rel="noreferrer">相关资料</a>。</p><Link href="/library/landmarks">← 回到登临篇</Link></footer>
  </main>;
}
