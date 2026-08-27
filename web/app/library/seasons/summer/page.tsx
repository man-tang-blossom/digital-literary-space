import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = { title: "四时篇·夏：荷风、梅雨与长夜" };

const moments = [
  {
    order: 1, time: "立夏 / 荷才露角", title: "小池", author: "杨万里 · 南宋",
    lines: ["泉眼无声惜细流，树阴照水爱晴柔。", "小荷才露尖尖角，早有蜻蜓立上头。"],
    translation: "泉眼静静流出细水，像舍不得多流一点；树影映在水面，也爱这晴天柔和的光。小荷才刚露出尖尖的一角，蜻蜓已经先落在上头。",
    note: "夏天在这里还很小。没有铺天盖地的绿，只有一滴水、一点荷尖、一只先到的蜻蜓。",
  },
  {
    order: 2, time: "立夏 / 梅子与芭蕉", title: "闲居初夏午睡起", author: "杨万里 · 南宋",
    lines: ["梅子留酸软齿牙，芭蕉分绿与窗纱。", "日长睡起无情思，闲看儿童捉柳花。"],
    translation: "梅子的酸味还留在牙齿间，让人觉得发软；芭蕉的绿影透过窗纱，分到屋里来。白日很长，午睡醒来一时没有什么心事，只闲闲看着孩子们去捉飘下来的柳花。",
    note: "夏日午睡醒来，世界没有大事发生。酸梅、绿影、窗纱和孩子，就是这一刻全部的内容。",
  },
  {
    order: 3, time: "小满 / 石榴开遍", title: "夏意", author: "苏舜钦 · 北宋",
    lines: ["别院深深夏席清，石榴开遍透帘明。", "树阴满地日当午，梦觉流莺时一声。"],
    translation: "幽深的小院里，夏日的竹席仍然清凉；石榴花开满枝头，亮得仿佛透过帘子照进来。正午树影铺满地面，午梦醒来，刚好听见黄莺叫了一声。",
    note: "它写得很静。石榴花很亮，树影很浓，醒来时只听见一声鸟鸣，夏日的午后便被定住了。",
  },
  {
    order: 5, time: "芒种 / 黄梅与等待", title: "约客", author: "赵师秀 · 南宋",
    lines: ["黄梅时节家家雨，青草池塘处处蛙。", "有约不来过夜半，闲敲棋子落灯花。"],
    translation: "黄梅天里，家家都笼着雨；长满青草的池塘边，到处都是蛙声。约好的人没有来，夜已经过了半，我只好闲闲地敲着棋子，灯芯烧久了，落下一点灯花。",
    note: "这首诗的夏夜不热闹。雨声、蛙声、棋子和灯花，都在陪一个人等没有来的人。",
  },
  {
    order: 7, time: "夏至 / 田园正长", title: "四时田园杂兴·其二十五", author: "范成大 · 南宋",
    lines: ["梅子金黄杏子肥，麦花雪白菜花稀。", "日长篱落无人过，惟有蜻蜓蛱蝶飞。"],
    translation: "梅子已经黄了，杏子也长得饱满；麦花白得像雪，油菜花却渐渐稀了。白日很长，篱笆边少有人经过，只有蜻蜓和蝴蝶飞来飞去。",
    note: "这是农事正忙的时候。人不在画面里，不是因为无人，而是都下田去了；留在篱边的，只有夏天自己的声音。",
  },
  {
    order: 9, time: "小暑 / 枣花与黄瓜", title: "浣溪沙·簌簌衣巾落枣花", author: "苏轼 · 北宋",
    lines: ["簌簌衣巾落枣花，村南村北响缫车，牛衣古柳卖黄瓜。", "酒困路长惟欲睡，日高人渴漫思茶。敲门试问野人家。"],
    translation: "枣花簌簌落在衣巾上，村南村北传来缫丝车的声音。一个披着粗布的人，在老柳树下卖黄瓜。走了很久，酒意未消，只想睡一会儿；太阳已经很高，人也渴了，便想起茶来，于是敲开农家人的门，试着问一声。",
    note: "苏轼没有把盛夏写成大景。他记下了枣花落在身上、村里缫丝、路边黄瓜和口渴想茶这些小事。热是真的热，人也是真的累，但路边仍有人家可敲。",
  },
  {
    order: 4, time: "小满 / 树荫与蔷薇", title: "山亭夏日", author: "高骈 · 唐",
    lines: ["绿树阴浓夏日长，楼台倒影入池塘。", "水晶帘动微风起，满架蔷薇一院香。"],
    translation: "绿树投下浓浓的阴影，夏日显得格外漫长；楼台的倒影落进池塘。水晶帘轻轻一动，知道有微风来了；一架蔷薇开满，整座院子都是香气。",
    note: "夏天也可以这样过：不赶路，不避暑，只坐在树荫里，等一阵风动起帘子。",
  },
  {
    order: 8, time: "夏至 / 西湖六月", title: "晓出净慈寺送林子方", author: "杨万里 · 南宋",
    lines: ["毕竟西湖六月中，风光不与四时同。", "接天莲叶无穷碧，映日荷花别样红。"],
    translation: "到底是六月的西湖，景色和别的季节不一样。莲叶一直铺到天边，满眼都是无穷的碧绿；阳光照着荷花，红得格外鲜明。",
    note: "同样是荷，初夏时只露出尖角；到了六月，它已经把湖面和天边都占满。",
  },
  {
    order: 8.5, time: "夏至 / 白莲与小艇", title: "池上", author: "白居易 · 唐",
    lines: ["小娃撑小艇，偷采白莲回。", "不解藏踪迹，浮萍一道开。"],
    translation: "一个小孩子撑着小船，偷偷采了白莲回来。他还不懂得藏起自己的行踪，船划过去，水面上的浮萍已经分开一道长长的痕迹。",
    note: "大人的荷花常是风景、香气或心事；到白居易这里，荷塘忽然有了一个顽皮的孩子。最可爱的不是“偷采”，而是他以为没人知道，浮萍却把秘密全说出来了。",
  },
  {
    order: 10, time: "小暑 / 水面有风", title: "苏幕遮·燎沉香", author: "周邦彦 · 北宋",
    lines: ["燎沉香，消溽暑。鸟雀呼晴，侵晓窥檐语。", "叶上初阳干宿雨，水面清圆，一一风荷举。"],
    translation: "点起沉香，消散夏日闷热潮湿的气息。清晨，鸟雀在屋檐下叫着，像在说晴天到了。初出的阳光晒干荷叶上的昨夜雨水；水面上的荷叶清润圆正，迎着风，一片一片从水里举起来。",
    note: "这两句已经收在花事篇。放到夏天里读，才会看见它从雨后晨光里慢慢亮起来。",
    href: "/library/flowers/zhou-bangyan-sumu-zhe",
  },
  {
    order: 12, time: "大暑夜 / 蝉、蛙与小路", title: "西江月·夜行黄沙道中", author: "辛弃疾 · 南宋",
    lines: ["明月别枝惊鹊，清风半夜鸣蝉。", "稻花香里说丰年，听取蛙声一片。", "七八个星天外，两三点雨山前。", "旧时茅店社林边，路转溪桥忽见。"],
    translation: "明月从树枝间照过，惊起了栖鹊；半夜的清风里，蝉仍在叫。稻花飘香，像在说丰年，耳边是一片蛙声。天外只有七八颗星，山前落下两三点雨。走到旧日茅店和土地庙林边，路一转，过了溪桥，忽然就看见了。",
    note: "夏夜并不总是闷热。辛弃疾写的是行路时偶然撞见的清凉：月、蝉、蛙、星、雨，最后还有一间忽然出现的小店。",
  },
  {
    order: 11, time: "大暑夜 / 开窗等风", title: "夏夜叹·选段", author: "杜甫 · 唐",
    lines: ["仲夏苦夜短，开轩纳微凉。"],
    translation: "仲夏的夜太短，暑热却很长，只好推开窗子，等一点微凉进来。",
    note: "杜甫只用十个字，就写出了最真实的夏夜：人还没睡，窗已经先开了。",
  },
  {
    order: 6, time: "芒种 / 烈日下的麦田", title: "观刈麦·选段", author: "白居易 · 唐",
    lines: ["田家少闲月，五月人倍忙。", "夜来南风起，小麦覆陇黄。", "足蒸暑土气，背灼炎天光。", "力尽不知热，但惜夏日长。"],
    translation: "农家一年里少有清闲的月份，到了五月尤其忙。夜里南风一吹，麦子便把田垄铺得金黄。收麦的人脚下蒸着热土气，背上晒着烈日；力气快用尽了，也顾不上说热，只怕夏天的日头不够长，麦子来不及收完。",
    note: "四时不只属于赏花、纳凉的人。夏天也有烈日下弯着腰收麦的人，这一层不能不写。",
  },
  {
    order: 13, time: "大暑暮夜 / 荷风想起朋友", title: "夏日南亭怀辛大", author: "孟浩然 · 唐",
    lines: ["山光忽西落，池月渐东上。", "散发乘夕凉，开轩卧闲敞。", "荷风送香气，竹露滴清响。", "欲取鸣琴弹，恨无知音赏。", "感此怀故人，中宵劳梦想。"],
    translation: "山边的日光忽然落下去，池上的月亮渐渐升起来。我披散着头发，趁傍晚的凉意，打开窗子躺在宽敞的地方。荷风送来香气，竹叶上的露水滴下清响。我想取琴来弹，却遗憾没有知音一同欣赏；想到这里，便开始想念远方的朋友，直到半夜还在梦里牵挂。",
    note: "夏晚的风本来很舒服，可风一凉，人就容易想起不在身边的朋友。",
  },
];

