import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "月下人间｜数字文学空间",
  description: "张若虚、晏殊、苏轼与李白笔下的春江、明月与人间相望。",
};

const readings = [
  {
    number: "01",
    shape: "春江与万古",
    author: "张若虚",
    title: "春江花月夜",
    lines: ["春江潮水连海平，海上明月共潮生。", "江天一色无纤尘，皎皎空中孤月轮。", "江畔何人初见月？江月何年初照人？", "谁家今夜扁舟子，何处相思明月楼？"],
    reading: "张若虚把月写得很大。它从海上升起，照过花林，也照过一代代人。可诗走到“扁舟子”和“明月楼”时，辽阔的江月里有了两个人的相思。",
    note: "唐 · 乐府歌行",
  },
  {
    number: "02",
    shape: "月与远人",
    author: "苏轼",
    title: "水调歌头·明月几时有",
    lines: ["明月几时有？把酒问青天。", "我欲乘风归去，又恐琼楼玉宇，高处不胜寒。", "人有悲欢离合，月有阴晴圆缺，此事古难全。", "但愿人长久，千里共婵娟。"],
    reading: "丙辰中秋，苏轼喝到天亮，想念远在他处的弟弟苏辙。月亮照着无眠的人，也照着相隔千里的人。最后这句没有把离别说轻，只是把祝愿送得很远。",
    note: "北宋 · 中秋怀子由",
  },
  {
    number: "03",
    shape: "月与孤身",
    author: "李白",
    title: "月下独酌·其一",
    lines: ["花间一壶酒，独酌无相亲。", "举杯邀明月，对影成三人。", "我歌月徘徊，我舞影零乱。", "永结无情游，相期邈云汉。"],
    reading: "李白一个人喝酒，便把月亮和影子请到席上。月不能饮，影也不会说话，酒席仍旧很热闹。他把一场孤独写得有光，有舞，也有很远很远的相约。",
    note: "唐 · 花间独酌",
    href: "/library/poets/li-bai/drinking-alone-under-moon",
  },
  {
    number: "04",
    shape: "溶溶月与庭院",
    author: "晏殊",
    title: "寓意",
    lines: ["油壁香车不再逢，峡云无迹任西东。", "梨花院落溶溶月，柳絮池塘淡淡风。", "几日寂寥伤酒后，一番萧瑟禁烟中。", "鱼书欲寄何由达，水远山长处处同。"],
    reading: "这首诗写得很静。香车已经不再来，人在院落里看梨花、月色和池塘边的柳絮。月光是满的，风也很轻，思念却没有地方送去。晏殊把离情藏在景里，读到最后，才知道这片春夜一直有人在等。",
    note: "北宋 · 怀人诗",
  },
];

export default function MoonlitWorldPage() {
  return (
    <main className="inner-page archive-detail moonlit-page">
      <SiteHeader />
      <ArchiveHeader
        kicker="Moonlit World"
        title="月下人间"
        intro="春江、明月，与万古和人间的相望。"
        status="张若虚 · 晏殊 · 苏轼 · 李白"
      />

      <section className="moonlit-opening">
        <p>月照在水上，也照在人身上。张若虚问江月从何时照见人，晏殊在梨花院落里怀念旧人，苏轼隔着千里想念弟弟，李白独自饮酒，把月与影邀进来。</p>
        <p>四个人抬头看月，心里装着的事并不相同。</p>
      </section>

      <section className="moonlit-readings" aria-label="月下四读">
        {readings.map((work) => {
          const body = <article className="moonlit-work">
            <header><span>{work.number}</span><p>{work.shape}</p><h2>{work.author}《{work.title}》</h2><small>{work.note}</small></header>
            <blockquote>{work.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
            <p className="moonlit-work__reading">{work.reading}</p>
            {work.href && <small className="moonlit-work__link">读全文、译文与赏析 →</small>}
          </article>;
          return work.href ? <Link key={work.title} href={work.href}>{body}</Link> : <div key={work.title}>{body}</div>;
        })}
      </section>

      <section className="moonlit-afterword">
        <p>月亮没有替人解决离别，也没有替人留住青春。</p>
        <p>它只是一直在水上，在酒里，在远行人的船边。</p>
      </section>

      <footer className="source-list moonlit-sources">
        <p>文本参照 <a href="https://zh.wikisource.org/zh-hans/%E6%98%A5%E6%B1%9F%E8%8A%B1%E6%9C%88%E5%A4%9C_(%E5%BC%B5%E8%8B%A5%E8%99%9A)" target="_blank" rel="noreferrer">《春江花月夜》</a>、<a href="https://zh.wikisource.org/zh-hans/%E5%AF%93%E6%84%8F_(%E6%99%8F%E6%AE%8A)" target="_blank" rel="noreferrer">晏殊《寓意》</a>、<a href="https://zh.wikisource.org/zh-hans/%E4%BD%86%E9%A1%98%E4%BA%BA%E9%95%B7%E4%B9%85_(%E9%84%A7%E9%BA%97%E5%90%9B%E6%AD%8C%E6%9B%B2)" target="_blank" rel="noreferrer">《水调歌头》</a> 与 <a href="https://zh.wikisource.org/zh-hans/%E6%9C%88%E4%B8%8B%E7%8D%A8%E9%85%8C_(%E8%8A%B1%E9%96%93%E4%B8%80%E5%A3%BA%E9%85%92)" target="_blank" rel="noreferrer">《月下独酌》</a>。</p>
      </footer>
    </main>
  );
}
