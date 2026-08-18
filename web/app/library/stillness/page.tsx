import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "静处：禅与山水",
  description: "佛偈、山水与人在尘世安住的片刻。",
};

const readings = [
  {
    number: "01",
    author: "王安石 · 北宋",
    title: "先把心安顿下来",
    text: "归依法，法法不思议。\n愿我六根常寂静，心如宝月映琉璃。\n了法更无疑。",
    note: "这是《望江南·归依法》的一阕。它先说“愿”，没有摆出已经抵达的样子。人心难免被声音、欲望、念头带走；所谓寂静，是愿意一次次把它带回来。",
    href: "https://www.shidianguji.com/book/SBCK203/chapter/1kuz8dzsxzmyz",
  },
  {
    number: "02",
    author: "王维 · 唐",
    title: "走到尽头，也坐一会儿",
    text: "行到水穷处，\n坐看云起时。",
    note: "王维的山水并不只是好看。水走到尽头，脚步停下来，云却正从别处起来。禅意不在“什么都没有”，而在事情走不通时，心还留得住观看。",
    href: "https://www.gushiwen.cn/mingju/juv_e9d836551094.aspx",
  },
  {
    number: "03",
    author: "苏轼 · 北宋",
    title: "风雨里，仍慢一点走",
    text: "莫听穿林打叶声，何妨吟啸且徐行。\n竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。",
    note: "这不算佛偈，却有很深的定力。雨声没有停，路也没有忽然变好；“徐行”两个字，把人从慌乱里轻轻拉出来。",
    href: "https://www.gushiwen.cn/shiwenv_6b30455fdd3c.aspx",
  },
];

const notes = [
  { word: "六根", text: "眼、耳、鼻、舌、身、意。它们是我们与世界相接的门。六根寂静，不是把门关死，而是不让每一阵风都把屋里吹乱。" },
  { word: "归依", text: "王安石这组词写“归依佛、法、众”。这里的“归”，有回到、依靠的意思：人在纷乱里，总要认得一处可以安放心的地方。" },
  { word: "宝月与琉璃", text: "月光与琉璃都带着清亮、通透的质地。它不是冷冰冰的清醒，更像夜深之后，心里还留着一小片能照见自己的光。" },
];

export default function StillnessPage() {
  return (
    <main className="inner-page stillness-page">
      <SiteHeader />
      <section className="stillness-hero">
        <p className="page-kicker">Quiet Room / 心有清光</p>
        <h1>静处：禅与山水</h1>
        <p>这里收佛偈，也收那些没有写“禅”字、却让人慢下来的一瞬。山水在这里不是背景；它们是心安静以后，重新看见的云、月、雨和一条路。</p>
        <blockquote>愿我六根常寂静，<br />心如宝月映琉璃。</blockquote>
        <span>王安石《望江南·归依法》</span>
      </section>

      <section className="stillness-opening">
        <p>禅意不是把日子过得轻飘飘的。</p>
        <p>它知道人会被事情牵扯，会有一阵阵的雨声，也会走到水穷处。只是到了那里，不急着把自己判成困住的人；可以坐一会儿，看云从哪里起。</p>
      </section>

      <section className="stillness-section">
        <div className="archive-section__heading">
          <p>01 / Three Readings</p>
          <h2>三种安静</h2>
          <span>愿心清明，也愿人在风雨中仍有脚步</span>
        </div>
        <div className="stillness-reading-list">
          {readings.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div>
                <p>{item.author}</p>
                <h3>{item.title}</h3>
                <blockquote>{item.text.split("\n").map((line) => <span key={line}>{line}</span>)}</blockquote>
              </div>
              <div className="stillness-reading-list__note">
                <p>{item.note}</p>
                <a href={item.href} target="_blank" rel="noreferrer">查看原文与版本 →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stillness-section stillness-words">
        <div className="archive-section__heading">
          <p>02 / A Few Words</p>
          <h2>把词放回原处</h2>
          <span>不急着把古人的话说成口号</span>
        </div>
        <div className="stillness-word-grid">
          {notes.map((item) => (
            <article key={item.word}>
              <h3>{item.word}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stillness-closing">
        <p>留在这一页的，不是逃进山里。</p>
        <h2>愿你听见风雨，<br />也还认得心里的清光。</h2>
        <Link href="/library">回到文学藏馆 →</Link>
      </section>
    </main>
  );
}
