import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "七夕：银河、针线与人间巧",
  description: "从牵牛织女到《东京梦华录》里的乞巧楼，读七夕的星河与人间。",
};

const poems = [
  {
    title: "《古诗十九首·迢迢牵牛星》", author: "佚名 · 汉代古诗", lines: ["迢迢牵牛星，皎皎河汉女。", "纤纤擢素手，札札弄机杼。", "终日不成章，泣涕零如雨。", "河汉清且浅，相去复几许。", "盈盈一水间，脉脉不得语。"],
    translation: "遥远的牵牛星，对面是明亮的织女星。织女的手很白很细，织机发出札札的声音；可她整日坐在那里，一匹布也织不成，眼泪倒像雨一样落下来。银河看起来清浅，两个人相隔也不算太远，偏偏只隔着这一湾水，只能含情相望，说不出一句话。",
    note: "这首诗还没有把七夕写成热闹的节日。它写的是“看得见，却无法靠近”的相思。",
  },
  {
    title: "《鹊桥仙·纤云弄巧》", author: "秦观 · 北宋", lines: ["纤云弄巧，飞星传恨，银汉迢迢暗度。", "金风玉露一相逢，便胜却、人间无数。", "柔情似水，佳期如梦，忍顾鹊桥归路。", "两情若是久长时，又岂在、朝朝暮暮。"],
    translation: "薄云在天上变出花样，流星像替人传递遗憾，银河在夜里静静流过去。秋风与白露相逢的这一刻，胜过人间许多寻常的相守。相会的时光短得像梦，怎么忍心回头看那条马上要分别的鹊桥路？可若两个人的心意能够长久，又何必一定日日相守。",
    note: "秦观没有否认离别，只把相守的意思写得更宽：不是每天在一起，才算长久。",
  },
  {
    title: "《乞巧》", author: "林杰 · 唐", lines: ["七夕今宵看碧霄，牵牛织女渡河桥。", "家家乞巧望秋月，穿尽红丝几万条。"],
    translation: "今夜大家抬头看深青色的天空，看牵牛和织女渡过银河。家家户户都在月下求巧，一根又一根红丝穿过针孔，不知道已经穿了多少。",
    note: "这一首才是人间真正的七夕：屋檐下有月光，手里有针和红线，女孩们为自己求一份灵巧。",
  },
  {
    title: "《七夕》", author: "杨朴 · 北宋", lines: ["未会牵牛意若何，须邀织女弄金梭。", "年年乞与人间巧，不道人间巧已多。"],
    translation: "我不太明白牵牛星到底是什么心思，怎么每年都请织女来摆弄金梭，把灵巧赐给人间。难道他不知道，人间的机巧，本来已经很多了吗？",
    note: "杨朴没有顺着节日只说吉祥话。他轻轻问了一句，给七夕留下一点清醒的幽默。",
  },
  {
    title: "《七夕》", author: "白居易 · 唐", lines: ["烟霄微月澹长空，银汉秋期万古同。", "几许欢情与离恨，年年并在此宵中。"],
    translation: "淡淡的月亮挂在带烟的长空里，银河的秋期，千百年来都是这样。多少相见的欢喜，多少分别的遗憾，都在这一夜同时发生。",
    note: "它只有四句，却把七夕说得很全：不是纯粹的甜，也不是纯粹的苦。",
  },
];

