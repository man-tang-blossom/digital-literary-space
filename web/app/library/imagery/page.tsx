import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";
import { imageryArchive } from "../../../data/archive-content";

export const metadata: Metadata = { title: "意象词典" };

const statusText = { verified: "已核验", "to-check": "待考", modern: "现代" };

export default function ImageryPage() {
  return (
    <main className="inner-page archive-detail">
      <SiteHeader />
      <ArchiveHeader kicker="Imagery Archive" title="意象词典" intro="先把散落的词语放回金、玉、山、水的脉络中。已确认出处的注明作者与时代，其余保留为待考素材。" />
      {Object.entries(imageryArchive).map(([id, group]) => (
        <section className="phrase-section" id={id} key={id}>
          <div className="phrase-section__intro">
            <p>{group.subtitle}</p><h2>{group.title}</h2><span>{group.description}</span>
          </div>
          <div className="phrase-cloud">
            {group.phrases.map((phrase) => (
              <article className={`phrase-chip phrase-chip--${phrase.status}`} key={phrase.text}>
                <h3>{phrase.text}</h3>
                {(phrase.source || phrase.author) && <p>{[phrase.author, phrase.era, phrase.source].filter(Boolean).join(" · ")}</p>}
                {phrase.note && <small>{phrase.note}</small>}
                <span>{statusText[phrase.status]}</span>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
