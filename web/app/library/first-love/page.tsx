import type { Metadata } from "next";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "心事篇 · 初见｜数字文学空间",
  description: "从春水、城隅、青梅到桃花门前。古诗里第一次相遇时没有说尽的心事。",
};

const readings = [
  {
    number: "01", scene: "春水相逢", source: "《诗经·郑风·溱洧》", tone: "spring-water",
    lines: ["溱与洧，方涣涣兮。", "士与女，方秉蕑兮。", "维士与女，伊其相谑。", "赠之以勺药。"],
    translation: "溱水、洧水正在春天涨起来。年轻男女手里拿着兰草，到河边游玩。他们互相说笑，临别时赠一枝芍药。",
    reading: "春水正涨，节日也正热闹。那一枝芍药留在分别的时候，后来的人总愿意把它读成一份刚刚开始的心意。",
    visual: "河水漫过浅滩，兰草与芍药在衣袖间。人群在春天的河岸上来来往往，两个人停下来，多说了一会儿话。",
  },
  {
    number: "02", scene: "城隅的等待", source: "《诗经·邶风·静女》", tone: "city-wall",
    lines: ["静女其姝，俟我于城隅。", "爱而不见，搔首踟蹰。", "自牧归荑，洵美且异。", "匪女之为美，美人之贻。"],
    translation: "美丽的姑娘约人在城墙一角见面，却故意躲起来不出现，少年等得搔头踟蹰。后来她送来一根从郊野带回的茅芽，少年觉得它格外好看，只因是她送的。",
    reading: "有人等，有人藏，最后又悄悄带来一件礼物。茅芽本来普通，因为出自她的手，便被看得很珍贵。",
    visual: "城墙一角有斜落的日光。少年站在墙根等人，姑娘藏在不远处，手里握着一根新鲜的茅芽。",
  },
  {
    number: "03", scene: "江上借问", source: "崔颢《长干曲四首·其一、其二》", tone: "river-question",
    lines: ["君家何处住，妾住在横塘。", "停船暂借问，或恐是同乡。", "家临九江水，来去九江侧。", "同是长干人，生小不相识。"],
    translation: "江上两只船相逢。姑娘先问对方住在哪里，又说自己住在横塘，请他停船聊一聊，或许彼此是同乡。少年回答自己家在九江水边，原来两个人果然同是长干人，只是从小不曾相识。",
    reading: "她问得干脆，他答得坦然。两个人本来只是水上偶遇，却因为同乡二字，忽然离得近了一些。",
    visual: "两只乌篷小船在江面相近，一边是水乡屋舍，一边是来往的帆影。两个人隔着水，说出自己的家乡。",
  },
  {
    number: "04", scene: "青梅回首", source: "李清照《点绛唇·蹴罢秋千》", tone: "green-plum",
    lines: ["蹴罢秋千，起来慵整纤纤手。", "露浓花瘦，薄汗轻衣透。", "和羞走，倚门回首。", "却把青梅嗅。"],
    translation: "少女刚荡完秋千，手也没有整理好，衣上还带着薄汗。忽然有人进来，她羞得跑开，走到门边却又回头看了一眼，低头去闻手里的青梅。",
    reading: "她想看，又怕被看见，于是借一枝青梅遮住心事。整首词写的都是动作，慌张与好奇已经全在里面。",
    visual: "春院里秋千还轻轻晃着。少女跑到门边，发钗微松，指尖捏着青梅，回头的一瞬刚好落在花影里。",
  },
  {
    number: "05", scene: "桃花门前", source: "崔护《题都城南庄》", tone: "peach-door",
    lines: ["去年今日此门中，", "人面桃花相映红。", "人面不知何处去，", "桃花依旧笑春风。"],
    translation: "去年的这一天，在这扇门前，人的面容和桃花互相映照，都是明丽的红色。如今人已不知去了哪里，只有桃花还在春风里开放。",
    reading: "见过一面，后来却再也找不到了。春风照常吹，桃花照常开，这一点缺席便显得格外清楚。",
    visual: "城南一扇半开的木门，门边桃花正盛。旧日站在花下的人已经不在，只有风穿过院墙。",
  },
  {
    number: "06", scene: "竹马与青梅", source: "李白《长干行二首·其一》", tone: "bamboo-horse",
    lines: ["郎骑竹马来，绕床弄青梅。", "同居长干里，两小无嫌猜。"],
    translation: "男孩骑着竹竿当马跑来，围着井栏玩弄青梅。两家同住在长干里，两个孩子从小相伴，没有猜忌。",
    reading: "这还是心事发生以前的日子。后来人用“青梅竹马”来讲初恋，大概因为最早的喜欢，总带着一点熟悉与毫无防备。",
    visual: "井栏旁有一匹竹马，青梅枝垂在小院里。两个孩子绕着井边跑，衣角和笑声都很轻。",
  },
  {
    number: "07", scene: "褰裳涉水", source: "《诗经·郑风·褰裳》", tone: "crossing-water",
    lines: ["子惠思我，褰裳涉溱。", "子不我思，岂无他人。", "狂童之狂也且。"],
    translation: "你若真惦念我，就提起衣裳渡过溱水来。你若不想我，难道就没有别人了吗。这个傻少年呀。",
    reading: "古老的注疏对这首诗有不同解释。单读这些句子，仍能听见一个很直接的声音。她不愿意等人猜，也不替人把话说得太委婉。",
    visual: "春水在脚边流，少女提起衣角站在岸上。对岸的人迟迟没有过来，她抬头望去，像在笑，也像在催。",
  },
  {
    number: "08", scene: "溪亭误入", source: "李清照《如梦令·常记溪亭日暮》", tone: "spring-water",
    lines: ["常记溪亭日暮，沉醉不知归路。", "兴尽晚回舟，误入藕花深处。", "争渡，争渡，惊起一滩鸥鹭。"],
    translation: "常常记得那次在溪亭玩到日暮，带着酒意，连回去的路也不太认得。兴致尽了，傍晚划船回来，竟误入荷花深处；急着划出去，惊起了一滩鸥鹭。",
    reading: "",
    visual: "暮色压到水面，小舟钻进荷花深处。几声船桨忽然急起来，鸥鹭从一片粉白绿影里飞开。",
  },
];