export default function QixiPage() {
  return (
    <main className="inner-page archive-detail qixi-page">
      <SiteHeader />
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
      <section className="archive-hero qixi-hero">
        <p className="page-kicker">Festival Notes / 秋夜 · 星河 · 人间巧</p>
        <h1>七夕</h1>
        <span>银河、针线与人间巧</span>
      </section>
      <section className="qixi-opening">
        <p>七夕不只是一对恋人隔着银河相会。它先是一夜抬头看星，也是一群女孩坐在庭院里穿针、摆瓜果、求一双灵巧的手。后来，人们才慢慢把自己的离别、相思、婚姻和愿望，也放进牵牛织女的故事里。</p>
      </section>

      <section className="qixi-poems">
        <div className="archive-section__heading"><p>01 / Poetry</p><h2>星河两边</h2><span>相望、相会，也有不肯说尽的离恨</span></div>
        {poems.map((poem, index) => (
          <article className="qixi-poem" id={poem.title.includes("鹊桥仙") ? "queqiao-xian" : undefined} key={poem.title + poem.author}>
            <p>{String(index + 1).padStart(2, "0")} / {poem.author}</p>
            <h3>{poem.title}</h3>
            <blockquote>{poem.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
            <div><h4>译文</h4><p>{poem.translation}</p><h4>读这首诗</h4><p>{poem.note}</p></div>
          </article>
        ))}
      </section>

      <section className="qixi-tokyo">
        <div className="archive-section__heading"><p>02 / A City at Festival</p><h2>《东京梦华录》里的七夕</h2><span>北宋汴京：星河落到一座城里</span></div>
        <p>孟元老写的不是一夜的浪漫，而是一座城从节前几日就开始苏醒的样子。街上车马塞满，穿罗着绮的人来来往往。人们买还未全开的荷花，又想办法做成“双头莲”带回去玩赏；孩子拿着新荷叶，特地打扮得鲜亮。</p>
        <blockquote>七夕前三五日，车马盈市，罗绮满街。旋折未开荷花，都人善假做双头莲，取玩一时，提携而归，路人往往嗟爱。</blockquote>
        <p>初六、初七的夜里，贵家会在庭院里搭彩楼，叫作“乞巧楼”。楼里摆着泥偶、花瓜、酒炙、笔砚和针线；女孩献上自己的手艺，焚香行礼，向织女求巧。</p>
        <blockquote>贵家多结彩楼于庭，谓之乞巧楼。铺陈磨喝乐、花瓜、酒炙、笔砚、针线，或儿童裁诗，女郎呈巧，焚香列拜，谓之乞巧。</blockquote>
        <p>妇女还会在月下穿针，或把小蜘蛛放进盒子，第二天看蛛网；若结得圆正，就算得了巧。</p>
        <blockquote>妇女望月穿针，或以小蜘蛛安合子内，次日看之，若网圆正，谓之得巧。</blockquote>
        <div className="qixi-objects"><span>磨喝乐：彩饰的小泥偶</span><span>花瓜：雕成花样的瓜果</span><span>双头莲：节前街市里被争相玩赏的吉兆</span><span>乞巧楼：庭院里临时搭起的节日小楼</span></div>
      </section>

      <section className="qixi-afterword">
        <p className="page-kicker">03 / Threads</p>
        <h2>七夕的线，最后都回到人间。</h2>
        <p>它连着星河，也连着针线；连着离别，也连着一座城里的荷花、瓜果、孩子和灯火。古人不是只在这天等待爱情，他们也在这天祝愿自己的手更巧，日子更好，想见的人能够相见。</p>
        <div><Link href="/library/flowers">连到花事篇：荷花、双头莲 →</Link><Link href="/library/jianghu-farewell">连到江湖再见：相会与离别 →</Link><Link href="/nebula">进入文学星云：搜索“七夕” →</Link></div>
      </section>

      <footer className="source-list qixi-sources"><h2>资料来源</h2><a href="https://www.shidianguji.com/book/HY0001/chapter/HY0001_74" target="_blank" rel="noreferrer">《东京梦华录·七夕》<span>↗</span></a><a href="https://zh.wikisource.org/zh-hans/%E4%B9%9E%E5%B7%A7" target="_blank" rel="noreferrer">林杰《乞巧》<span>↗</span></a><a href="https://zh.wikisource.org/wiki/%E4%B8%83%E5%A4%95_%28%E7%99%BD%E5%B1%85%E6%98%93%29" target="_blank" rel="noreferrer">白居易《七夕》<span>↗</span></a></footer>
    </main>
  );
}
