import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "花事篇：花各有性",
  description: "从牡丹到桃花，收录花在中国诗文与图画里的性情。",
};

const flowers = [
  {
    name: "牡丹", english: "Peony", wish: "富贵、圆满", color: "peony",
    intro: "先写它开得丰盛。花瓣一层一层，像把人间想要的好日子都收在一朵花里。",
    readings: [{ quote: "春风拂槛露华浓。", author: "李白《清平调·其一》", slug: "li-bai-qing-ping-diao-i" }, { quote: "唯有牡丹真国色，花开时节动京城。", author: "刘禹锡《赏牡丹》", slug: "liu-yuxi-appreciating-peony" }, { quote: "花开花落二十日，一城之人皆若狂。", author: "白居易《牡丹芳》", slug: "bai-juyi-peony-fragrance" }],
    art: "画中线索：宋《牡丹图》页，画魏紫，重瓣层层，富丽而不俗。",
    source: "https://www.dpm.org.cn/collection/paint/229939.html",
  },
  {
    name: "荷花", english: "Lotus", wish: "好运、平静", color: "lotus",
    intro: "荷花不必总被讲成道理。它也可以只是晨光晒干宿雨以后，水面上清圆的一片安静。",
    readings: [{ quote: "水面清圆，一一风荷举。", author: "周邦彦《苏幕遮》", slug: "zhou-bangyan-sumu-zhe" }, { quote: "兴尽晚回舟，误入藕花深处。", author: "李清照《如梦令》", slug: "li-qingzhao-lotus-dream" }],
    art: "画中线索：宋人《出水芙蓉图》；可以与水系意象、夏夜和扁舟相连。",
    source: "https://meirishici.com/quote/309/source",
  },
  {
    name: "芍药", english: "Herbaceous Peony", wish: "妖艳、惜别", color: "peony",
    intro: "芍药开在春末。春天快走了，话还没有说完，古人便摘一枝送给要分别的人。",
    readings: [{ quote: "维士与女，伊其相谑，赠之以芍药。", author: "《诗经·郑风·溱洧》", slug: "shijing-zhenwei" }],
    art: "画中线索：清·尤荫《芍药图扇页》。芍药又叫殿春花，是春天临走前的一笔浓色。",
    source: "https://www.dpm.org.cn/subject_wanzi/",
  },
  {
    name: "海棠", english: "Begonia", wish: "春睡、细愁", color: "begonia",
    intro: "海棠要留一席给李清照。风雨过后，花是不是还在，问的人和答的人其实想的并不是同一件事。",
    readings: [{ quote: "试问卷帘人，却道海棠依旧。", author: "李清照《如梦令·昨夜雨疏风骤》", slug: "li-qingzhao-begonia-dream" }, { quote: "知否，知否？应是绿肥红瘦。", author: "李清照《如梦令·昨夜雨疏风骤》", slug: "li-qingzhao-begonia-dream" }],
    art: "画中线索：宋人《海棠蛱蝶图》页；也可收苏轼“故烧高烛照红妆”的春夜。",
    source: "https://zh.wikisource.org/zh-hans/%E5%A6%82%E6%A2%A6%E4%BB%A4_(%E6%9D%8E%E6%B8%85%E7%85%A7)"
  },
  {
    name: "兰花", english: "Orchid", wish: "高洁、知己", color: "orchid",
    intro: "兰不靠铺天盖地地开。它留给人的，更多是香气、幽处和一个人对自己的珍重。",
    readings: [{ quote: "余既滋兰之九畹兮，又树蕙之百亩。", author: "屈原《离骚》", slug: "qu-yuan-li-sao-orchid" }],
    art: "画中线索：郑思肖《墨兰图》。兰叶从空白里长出来，孤而不弱。",
    source: "https://ctext.org/chu-ci/li-sao/zh",
  },
  {
    name: "菊花", english: "Chrysanthemum", wish: "晚节、黄金甲", color: "chrysanthemum",
    intro: "菊花不只属于东篱。它可以安静地开在秋天，也可以在黄巢笔下，开成满城翻涌的金色。",
    readings: [{ quote: "采菊东篱下，悠然见南山。", author: "陶渊明《饮酒·其五》", slug: "tao-yuanming-drinking-v" }, { quote: "冲天香阵透长安，满城尽带黄金甲。", author: "黄巢《不第后赋菊》", slug: "huang-chao-chrysanthemum" }],
    art: "画中线索：明清“四君子”画里的菊。它既可写退守，也可写不肯低头的力量。",
    source: "https://ft.chl.cn/yulu/?zj=108889",
  },
  {
    name: "梅花", english: "Plum Blossom", wish: "坚韧、不争", color: "plum",
    intro: "梅花经得住冷。它不必争春，却总在别的花还未醒来的时候，先把枝头点亮。",
    readings: [{ quote: "疏影横斜水清浅，暗香浮动月黄昏。", author: "林逋《山园小梅》", slug: "lin-bu-little-plum" }, { quote: "已是悬崖百丈冰，犹有花枝俏。", author: "毛泽东《卜算子·咏梅》", slug: "mao-zedong-yong-mei" }, { quote: "零落成泥碾作尘，只有香如故。", author: "陆游《卜算子·咏梅》", slug: "lu-you-yong-mei" }],
    art: "林逋住西湖孤山，种梅养鹤，后人叫他“梅妻鹤子”。画中线索：清·汪士慎《梅花图》轴，白花、黑枝，画面很干净，骨头却很硬。",
    source: "https://minghuaji.dpm.org.cn/paint/appreciateDetail?id=3ca8e0fd765946c1aeeeba3e68099471&type=1290",
  },
  {
    name: "桃花", english: "Peach Blossom", wish: "婚嫁、青春、相逢", color: "peach",
    intro: "桃花最早并不只写爱情。它先是对新嫁娘、对一个新家的祝福，后来才有春风里的相逢与错过。",
    readings: [{ quote: "桃之夭夭，灼灼其华。", author: "《诗经·周南·桃夭》", slug: "shijing-taoyao" }, { quote: "之子于归，宜其室家。", author: "《诗经·周南·桃夭》", slug: "shijing-taoyao" }],
    art: "画中线索：宋人《碧桃图》页；后续可接崔护的人面桃花与桃花源。",
    source: "https://zh.wikisource.org/zh-hans/%E8%A9%A9%E7%B6%93/%E6%A1%83%E5%A4%AD",
  },
];

