import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";
import { literaryFlavors } from "../../../data/archive-content";

export const metadata: Metadata = { title: "文心百味" };

export default function FlavorsPage() {
  return (
    <main className="inner-page archive-detail">
      <SiteHeader />
      <ArchiveHeader kicker="Literary Flavors" title="文心百味" intro="如果每个时代的文学都有一种吃法，它们会是什么味道？" status="收藏稿 · 原作者与授权待确认" />
      <div className="editorial-notice">这是一篇文学化的趣味评论，不是文学史结论。现阶段保留为收藏稿，确认原作者之前不标为 Xiaojin 原创。</div>
      <article className="flavors-article">
        <p className="flavors-lead">每个朝代的文学，说到底，是怎么吃的表演。</p>
        {literaryFlavors.map(([era, taste, text]) => (
          <section key={era}>
            <div><span>{era}</span><small>{taste}</small></div>
            <p>{text}</p>
          </section>
        ))}
        <footer>吃完这顿，桌子收了，碗筷洗了。下一场宴席，要等到新厨子来了。</footer>
      </article>
    </main>
  );
}
