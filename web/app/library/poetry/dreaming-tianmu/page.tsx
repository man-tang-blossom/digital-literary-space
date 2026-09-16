import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "梦境篇 · 仙梦、蝶梦与迷梦",
  description: "李白《梦游天姥吟留别》：原文、译文与写作时的处境。",
};

const poem = [
  "海客谈瀛洲，烟涛微茫信难求。", "越人语天姥，云霞明灭或可睹。", "天姥连天向天横，势拔五岳掩赤城。", "天台一万八千丈，对此欲倒东南倾。",
  "", "我欲因之梦吴越，一夜飞度镜湖月。", "湖月照我影，送我至剡溪。", "谢公宿处今尚在，渌水荡漾清猿啼。", "脚著谢公屐，身登青云梯。", "半壁见海日，空中闻天鸡。", "千岩万转路不定，迷花倚石忽已暝。", "熊咆龙吟殷岩泉，栗深林兮惊层巅。", "云青青兮欲雨，水澹澹兮生烟。", "列缺霹雳，丘峦崩摧。", "洞天石扉，訇然中开。", "青冥浩荡不见底，日月照耀金银台。", "霓为衣兮风为马，云之君兮纷纷而来下。", "虎鼓瑟兮鸾回车，仙之人兮列如麻。", "忽魂悸以魄动，恍惊起而长嗟。", "惟觉时之枕席，失向来之烟霞。",
  "", "世间行乐亦如此，古来万事东流水。", "别君去兮何时还？", "且放白鹿青崖间，须行即骑访名山。", "安能摧眉折腰事权贵，使我不得开心颜！",
];

export default function DreamingTianmuPage() {
  return (
    <main className="inner-page archive-detail dream-tianmu-page">
      <SiteHeader />
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
      <section className="archive-hero">
        <p className="page-kicker">Dreamscape / 山系 · 梦境 · 自由</p>
        <h1>梦境篇</h1>
        <span>仙梦、蝶梦与迷梦</span>
      </section>

      <section className="reader-text">
        <div className="archive-section__heading"><p>01 / Original</p><h2>原文</h2><span>又题《梦游天姥山别东鲁诸公》</span></div>
        <blockquote>{poem.map((line, index) => line ? <span key={`${line}-${index}`}>{line}</span> : <br key={`gap-${index}`} />)}</blockquote>
      </section>

      <section className="flower-translation dream-translation">
        <p className="page-kicker">02 / Translation</p>
        <h2>译文</h2>
        <p>听海上来的人说瀛洲，烟波雾气太远，实在难找。越地的人却说天姥山，云霞忽明忽暗时，仿佛还能望见它。天姥山横在天边，气势高过五岳，连赤城山也被它压下去；传说极高的天台山，面对它都像要往东南倾斜。</p>
        <p>我想借着这座山，做一个去吴越的梦。一夜之间，月光照着镜湖，我便飞到了剡溪。谢灵运住过的地方还在，碧水荡漾，猿声清亮。我穿着谢公木屐，沿着通往云天的山路往上走；半山看见海日，空中听见天鸡。山岩千回百转，路没有尽头，我迷在花间，倚着石头走着走着，天就黑了。</p>
        <p>熊在吼，龙在吟，声音震着山泉；幽林发冷，层层山峰也被惊动。乌云浓起来，像要下雨；水色沉沉，烟雾慢慢升起。闪电划过，雷声轰然，山峦仿佛崩裂。忽然，洞天的石门在巨响里打开：无边青天深得看不见底，日月照着金银楼台。彩虹做衣，风做马，云中的神仙纷纷下来；虎弹瑟，鸾鸟拉车，仙人站成一片。</p>
        <p>就在这时，我心惊魂动，恍惚醒来，只剩下枕头和席子，刚才的烟霞全不见了。人间的欢乐，大概也常是这样；古往今来许多事，都像东流的水。我要和朋友告别，什么时候再见呢？不如把白鹿放在青崖间，想走时就骑着它去访名山。怎么能低眉弯腰侍奉权贵，让自己再也不能舒展地活着？</p>
      </section>

      <section className="reader-analysis">
        <p className="page-kicker">03 / His Moment</p>
        <h2>李白那时在哪里</h2>
        <p>李白进长安时，原本想做事，也想把一身抱负用在世上。可他在长安待了一年多，终究没能真正进入政治中心；天宝三载，他被“赐金放还”，离开了那里。写这首诗时，他正准备从东鲁再往吴越去，诗也是留给朋友的告别。</p>
        <p>所以这不是一首只顾好看的游仙诗。梦里的山越高，洞天越亮，醒来时现实就越清楚。最后那句“不肯折腰”，不是一句突然的豪言：它是一个理想碰过壁的人，仍然给自己留下的底线。</p>
      </section>

      <section className="reader-analysis">
        <p className="page-kicker">04 / A Dream in Mist</p>
        <h2>雾失楼台</h2>
        <blockquote><span>雾失楼台，月迷津渡。</span><span>桃源望断无寻处。</span></blockquote>
        <p>秦观在郴州旅舍写下这几句。楼台、渡口、月色都还在，路却忽然看不清了。它不是仙境，也不是蝶梦，而是人在清醒处遇见的一阵迷离。</p>
        <Link href="/library/collections/moon-and-dream">读秦观《踏莎行·郴州旅舍》 →</Link>
      </section>

      <section className="dream-links" aria-label="相关意象">
        <p>Related Threads</p>
        <Link href="/library/imagery#mountain">山系意象：天姥、千岩、青崖 →</Link>
        <Link href="/library/imagery#water">水系意象：镜湖、剡溪、东流水 →</Link>
        <Link href="/library/flowers">回到花事篇 →</Link>
        <Link href="/library/poetry/zhuangsheng-dream">梦境篇：庄生晓梦与《锦瑟》 →</Link>
      </section>
      <footer className="source-list travel-sources"><p>文本与题解参照：<a href="https://zh.wikisource.org/zh-hans/%E5%A4%A2%E9%81%8A%E5%A4%A9%E5%A7%A5%E5%90%9F%E7%95%99%E5%88%A5" target="_blank" rel="noreferrer">《梦游天姥吟留别》原文</a>；写作背景参照 <a href="https://www.chinanews.com.cn/cul/2023/11-20/10114846.shtml" target="_blank" rel="noreferrer">中新网题解</a>。</p></footer>
    </main>
  );
}
