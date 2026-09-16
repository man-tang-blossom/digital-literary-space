import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveHeader } from "../../../../../components/ArchiveHeader";
import { SiteHeader } from "../../../../../components/SiteHeader";

export const metadata: Metadata = { title: "器物篇 · 汝窑" };

const colorNotes = [
  ["月白", "一层薄雾落在白瓷上。"],
  ["卵青", "青里带一点柔和的灰。"],
  ["天青", "雨停后，云缝里露出的天。"],
  ["粉青", "光线转过来，釉面微微暖一些。"],
];

const futureKilns = [
  ["定窑", "白瓷与花影"],
  ["钧窑", "窑变与晚霞"],
  ["官窑", "开片与旧冰"],
  ["哥窑", "金丝铁线"],
  ["青花", "青料、海浪与远航"],
];

const sources = [
  ["《宣和奉使高丽图经》卷三十二", "https://zh.wikisource.org/zh-hans/%E5%AE%A3%E5%92%8C%E5%A5%89%E4%BD%BF%E9%AB%98%E9%BA%97%E5%9C%96%E7%B6%93/%E5%8D%B7%E4%B8%89%E5%8D%81%E4%BA%8C"],
  ["《清波杂志》所载汝窑记述", "https://www.gongmeix.com/home/fyxm/info/id/141/catId/97.html"],
  ["故宫博物院 汝窑天青釉刻御题诗文碗", "https://intl.dpm.org.cn/Ceramicsis/700.html"],
  ["台北故宫 汝窑青瓷碟与乾隆题诗", "https://digitalarchive.npm.gov.tw/Collection/Detail/33027?dep=U"],
  ["宝丰清凉寺汝窑址研究简介", "https://www.pishu.com.cn/skwx_ps/ps/literature?ID=8503976&SiteID=14"],
];