export default function FlowersPage() {
  return (
    <main className="inner-page flowers-page">
      <SiteHeader />
      <section className="flowers-hero">
        <p className="page-kicker">Flower Archive / 花事篇</p>
        <h1>花各有性</h1>
        <p>花木很早就和人的生活连在一起：拿桃花祝新娘，借兰蕙写品性，把合欢、萱草、桂枝和松菊放进愿望里。这里不把花排成名录，只记下它们在人间留下的性情。</p>
      </section>

      <section className="flower-grid" aria-label="花事篇目录">
        {flowers.map((flower, index) => (
          <article className={`flower-card flower-card--${flower.color}`} key={flower.name}>
            <span className="flower-card__number">{String(index + 1).padStart(2, "0")}</span>
            <p className="flower-card__english">{flower.english}</p>
            <h2>{flower.name}</h2>
            <strong>{flower.wish}</strong>
            <p className="flower-card__intro">{flower.intro}</p>
            <blockquote>{flower.readings.map((reading) => <Link key={reading.quote} href={`/library/flowers/${reading.slug}`}>“{reading.quote}”</Link>)}</blockquote>
            <p className="flower-card__author">{flower.readings.map((reading) => <Link key={`${reading.author}-${reading.quote}`} href={`/library/flowers/${reading.slug}`}>{reading.author}</Link>)}</p>
            <p className="flower-card__art">{flower.art}</p>
            <a href={flower.source} target="_blank" rel="noreferrer">查看原文或画作资料 →</a>
          </article>
        ))}
      </section>

      <section className="flower-afterword">
        <p>First Collection / 持续生长</p>
        <h2>花还会继续增加。</h2>
        <span>桂花、梨花、杏花、栀子、木槿……等它们各自带着诗文和画作走进来。</span>
        <Link href="/library">回到文学藏馆 →</Link>
      </section>
    </main>
  );
}
