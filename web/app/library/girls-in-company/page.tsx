import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "少女篇 · 笑语喧然｜数字文学空间",
  description: "采桑、斗草、踏歌、棹歌与归浣。古诗里结伴而行的女子。",
};

const scenes = [
  {
    number: "01", scene: "春径斗草", source: "晏殊《破阵子·春景》", tone: "grass", visual: "春日桑径，两位少女隔着新绿相遇。衣袖、草茎与刚刚赢来的小小欢喜都在风里。",
    lines: ["巧笑东邻女伴，采桑径里逢迎。", "疑怪昨宵春梦好，元是今朝斗草赢。", "笑从双脸生。"],
    translation: "邻家的女伴在采桑的小路上相遇。有人斗草赢了，于是连昨夜的好梦也像有了缘故，笑意从两张脸上一起生出来。",
    reading: "少女们在采桑小路间游戏欢笑。赢了一场小小的游戏，就够高兴半天。竹筐还在手边，草茎在指间，春日也就这样过去。",
  },
  {
    number: "02", scene: "江堤踏歌", source: "刘禹锡《踏歌词四首·其一》", tone: "riverbank", visual: "春江满平，月亮刚起。几位少女连袂走过堤岸，远处是映着霞光的树与鹧鸪。",
    lines: ["春江月出大堤平，堤上女郎连袂行。", "唱尽新词欢不见，红霞映树鹧鸪鸣。"],
    translation: "春江涨平了堤岸，月亮升起来。姑娘们挽着手走在堤上，边走边唱。歌唱完了，她们也走远了，只剩红霞映着树影，鹧鸪还在叫。",
    reading: "少女们在开阔的江边行走欢笑。歌唱完了，红霞仍映着树影，鹧鸪还在叫。",
  },
  {
    number: "03", scene: "荷塘棹歌", source: "三位诗人写采莲", tone: "lotus", visual: "荷叶铺满水面，几只小舟从花影里穿出。有人回头说话，有人俯身采莲，船桨拨开一层微波。",
    works: [
      { source: "李白《采莲曲》", lines: ["若耶溪旁采莲女，笑隔荷花共人语。", "日照新妆水底明，风飘香袖空中举。"], translation: "若耶溪边的采莲少女，隔着荷花说话欢笑。日光照着新妆，水底也映得明亮，风把衣袖吹起。", reading: "李白先听见笑语，才看见荷花深处的人。她们在水面上自在说话，连风和日光都跟着明亮起来。" },
      { source: "王昌龄《采莲曲二首·其一》", lines: ["吴姬越艳楚王妃，争弄莲舟水湿衣。", "来时浦口花迎入，采罢江头月送归。"], translation: "吴地的少女艳丽动人，在莲舟上争着玩闹，衣裳都被水打湿。来时浦口花儿像迎着她们，采莲完毕，江头的月亮又送她们回去。", reading: "“争弄”二字写出少女们在船上的淘气与热闹。水湿衣裳也不妨碍玩兴，花与月替她们记下一天。" },
      { source: "张籍《采莲曲》", lines: ["秋江岸边莲子多，采莲女儿并船歌。", "青房圆实齐戢戢，争前竞折漾微波。"], translation: "秋江岸边莲子很多，采莲的姑娘并着船唱歌。莲蓬里的果实密密匝匝，大家争着上前采折，水面荡起细细的波纹。", reading: "这里有收获时的忙碌，也有同伴间的竞争。船挨着船，歌接着歌，江面被船桨和笑声一层层漾开。" },
    ],
  },
  {
    number: "04", scene: "风里并舟", source: "张潮《采莲词》", tone: "wind", visual: "江云压低，风从水面吹来。两只莲舟靠在一起，两个相识的女孩并肩把船划向岸边。",
    lines: ["朝出沙头日正红，晚来云起半江中。", "赖逢邻女曾相识，并著莲舟不畏风。"],
    translation: "清早出发时，太阳正红。傍晚江上起云，风也大了。幸好遇到相熟的邻家女子，两只采莲船靠在一起，便敢迎着风走。",
    reading: "她们并不是娇柔的少女，而是可以见风雨的青春年华。",
  },
  {
    number: "05", scene: "竹喧归浣", source: "王维《山居秋暝》", tone: "bamboo", visual: "雨后山谷，湿衣搭在臂弯，少女们从竹林深处归来。人还未完全显露，笑声先落在清泉旁。",
    lines: ["竹喧归浣女，莲动下渔舟。"],
    translation: "竹林里传来笑语，是洗衣的姑娘们回来了。莲叶轻摇，有渔舟从水上缓缓过去。",
    reading: "洗衣的少女们回来了。安静的山谷充满了少女们活泼的气息。",
  },
];

