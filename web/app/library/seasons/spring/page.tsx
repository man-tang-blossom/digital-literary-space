import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";
import { springPoems } from "../../../../data/spring-poems";

export const metadata: Metadata = { title: "四时篇·春：东风、春雨与满城花开" };

const moments = [
  { term: "立春 / 草木初醒", title: "小雅·出车·选句", author: "《诗经》", lines: ["春日迟迟，卉木萋萋。", "仓庚喈喈，采蘩祁祁。"], reading: "日子渐长，草木也密起来。黄莺有声，人已经开始采摘春日的新鲜草木。" },
  { term: "雨水 / 草色与细雨", title: "早春呈水部张十八员外", author: "韩愈 · 唐", lines: ["天街小雨润如酥，草色遥看近却无。", "最是一年春好处，绝胜烟柳满皇都。"], reading: "这是春天刚有一点颜色的时候。远远看，地面像浮着一层绿；走近了，反倒看不真切。" },
  { term: "雨水 / 夜里落雨", title: "春夜喜雨", author: "杜甫 · 唐", lines: ["好雨知时节，当春乃发生。", "随风潜入夜，润物细无声。"], reading: "雨下在夜里，第二天才看见它做过的事。杜甫写春雨，写得安静，也写得有分寸。" },
  { term: "惊蛰 / 春风与纸鸢", title: "村居", author: "高鼎 · 清", lines: ["草长莺飞二月天，拂堤杨柳醉春烟。", "儿童散学归来早，忙趁东风放纸鸢。"], reading: "春风一起来，孩子就跑出了门。纸鸢放上天，春天也有了人的笑闹声。" },
  { term: "春分 / 江水初暖", title: "惠崇春江晚景·其一", author: "苏轼 · 北宋", lines: ["竹外桃花三两枝，春江水暖鸭先知。", "蒌蒿满地芦芽短，正是河豚欲上时。"], reading: "桃花只开了几枝，水暖却已经先被鸭子知道。春意藏在很小的地方，先被活在水边的东西认出来。" },
  { term: "春分 / 江山渐暖", title: "绝句二首·其一", author: "杜甫 · 唐", lines: ["迟日江山丽，春风花草香。", "泥融飞燕子，沙暖睡鸳鸯。"], reading: "日光变长，花草有了香气。燕子忙着衔泥，鸳鸯却在暖沙上睡着，春天已经完全松开了。" },
  { term: "春分 / 人在春景里", title: "钱塘湖春行·选句", author: "白居易 · 唐", lines: ["几处早莺争暖树，谁家新燕啄春泥。", "乱花渐欲迷人眼，浅草才能没马蹄。"], reading: "这一句最好在走路时读。草还不高，刚刚漫过马蹄；花也还没有开到遮住眼睛。" },
  { term: "清明 / 桃花与归家", title: "周南·桃夭", author: "《诗经》", lines: ["桃之夭夭，灼灼其华。", "之子于归，宜其室家。"], reading: "桃花在《诗经》里带着婚嫁的喜气。春天开花，也有人走进新的家。" },
  { term: "清明 / 江南春水", title: "菩萨蛮·人人尽说江南好·选句", author: "韦庄 · 五代", lines: ["春水碧于天，画船听雨眠。"], reading: "水比天还碧，船在雨里慢慢走。春日的好，有时只是不用急着赶路。" },
  { term: "谷雨 / 花开盛放", title: "江畔独步寻花·其六", author: "杜甫 · 唐", lines: ["黄四娘家花满蹊，千朵万朵压枝低。", "留连戏蝶时时舞，自在娇莺恰恰啼。"], reading: "到谷雨，花开得压低枝头，蝶和莺都舍不得离开。春天已经很满了。" },
  { term: "春江花月 / 另开一扇门", title: "春江花月夜·选段", author: "张若虚 · 唐", lines: ["春江潮水连海平，海上明月共潮生。", "滟滟随波千万里，何处春江无月明。"], reading: "这首诗会在春篇里另开一页。春江、花、月与夜，从这里开始慢慢铺开。" },
];

export default function SpringPage() {
  return <SeasonPage season="春" subtitle="东风、春雨与满城花开" active="春" terms={["立春", "雨水", "惊蛰", "春分", "清明", "谷雨"]} opening="春先从地面有一点松动开始。草色初生，雨也细，后来天气暖起来，燕子回来，孩子放纸鸢，人也走进花影和春江。等到谷雨，花开到枝头低下来，春天才真正圆满。" moments={springPoems} after="春尽以后，荷风会从水面吹来。" nextHref="/library/seasons/summer" nextLabel="夏篇：荷风、梅雨与长夜 →" />;
}

function SeasonPage({ season, subtitle, active, terms, opening, moments, after, nextHref, nextLabel }: { season: string; subtitle: string; active: string; terms: string[]; opening: string; moments: typeof springPoems; after: string; nextHref: string; nextLabel: string }) {
  return <main className="inner-page archive-detail seasons-page spring-page"><SiteHeader /><Link className="archive-back" href="/library/seasons">← 返回四时篇</Link><section className="archive-hero seasons-hero"><p className="page-kicker">Four Seasons / 四时篇</p><h1>{season}</h1><span>{subtitle}</span></section><nav className="season-timeline" aria-label="四时篇时间线">{["春", "夏", "秋", "冬"].map((item) => item === active ? <strong key={item}>{item} · 正在展开</strong> : <Link key={item} href={`/library/seasons/${item === "春" ? "spring" : item === "夏" ? "summer" : item === "秋" ? "autumn" : "winter"}`}>{item} · 已归栏</Link>)}</nav><div className="solar-terms">{terms.map((term) => <span key={term}>{term}</span>)}</div><section className="seasons-opening"><p>{opening}</p></section><section className="season-moments">{moments.map((moment, index) => <article className="season-moment" key={moment.title + moment.author}><div className="season-moment__time"><span>{String(index + 1).padStart(2, "0")}</span><p>{moment.term}</p></div><div className="season-moment__poem"><p>{moment.author}</p><h2>《{moment.title}》</h2><blockquote>{moment.lines.map((line) => <span key={line}>{line}</span>)}</blockquote><Link href={`/library/seasons/spring/${moment.slug}`}>进入全文、译文与读法 →</Link></div><div className="season-moment__reading"><h3>译文</h3><p>{moment.translation}</p><h3>读这一刻</h3><p>{moment.reading}</p></div></article>)}</section><section className="season-rain-link"><p>{after}</p><Link href={nextHref}>{nextLabel}</Link></section></main>;
}
