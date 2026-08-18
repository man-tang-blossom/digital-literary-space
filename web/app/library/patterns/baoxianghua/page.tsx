import type { Metadata } from "next";
import Image from "next/image";
import { ArchiveHeader } from "../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "宝相花｜传统纹样" };

const uses = [
  ["唐代铜镜", "团花位于镜背中心，放射对称与镜体的圆形彼此呼应。"],
  ["敦煌图案", "盛唐常见宝相花、葡萄、石榴、联珠与卷草纹，青、绿、金、碧叠晕出绚丽层次。"],
  ["织锦与服饰", "适合团窠、连续纹样和中心装饰，能在织物上形成稳定而华丽的秩序。"],
  ["陶瓷与金银器", "通过刻、印、贴、錾等工艺进入器物表面，在不同材质中调整花瓣层次。"],
  ["建筑装饰", "《营造法式》将宝相花列入石作花纹制度，后世也见于彩画和构件装饰。"],
];

const otherPatterns = [
  { name: "莲花纹", note: "以真实莲花为基础，常与清净、生命和佛教艺术相关；它也是宝相花的重要母体之一。" },
  { name: "忍冬纹", note: "藤叶连续舒卷，具有强烈的生长感；魏晋南北朝至隋唐装饰中十分常见。" },
  { name: "缠枝纹", note: "枝蔓循环不断，花叶相接，适合器物边饰、织物和大面积连续装饰。" },
  { name: "云雷纹", note: "由回旋线条构成，常见于青铜器；严整、古朴，具有早期几何纹样气质。" },
  { name: "如意云纹", note: "以云气与如意头形态组织，线条圆转，常表达祥瑞与顺遂。" },
  { name: "联珠纹", note: "圆珠连续排列成环或带，具有清晰边界和节奏，隋唐时期受中外交流影响而流行。" },
];

const sources = [
  ["故宫博物院：宝相花", "https://www.dpm.org.cn/lemmas/242132.html"],
  ["故宫数字文物库：唐代宝相花纹镜", "https://digicol.dpm.org.cn/cultural/detail?id=b14bb00a969a4e21b7c4c46ad2bda46d&lid=6dd6d480fad04c4aae3c6027a0a29181&source=2"],
  ["敦煌研究院：莫高窟第79窟", "https://www.dha.ac.cn/info/1425/3618.htm"],
  ["学术研究：唐代宝相花纹样与现代首饰设计", "https://jogg.cug.edu.cn/cn/article/id/3ee9d5ba-4536-4e86-b306-57ab1d8778e9"],
  ["人民日报：传统纹样，在生活中绽放", "https://ent.people.com.cn/n1/2025/1118/c1012-40605751.html"],
];

export default function BaoxianghuaPage() {
  return (
    <main className="inner-page archive-detail pattern-page">
      <SiteHeader />
      <ArchiveHeader kicker="Pattern Archive 01" title="宝相花" intro="它不是自然界中的一朵花，而是一朵由莲、牡丹、卷叶与宝珠共同设计出来的理想之花。" status="传统纹样 · 隋唐盛行" />

      <section className="pattern-opening">
        <figure><Image src="/images/archive/baoxianghua-modern.png" alt="以莲花和牡丹花瓣组成的放射对称宝相花现代重构示意" width={1254} height={1254} priority unoptimized /><figcaption>现代重构示意：用于解释结构，不是对具体文物的复刻。</figcaption></figure>
        <div><p className="page-kicker">What is it?</p><h2>一朵不存在的花</h2><p>宝相花又称宝仙花、宝莲花。它通常以莲花或牡丹为主体，再嵌入不同形状的花叶，并在花芯、花瓣基部加入规则圆珠，使整朵花呈现富丽、饱满而稳定的放射结构。</p><dl><div><dt>结构</dt><dd>中心放射、层层展开</dd></div><div><dt>母体</dt><dd>莲花、牡丹与卷叶</dd></div><div><dt>气质</dt><dd>庄严、圆满、华美</dd></div></dl></div>
      </section>

      <section className="pattern-record">
        <div className="archive-section__heading"><p>01 / Record</p><h2>古籍与实物</h2><span>文字记录与器物证据互相补充</span></div>
        <div className="pattern-record-grid">
          <article><h3>《营造法式》</h3><p>北宋李诫《营造法式》将宝相花列入建筑石作花纹制度。需要注意的是，今天所谓“唐代宝相花”更多是考古与美术史中的纹样分类，不能简单等同于宋代文献中的每一种宝相花图样。</p></article>
          <article><h3>唐代宝相花纹镜</h3><p>故宫博物院数字文物库收藏有唐代宝相花纹镜。铜镜的圆形与团花的放射结构天然契合，是理解宝相花古代应用的直接实物。</p><a href={sources[1][1]} target="_blank" rel="noreferrer">前往故宫查看文物 ↗</a></article>
          <article><h3>敦煌盛唐图案</h3><p>敦煌研究院介绍，盛唐图案大量采用宝相花、葡萄、石榴、联珠和卷草纹，并以青、绿、金、碧为主，通过叠晕形成绚丽而严整的效果。</p></article>
        </div>
      </section>

      <section className="pattern-uses">
        <div className="archive-section__heading"><p>02 / Uses</p><h2>古代运用</h2><span>一种纹样，穿行于不同材料</span></div>
        <div>{uses.map(([title, note], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{note}</p></article>)}</div>
      </section>

      <section className="pattern-modern">
        <div className="archive-section__heading"><p>03 / Now</p><h2>现代潮流</h2><span>传统纹样重新进入生活</span></div>
        <div className="modern-pattern-copy"><p>今天的宝相花不只出现在博物馆。设计者会提取它的放射骨架、卷瓣和圆珠结构，再通过简化、解构与重组，用于首饰、珐琅、服装、箱包、家居、数字视觉和文创产品。</p><p>近年的“国潮”不再满足于贴一个传统符号。更好的方式，是理解纹样为何这样生长，再让它适应新的材料、尺度与生活场景。人民日报关于传统纹样的报道也记录了纹样进入服饰箱包、咖啡拉花、手工艺和家居改造的趋势。</p><blockquote>真正的现代化，不是把古代花纹原样贴上去；而是保留它的秩序、节奏与文化记忆，让它重新长出当代形态。</blockquote></div>
      </section>

      <section className="other-patterns">
        <div className="archive-section__heading"><p>04 / More</p><h2>其他纹样</h2><span>先认识六种常见图案</span></div>
        <div>{otherPatterns.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.note}</p></article>)}</div>
      </section>

      <section className="source-list"><h2>资料来源</h2>{sources.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{name}<span>↗</span></a>)}</section>
    </main>
  );
}