export default function GirlsInCompanyPage() {
  return (
    <main className="inner-page archive-detail girls-page">
      <SiteHeader />
      <ArchiveHeader kicker="Women in Company" title="少女篇 · 笑语喧然" intro="斗草、踏歌、棹歌与归浣。古诗里结伴而行的女子。" status="春径 · 江堤 · 荷塘 · 竹林" />
      <section className="girls-opening">
        <p>古诗里有许多年轻女子。她们在春日的采桑小路上相遇，在江堤上挽着手唱歌，在荷叶深处划船，也在洗衣归来的竹林里留下笑声。</p>
        <p>古代社会给女性设下过许多枷锁，少女们独有的青春曼丽，依旧可以从诗词里窥见。她们织、绣、画，也在田野和庭院中做事、游戏。无论农家还是富户，少女们都带着轻盈的气息，感染着身边的人。</p>
      </section>
      <section className="girls-scenes" aria-label="少女群像">
        {scenes.map((scene) => (
          <article className={`girls-scene girls-scene--${scene.tone}`} key={scene.number}>
            <header><span>{scene.number}</span><p>{scene.scene}</p><h2>{scene.source}</h2><div className="girls-scene__visual"><small>画面</small><p>{scene.visual}</p></div></header>
            <div className="girls-scene__body">
              {scene.works ? <div className="girls-scene__works">{scene.works.map((work) => <section key={work.source}><h3>{work.source}</h3><blockquote>{work.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><div className="girls-scene__notes"><section><h4>译文</h4><p>{work.translation}</p></section></div></section>)}</div> : <><blockquote>{scene.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><div className="girls-scene__notes"><section><h3>译文</h3><p>{scene.translation}</p></section></div></>}
            </div>
          </article>
        ))}
      </section>
      <section className="girls-afterword"><p>她们在不同地方出现，身边却总有人同行。</p><p>一条春日小路，一段江堤，一只并在风里的莲舟，便足以留住一阵笑语。</p></section>
      <footer className="source-list girls-sources"><p>文本参照 <a href="https://zh.wikisource.org/zh-hans/%E8%B8%8F%E6%AD%8C%E8%A9%9E%E5%9B%9B%E9%A6%96" target="_blank" rel="noreferrer">刘禹锡《踏歌词四首》</a>、<a href="https://zh.wikisource.org/zh-hans/%E9%87%87%E8%93%AE%E6%9B%B2_%28%E5%90%B4%E5%A7%AC%E8%B6%8A%E8%B1%94%E6%A5%9A%E7%8E%8B%E5%A6%83%29" target="_blank" rel="noreferrer">王昌龄《采莲曲》</a>、<a href="https://www.gushiwen.cn/shiwenv_e517f24cd7b5.aspx" target="_blank" rel="noreferrer">张籍《采莲曲》</a> 与 <a href="https://www.gushiwen.cn/shiwenv.aspx?id=c6e70b8693e4" target="_blank" rel="noreferrer">张潮《采莲词》</a>。</p></footer>
    </main>
  );
}