export default function RuKilnPage() {
  return (
    <main className="inner-page archive-detail porcelain-page ru-kiln-page">
      <SiteHeader />
      <ArchiveHeader
        kicker="Porcelain Archive 01"
        title="器物篇 · 汝窑"
        intro="雨过以后，留下了一点天青。"
        status="北宋青瓷 · 色彩 · 工艺 · 已核验"
      />

      <section className="ru-opening">
        <p>汝窑的青，很难用一个颜色说完。它在蓝与绿之间，光亮时像水，阴下来又近乎雾。后人喜欢借“雨过天青云破处”来形容它，许多人第一次记住汝窑，也正是从这一句开始。</p>
      </section>

      <section className="ru-section ru-rain">
        <div className="archive-section__heading"><p>01 / A Sentence after Rain</p><h2>雨过天青</h2><span>一句流传很久的话</span></div>
        <div className="ru-rain__body">
          <blockquote>雨过天青云破处，<br />这般颜色作将来。</blockquote>
          <div>
            <p>这句话常被用来形容汝窑的天青釉。它更早关联的是后周柴窑的传说，明代文献把它记作柴世宗向工匠提出的颜色要求。后来的人看汝瓷，觉得那一点青也有雨后云开的意思，于是把这句话留在了汝窑身边。</p>
            <p>它不是汝窑的确切创窑记载。可它很适合做这扇门。人对一种颜色没有办法说得很准时，总会想起雨停以后，天从云缝里露出来的那一瞬。</p>
          </div>
        </div>
      </section>

      <section className="ru-section ru-origin">
        <div className="archive-section__heading"><p>02 / Song Record</p><h2>汝州新窑器</h2><span>宋人留下的一行字</span></div>
        <div className="ru-prose">
          <blockquote>越州古秘色，汝州新窑器，<br />大概相类。<small>徐兢《宣和奉使高丽图经》</small></blockquote>
          <p>徐兢出使高丽时提到“汝州新窑器”。这句话很短，留下的时间却很早。那时的汝窑还没有成为玻璃柜里被反复谈论的名字，它是汝州新烧出来的好器物。</p>
          <p>北宋后期，河南宝丰清凉寺一带的窑场为宫廷烧造青瓷。南宋周煇写“汝窑宫中禁烧”，汝窑与宫廷用器之间的关系，也被这样记了下来。</p>
        </div>
        <div className="ru-timeline"><span>北宋汝州窑火</span><i>·</i><span>宫廷用器</span><i>·</i><span>南宋文献</span><i>·</i><span>清宫收藏与题诗</span><i>·</i><span>今日博物馆</span></div>
      </section>

      <section className="ru-section ru-colors">
        <div className="archive-section__heading"><p>03 / Color</p><h2>天青到底是什么颜色</h2><span>同一件器物，也会随光而变</span></div>
        <div className="ru-color-grid">
          {colorNotes.map(([title, text], index) => <article className={`ru-color ru-color--${index + 1}`} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="ru-color-note">汝窑没有一块固定的“标准天青”。天青、卵青、粉青都是人们用来接近它的名字。釉色会随胎、火候、器形和光线而变化。</p>
        <Link className="ru-inline-link" href="/library/imagery">从天青走进古典色彩 →</Link>
      </section>

      <section className="ru-section ru-craft">
        <div className="archive-section__heading"><p>04 / Turn It Over</p><h2>把它翻过来</h2><span>一件器物怎样被火托住</span></div>
        <div className="ru-craft-grid">
          <article><span>满釉</span><p>汝窑常常通体施釉，连底部也不留白。器物看起来像被一层青色完整包住。</p></article>
          <article><span>支烧</span><p>入窑时，工匠用支钉托住器物。火过以后，底足会留下细小的痕迹。</p></article>
          <article><span>芝麻钉</span><p>那些细小支钉痕并不显眼。把器物翻过来，才会看见它曾怎样被托起。</p></article>
        </div>
      </section>

      <section className="ru-section ru-palace">
        <div className="archive-section__heading"><p>05 / In the Palace</p><h2>宫中禁烧</h2><span>它曾经也是日用之器</span></div>
        <div className="ru-palace__inner">
          <blockquote>汝窑宫中禁烧，内有玛瑙末为釉，<br />唯供御拣退，方许出卖，近尤难得。<small>周煇《清波杂志》</small></blockquote>
          <div><p>“近尤难得”四个字，已经写出了它当时的处境。汝窑器形多很克制。洗、盘、碟、盏托、瓶，安静地摆着。</p><p>它们原本也盛水、承果、放笔，或摆在案头。传世数量少，才显得格外遥远。可先前，它们也是被手拿起、放下、使用过的器物。</p></div>
        </div>
      </section>

      <section className="ru-section ru-poetry">
        <div className="archive-section__heading"><p>06 / In Writing</p><h2>瓷器上的诗</h2><span>汝窑被一代一代人看见</span></div>
        <div className="ru-poetry-grid">
          <article><small>宋人的一句</small><blockquote>越州古秘色，<br />汝州新窑器。</blockquote><p>徐兢《宣和奉使高丽图经》</p></article>
          <article><small>后世最常说的一句</small><blockquote>雨过天青云破处，<br />这般颜色作将来。</blockquote><p>柴窑传说，后人常借来形容汝窑天青</p></article>
          <article><small>乾隆题汝窑</small><blockquote>赵宋青窑建汝州，<br />传闻玛瑙末为油。<br />而今景德无斯法，<br />亦自出蓝宝色浮。</blockquote><p>乾隆丙申春御题</p></article>
        </div>
        <p className="ru-poetry-note">乾隆曾为多件宋瓷题诗。隔着六百多年，他还在追问北宋窑火留下的那一点青。</p>
      </section>

      <section className="ru-section ru-relations">
        <div className="archive-section__heading"><p>07 / Wander On</p><h2>汝窑连到哪里</h2><span>从一件瓷器，慢慢走出去</span></div>
        <div className="ru-relation-grid">
          <Link href="/library/rain"><span>雨</span><strong>雨过天青云破处</strong><small>进入四时雨篇 →</small></Link>
          <Link href="/library/imagery"><span>水与色彩</span><strong>湖水映着青天</strong><small>进入意象词典 →</small></Link>
          <article><span>宋</span><strong>器物、茶席与书房</strong><small>以后连向宋人的诗与生活</small></article>
          <article><span>瓷器</span><strong>天青之后，还有更多窑火</strong><small>继续向下一件器物走去</small></article>
        </div>
      </section>

      <section className="ru-next">
        <div><p className="page-kicker">Porcelain Archive</p><h2>下一件器物</h2><p>瓷器篇刚刚开了一扇门。汝窑之后，还会有更多颜色、裂纹与窑火。</p></div>
        <div className="ru-next-grid"><article className="is-lit"><span>已点亮</span><strong>汝窑</strong><small>雨过天青</small></article>{futureKilns.map(([title, note]) => <article key={title}><span>等待收录</span><strong>{title}</strong><small>{note}</small></article>)}</div>
      </section>

      <section className="source-list ru-sources"><h2>资料来源</h2>{sources.map(([name, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{name}<span>↗</span></a>)}</section>
    </main>
  );
}
