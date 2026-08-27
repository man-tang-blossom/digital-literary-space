import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = { title: "文章篇：唐宋八大家" };

const masters = [
  { dynasty: "唐", name: "韩愈", title: "把文章写得有骨头的人", note: "敢说，也敢写。他把古文从堆叠辞藻里拉出来，写出议论的锋芒与人的真情。潮州的鳄鱼，也被他写进一篇文章里。", work: "《师说》·《祭十二郎文》", tone: "han" },
  { dynasty: "唐", name: "柳宗元", title: "在冷清山水里安放自己", note: "被贬永州后，他走进溪涧、竹林和石潭。水很清，山很静，文章里却藏着一个人不肯消散的心事。", work: "《小石潭记》·《永州八记》", tone: "liu" },
  { dynasty: "北宋", name: "欧阳修", title: "醉翁在山水间，也在人群里", note: "他写亭子、酒和滁州百姓，也主持文坛，提携年轻人。读他会知道，文章可以有清醒的判断，也可以有很好的兴致。", work: "《醉翁亭记》·《秋声赋》", tone: "ou" },
  { dynasty: "北宋", name: "苏洵", title: "发愤得晚，文章很沉", note: "他年轻时并不以读书闻名，后来用功很深。写政论时常从人心和局势说起，句子里有父亲般的冷静。", work: "《六国论》", tone: "xun" },
  { dynasty: "北宋", name: "苏轼", title: "把困顿过成了辽阔", note: "做官、被贬、赏月、煮肉、写字、作词，他都投入得很深。江上清风与山间明月，在他笔下也成了人的安慰。", work: "《赤壁赋》·《念奴娇》", tone: "shi" },
  { dynasty: "北宋", name: "苏辙", title: "跟在兄长身旁，也走出自己的路", note: "他与苏轼一生相知，文章却更安静、更周密。兄弟相隔时写的信和诗，让人看见古人之间很深的惦念。", work: "《黄州快哉亭记》", tone: "zhe" },
  { dynasty: "北宋", name: "王安石", title: "要让天下往前走的人", note: "他写诗时有半山的安静，谈变法时却极坚决。理想与现实拉扯了他的一生，也让他的文章有一股不肯退的劲。", work: "《游褒禅山记》·《泊船瓜洲》", tone: "wang" },
  { dynasty: "北宋", name: "曾巩", title: "把平稳写成了分量", note: "他的文章不靠惊人句子取胜，读起来却稳，像把复杂的事慢慢说清楚。他做地方官，也把百姓的难处放在心上。", work: "《墨池记》·《越州赵公救灾记》", tone: "zeng" },
];

export default function EightMastersPage() {
  return <main className="inner-page archive-detail eight-masters-page">
    <SiteHeader />
    <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
    <section className="archive-hero eight-masters-hero"><p className="page-kicker">Prose / Tang and Song</p><h1>唐宋八大家</h1><span>八盏文章里的灯</span></section>
    <section className="eight-masters-opening"><p>他们都以文章留名，却并不写成同一种人。有人锋利，有人清冷；有人要改天下，有人在山水里慢慢把心放稳。</p><p>先点亮八盏灯。每一盏灯里，留一个人，一种文章气质，一段以后会继续展开的路。</p></section>
    <section className="eight-masters-grid" aria-label="唐宋八大家人物总览">
      {masters.map((master, index) => <article className={`master-lamp master-lamp--${master.tone}`} key={master.name}>
        <span className="master-lamp__number">{String(index + 1).padStart(2, "0")}</span>
        <p className="master-lamp__dynasty">{master.dynasty}</p>
        <h2>{master.name}</h2>
        <h3>{master.title}</h3>
        <p className="master-lamp__note">{master.note}</p>
        <span className="master-lamp__work">{master.work}</span>
        <small>人物篇将续写</small>
      </article>)}
    </section>
    <section className="eight-masters-afterword"><p className="page-kicker">Eight Ways of Writing</p><h2>文章里有八种人间</h2><p>往后每一盏灯都会慢慢添上生平、文章、诗词、书法和一件小事。先从韩愈、柳宗元、欧阳修与苏轼开始，把文章读回人的一生。</p></section>
  </main>;
}
