import type { Metadata } from "next";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "日常篇 · 婚礼" };

const poems = [
  {
    number: "一",
    kind: "桃花",
    theme: "恬静青春的婚礼",
    title: "《诗经·周南·桃夭》",
    lines: ["桃之夭夭，灼灼其华。", "之子于归，宜其室家。", "", "桃之夭夭，有蕡其实。", "之子于归，宜其家室。", "", "桃之夭夭，其叶蓁蓁。", "之子于归，宜其家人。"],
    prose: "桃花初开，果实渐丰，枝叶慢慢长满。古人把它唱给出嫁的女子。花很明亮，祝愿却很安静，愿她走进新的家里，和身边的人相处得宜。",
    translation: "桃树的花开得鲜明，果实渐渐结实，枝叶也越来越茂盛。这个姑娘要出嫁了，愿她在新的家庭里安稳、和乐。",
  },
  {
    number: "二",
    kind: "却扇",
    theme: "婚礼浪漫的留白",
    title: "李商隐《代董秀才却扇》",
    lines: ["莫将画扇出帘栊，", "遮掩春山滞上才。", "若道团圆似明月，", "此中须放桂花开。"],
    prose: "唐人的婚礼上，新娘常以团扇遮面。礼成后，有人作诗请她移开扇子，称为却扇诗。李商隐把圆扇比作明月，又说月中总该露出桂花。扇子还没有移开，花烛夜里已有一点带笑的等待。",
    translation: "别把画扇一直挡在帘边，遮住了如春山般的眉目，也让才子等得心急。若把团扇比作圆月，月中总该露出桂花。",
  },
  {
    number: "三",
    kind: "琴瑟",
    theme: "婚礼留下的誓言与安宁",
    title: "《诗经·郑风·女曰鸡鸣》",
    lines: ["宜言饮酒，与子偕老。", "琴瑟在御，莫不静好。"],
    prose: "婚礼里的喜悦到了这里，忽然安静下来。两个人喝一点酒，弹琴，日子没有被说得多么盛大。它写的是婚后真正会遇见的生活，有一间屋子，有人陪伴，有话可以慢慢说。",
    translation: "把酒摆好，愿我们一起到老。琴瑟弹起来，满室安宁和美。",
  },
];

const objects = [
  { name: "雁", note: "纳采时送出的礼物，替一段婚事先到门前。" },
  { name: "团扇", note: "遮住新娘的面容，也留住花烛前的一点等待。" },
  { name: "合卺", note: "两半葫芦作瓢，共饮一杯酒。" },
  { name: "花烛", note: "成双点在堂前，照着拜堂与入房。" },
  { name: "婚书", note: "写下姓名、媒人和约定，郑重地告诉两家人。" },
  { name: "妆奁", note: "箱笼、镜台、衣物，出嫁时带走的一点日常。" },
  { name: "喜果", note: "枣、栗、桂圆、花生，各地有各地的祝词。" },
  { name: "红绸", note: "有些地方让新人各执一端，牵着走进新房。" },
];

export default function MarriagePage() {
  return (
    <main className="inner-page archive-detail marriage-page marriage-poems-page">
      <SiteHeader />
      <ArchiveHeader
        kicker="Daily Life Archive 01"
        title="日常篇 · 婚礼"
        intro="欢喜与契约"
      />

      <section className="marriage-poem-cards">
        {poems.map((poem) => (
          <article key={poem.title} className={`marriage-poem-card marriage-poem-card--${poem.number}`}>
            <div className="marriage-poem-card__heading"><span>{poem.number}</span><p>{poem.kind}</p><h2>{poem.title}</h2><em>{poem.theme}</em></div>
            <blockquote>{poem.lines.map((line, index) => line ? <span key={`${line}-${index}`}>{line}</span> : <i key={`space-${index}`} />)}</blockquote>
            <div className="marriage-poem-card__reading"><p>{poem.prose}</p><details><summary>译文</summary><p>{poem.translation}</p></details></div>
          </article>
        ))}
      </section>

      <section className="marriage-letter" aria-labelledby="marriage-letter-title">
        <div className="marriage-letter__heading">
          <p>Marriage Letter</p>
          <span>四</span>
          <h2 id="marriage-letter-title">古代婚书是什么</h2>
          <b>写给一段婚约的正式信</b>
        </div>
        <div className="marriage-letter__body">
          <p>古代没有一张全国通用的婚书。唐代敦煌留下的文书里，有男方送出的通婚书，也有女方家的答婚书。后来还有聘书、请期书，分别用来送聘礼、商定婚期。</p>
          <p>它先写日期和双方姓名，再写媒人、结亲意愿与答复。男方常说自己“未有伉俪”，听闻女方“令淑有闻”，愿意“敢以礼请”。这些话很郑重，婚书也确实具有礼仪和约定的意义。</p>
          <div className="marriage-letter__sample">
            <small>仿古婚书文案</small>
            <blockquote>某年某月某日<br />某谨白。<br />承贤某女，温厚明朗，久闻其名。<br />今因相识，愿结两姓之好。<br />谨奉此书，敬告亲友。</blockquote>
            <p>今天再写婚书，可以留下古人落笔时的郑重，也把最重要的一句话写清楚，两个人自愿相爱，平等相待。</p>
          </div>
          <a href="https://cssn.cn/lsx/lsx_zgs/202306/t20230605_5642834.shtml" target="_blank" rel="noreferrer">读敦煌婚书与婚俗材料 ↗</a>
        </div>
      </section>

      <section className="marriage-object-cabinet" aria-labelledby="marriage-object-cabinet-title">
        <header>
          <p>Wedding Cabinet</p>
          <h2 id="marriage-object-cabinet-title">婚礼里的小物件</h2>
          <span>它们原本都很寻常。到了婚礼这一天，便盛着人们对新日子的祝愿。</span>
        </header>
        <div>
          {objects.map((object, index) => (
            <article key={object.name}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{object.name}</h3>
              <p>{object.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marriage-poems-afterword">
        <p>团扇移开，琴瑟响起，桃花还在树上。</p>
        <p>愿你所遇见的人，也愿意同你把平常日子过得安静而好。</p>
      </section>
    </main>
  );
}