export default function FirstLovePage() {
  return (
    <main className="inner-page archive-detail first-love-page">
      <SiteHeader />
      <ArchiveHeader kicker="First Encounters" title="心事篇 · 初见" intro="从春水、城隅、青梅到桃花门前。" status="相遇 · 试探 · 羞怯 · 相赠 · 错过" />

      <section className="first-love-opening">
        <p>少年少女的心事，常常没有说得很清楚。</p>
        <p>先是在路上看见一个人。后来愿意多停一会儿，多问一句住在哪里。有人把初生的茅芽送出去，有人借着闻青梅，回头再看一眼。</p>
      </section>

      <section className="first-love-route" aria-label="初见与心事的路径"><span>春水相逢</span><i>·</i><span>城隅等待</span><i>·</i><span>青梅回首</span><i>·</i><span>桃花门前</span></section>

      <section className="first-love-readings" aria-label="少年少女的诗词">
        {readings.map((work) => (
          <article className={`first-love-card first-love-card--${work.tone}`} key={work.number}>
            <header>
              <span>{work.number}</span>
              <p>{work.scene}</p>
              <h2>{work.source}</h2>
              <div className="first-love-card__visual"><small>画面</small><p>{work.visual}</p></div>
            </header>
            <div className="first-love-card__body">
              <blockquote>{work.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>
              <div className="first-love-card__notes"><section><h3>译文</h3><p>{work.translation}</p></section></div>
            </div>
          </article>
        ))}
      </section>

      <section className="first-love-afterword"><p>很多故事没有继续写下去。</p><p>一枝芍药，一根茅芽，一只停在江上的船，已经替他们把那一刻留住。</p></section>

      <footer className="source-list first-love-sources"><p>文本参照 <a href="https://zh.wikisource.org/zh-hans/%E8%A9%A9%E7%B6%93/%E9%9D%9C%E5%A5%B3" target="_blank" rel="noreferrer">《诗经·静女》</a>、<a href="https://zh.wikisource.org/zh-hans/%E9%BB%9E%E7%B5%B3%E5%94%87_%28%E6%9D%8E%E6%B8%85%E7%85%A7%29" target="_blank" rel="noreferrer">李清照《点绛唇》</a>、<a href="https://www.gushiwen.cn/gushiwen_2fa6406c28.aspx" target="_blank" rel="noreferrer">崔颢《长干曲》</a> 与 <a href="https://www.gushiwen.cn/mingju/juv_e33442ef6153.aspx" target="_blank" rel="noreferrer">李白《长干行》</a>。</p></footer>
    </main>
  );
}