export default function SummerPage() {
  return (
    <main className="inner-page archive-detail seasons-page summer-page">
      <SiteHeader />
      <Link className="archive-back" href="/library/seasons">← 返回四时篇</Link>
      <section className="archive-hero seasons-hero">
        <p className="page-kicker">Four Seasons / 第一章</p>
        <h1>夏</h1>
        <span>荷风、梅雨与长夜</span>
      </section>
      <nav className="season-timeline" aria-label="四时篇时间线"><Link href="/library/seasons/spring">春 · 已归栏</Link><strong>夏 · 正在展开</strong><Link href="/library/seasons/autumn">秋 · 已归栏</Link><Link href="/library/seasons/winter">冬 · 已归栏</Link></nav>
      <div className="solar-terms" aria-label="夏季节气"><span>立夏</span><span>小满</span><span>芒种</span><span>夏至</span><span>小暑</span><span>大暑</span></div>
      <section className="seasons-opening"><p>夏天先从荷尖冒出来。树荫渐浓，石榴亮起来，梅雨落进池塘，麦田在烈日下变黄。等到蝉声、蛙声和荷风都来了，夜也变得很长。</p></section>
      <section className="season-moments">
        {moments.slice().sort((a, b) => a.order - b.order).map((moment, index) => <article className="season-moment" key={moment.title + moment.author}>
          <div className="season-moment__time"><span>{String(index + 1).padStart(2, "0")}</span><p>{moment.time}</p></div>
          <div className="season-moment__poem"><p>{moment.author}</p><h2>《{moment.title}》</h2><blockquote>{moment.lines.map((line) => <span key={line}>{line}</span>)}</blockquote>{moment.href ? <Link href={moment.href}>进入全文、译文与读法 →</Link> : null}</div>
          <div className="season-moment__reading"><h3>译文</h3><p>{moment.translation}</p><h3>读这一刻</h3><p>{moment.note}</p></div>
        </article>)}
      </section>
      <section className="season-rain-link"><Link href="/library/seasons/autumn">进入秋篇，读月色、梧桐与远行 →</Link></section>
    </main>
  );
}
