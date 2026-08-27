import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "词人篇：晏几道与莲、鸿、蘋、云" };

const poems = [
  { title: "鹧鸪天·彩袖殷勤捧玉钟", tag: "一场歌舞", lines: ["舞低杨柳楼心月，", "歌尽桃花扇底风。"], note: "月落了，歌也唱到扇底的风都像停了。词的后半又写别后重逢，写得像一场醒来后还舍不得散的梦。", href: "https://www.gushiwen.cn/gushiwen_f306d779bf.aspx" },
  { title: "临江仙·梦后楼台高锁", tag: "记得小蘋", lines: ["记得小蘋初见，", "两重心字罗衣。", "琵琶弦上说相思。"], note: "他记得的是衣裳上的心字纹，也记得琵琶。人被记住时，常常先是一个很小的细节。", href: "https://www.gushiwen.cn/GuShiWen_37e04a9529.aspx?wm=2226_3010" },
  { title: "鹧鸪天·小令尊前见玉箫", tag: "银灯一曲", lines: ["小令尊前见玉箫，", "银灯一曲太妖娆。"], note: "玉箫是词中女子的名字。灯下听完一曲，回去时酒意还在，后来连梦魂也会越过谢桥去找她。", href: "https://www.gushiwen.cn/shiwenv_ab51212c6450.aspx" },
  { title: "临江仙·斗草阶前初见", tag: "初见与重逢", lines: ["斗草阶前初见，", "穿针楼上曾逢。"], note: "一次是在春日阶前斗草，一次是在七夕楼上穿针。词从两个寻常的节日片刻，写到酒醒以后锦屏空着。", href: "https://www.gushiwen.cn/shiwenv_8fdc5aa07e44.aspx" },
  { title: "鹧鸪天·醉拍春衫惜旧香", tag: "旧香未散", lines: ["相思本是无凭语，", "莫向花笺费泪行。"], note: "这首把话说得很轻。相思没有凭据，信纸上落的泪也送不到那个人手里。轻声说，反而更难受。", href: "https://www.gushiwen.cn/shiwenv_a657b616ce0a.aspx" },
  { title: "临江仙·梦后楼台高锁", tag: "明月还在", lines: ["当时明月在，", "曾照彩云归。"], note: "最末两句很安静。明月仍在，照过的人已经走远。晏几道常把过去放在月光里，不追，也不肯忘。", href: "https://www.gushiwen.cn/GuShiWen_37e04a9529.aspx?wm=2226_3010" },
];

export default function YanJidaoPage() {
  return <main className="inner-page archive-detail yan-jidao-page">
    <SiteHeader />
    <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
    <section className="archive-hero yan-jidao-hero"><p className="page-kicker">Ci Poetry / Northern Song</p><h1>晏几道</h1><span>莲、鸿、蘋、云与旧日歌声</span></section>
    <section className="yan-jidao-opening"><p>晏几道，字叔原，号小山，晏殊之子。他的词里常有灯、酒、罗衣、琵琶和相逢的女子。读到后来，热闹慢慢退下去，只留下一个人记得从前。</p><p>《小山词》自序记过沈廉叔、陈君龙家中的莲、鸿、蘋、云。新填的词会交给她们传唱，他和朋友持酒听歌。后来朋友或去世，或失意，歌女也流散了。至于某一首词究竟写给哪一位女子，今天很难逐首断定。</p></section>
    <section className="yan-jidao-prologue"><p className="page-kicker">Songs Once Sung</p><h2>歌尽桃花扇底风</h2><p>这些词原本靠歌声活着。它们写闺中事，也写宴席上的人。词人坐在席间，歌伎唱新词，杯子在手里传。多年以后，词留下来，人却各自散在别处。</p></section>
    <section className="yan-jidao-poems">
      {poems.map((poem, index) => <article key={`${poem.title}-${poem.tag}`}>
        <span>{String(index + 1).padStart(2, "0")}</span>
        <div><p>{poem.tag}</p><h2>《{poem.title}》</h2></div>
        <a href={poem.href} target="_blank" rel="noreferrer"><blockquote>{poem.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><small>查看原词与注释 →</small></a>
        <p className="yan-jidao-poems__note">{poem.note}</p>
      </article>)}
    </section>
    <section className="yan-jidao-afterword"><p className="page-kicker">The People in the Song</p><h2>词写完，谁来唱</h2><p>晏几道这一页想记住的，也包括唱词的人。莲、鸿、蘋、云留下的史料不多，我们知道她们在席间唱过新词，也知道后来她们流散了。名字只剩四个，声音却还在词里。</p><p>以后会再补上《小山词》里更多的歌、酒与人，也会把柳永、温庭筠和晏几道放在一起读。词曾经是一种被唱出来的文字。</p></section>
    <footer className="source-list travel-sources"><p>文本参照 <a href="https://www.gushiwen.cn/gushiwen_f306d779bf.aspx" target="_blank" rel="noreferrer">《鹧鸪天·彩袖殷勤捧玉钟》</a>、<a href="https://www.gushiwen.cn/GuShiWen_37e04a9529.aspx?wm=2226_3010" target="_blank" rel="noreferrer">《临江仙·梦后楼台高锁》</a>、<a href="https://www.gushiwen.cn/shiwenv_ab51212c6450.aspx" target="_blank" rel="noreferrer">《鹧鸪天·小令尊前见玉箫》</a> 与 <a href="https://www.gushiwen.cn/shiwenv_8fdc5aa07e44.aspx" target="_blank" rel="noreferrer">《临江仙·斗草阶前初见》</a>。</p></footer>
  </main>;
}
