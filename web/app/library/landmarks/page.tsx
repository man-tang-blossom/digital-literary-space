import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveHeader } from "../../../components/ArchiveHeader";
import { SiteHeader } from "../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "登临篇：亭台楼阁｜数字文学空间",
  description: "从名胜里的亭台楼阁，读到诗词中无名的相逢、远望与人生心事。",
};

type ArchitectureKind = "亭" | "台" | "楼" | "阁";

const forms: { kind: ArchitectureKind; english: string; description: string }[] = [
  { kind: "亭", english: "Pavilion", description: "临水依山，供人停步、休憩与相聚。" },
  { kind: "台", english: "Terrace", description: "高起的平台，登临远望，也容易引人怀古。" },
  { kind: "楼", english: "Tower", description: "层层向上，视野更远，常有送别与题咏。" },
  { kind: "阁", english: "Belvedere", description: "多临高处，可登览，也常与宴集、藏书相连。" },
];

function BuildingMark({ kind }: { kind: ArchitectureKind }) {
  const paths: Record<ArchitectureKind, React.ReactNode> = {
    亭: <><path d="M9 22h42M14 22l6-7h20l6 7M20 15v26M40 15v26M14 41h32" /><path d="M18 12h24" /></>,
    台: <><path d="M12 42h36M16 34h28M20 26h20M24 18h12" /><path d="M12 42l4-8M48 42l-4-8M16 34l4-8M44 34l-4-8" /></>,
    楼: <><path d="M11 20h38M16 20v23M44 20v23M10 43h40" /><path d="M17 20l5-8h16l5 8M14 31h32M20 31v12M40 31v12" /></>,
    阁: <><path d="M10 22h40M15 22v22M45 22v22M10 44h40" /><path d="M15 18l5-8h20l5 8M13 31h34M18 31v13M42 31v13" /></>,
  };
  return <svg className="landmark-mark" viewBox="0 0 60 56" aria-hidden="true">{paths[kind]}</svg>;
}

const landmarkGroups = [
  {
    kind: "亭" as const,
    lead: "停在山水之间",
    items: [
      { name: "醉翁亭", place: "安徽 · 滁州", work: "欧阳修《醉翁亭记》", quote: "醉翁之意不在酒，在乎山水之间也。", note: "山间有泉，有游人，也有一位被贬的太守和他的滁州。", href: "/library/landmarks/place/zuiweng" },
      { name: "湖心亭", place: "浙江 · 杭州", work: "张岱《湖心亭看雪》", quote: "湖心亭一点，与余舟一芥。", note: "雪夜的亭子很小，人与船在西湖里更小。", href: "/library/travel/huxinting" },
      { name: "兰亭", place: "浙江 · 绍兴", work: "王羲之《兰亭集序》", quote: "虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。", note: "暮春修禊，曲水流觞。相聚的欢喜里，已经有了对人生短暂的感慨。", href: "/library/landmarks/lanting-xu" },
      { name: "北固亭", place: "江苏 · 镇江", work: "辛弃疾《永遇乐·京口北固亭怀古》", quote: "千古江山，英雄无觅，孙仲谋处。", note: "站在江边，想起英雄与旧事，写的是北望中原的心。", href: "/library/landmarks/beiguting" },
    ],
  },
  {
    kind: "台" as const,
    lead: "向高处望去",
    items: [
      { name: "凤凰台", place: "江苏 · 南京", work: "李白《登金陵凤凰台》", quote: "凤凰台上凤凰游，凤去台空江自流。", note: "旧日传说已经远去，江水仍在眼前流。", href: "/library/landmarks/fenghuangtai" },
      { name: "幽州台", place: "北京", work: "陈子昂《登幽州台歌》", quote: "念天地之悠悠，独怆然而涕下。", note: "四句写尽一个人面对天地时的孤独与不得志。", href: "/library/landmarks/youzhoutai" },
      { name: "凌虚台", place: "陕西 · 凤翔", work: "苏轼《凌虚台记》", quote: "物之废兴成毁，不可得而知也。", note: "新台刚成，苏轼先想到盛衰无常。台上看山，也看人事。", href: "/library/landmarks/lingxutai-ji" },
      { name: "超然台", place: "山东 · 诸城", work: "苏轼《超然台记》", quote: "凡物皆有可观，苟有可观，皆有可乐。", note: "从一座旧台出发，写人在寻常日子里怎样自得。", href: "/library/landmarks/chaorantai-ji" },
    ],
  },
  {
    kind: "楼" as const,
    lead: "一层楼，几代人",
    items: [
      { name: "黄鹤楼", place: "湖北 · 武汉", work: "崔颢《黄鹤楼》", quote: "黄鹤一去不复返，白云千载空悠悠。", note: "仙人远去，留下江城与漫长的乡愁。", href: "/library/landmarks/place/huanghe" },
      { name: "谢朓楼", place: "安徽 · 宣城", work: "李白《宣州谢朓楼饯别校书叔云》", quote: "抽刀断水水更流，举杯消愁愁更愁。", note: "一场送别，写出才情高处的烦忧。", href: "/library/poets/li-bai" },
      { name: "鹳雀楼", place: "山西 · 永济", work: "王之涣《登鹳雀楼》", quote: "欲穷千里目，更上一层楼。", note: "景色与志趣只用了十个字，便一同向上。", href: "/library/landmarks/guanque" },
      { name: "岳阳楼", place: "湖南 · 岳阳", work: "范仲淹《岳阳楼记》", quote: "先天下之忧而忧，后天下之乐而乐。", note: "洞庭湖上，个人的贬谪之感最后走向天下人的忧乐。", href: "/library/landmarks/place/yueyang" },
      { name: "八咏楼", place: "浙江 · 金华", work: "李清照《题八咏楼》", quote: "江山留与后人愁。", note: "女词人南渡途中登楼，写下山河依旧、世事已变的忧思。", href: "/library/landmarks/bayong" },
      { name: "筹边楼", place: "四川 · 成都", work: "薛涛《筹边楼》", quote: "平临云鸟八窗秋，壮压西川四十州。", note: "薛涛登楼望见边地，也写出了对时局的牵挂。", href: "/library/landmarks/choubians" },
    ],
  },
  {
    kind: "阁" as const,
    lead: "高阁上的宴饮与回望",
    items: [
      { name: "滕王阁", place: "江西 · 南昌", work: "王勃《滕王阁序》", quote: "落霞与孤鹜齐飞，秋水共长天一色。", note: "盛大的宴饮与年轻人的失意、抱负，都留在这一片秋水长天里。", href: "/library/landmarks/place/tengwang" },
      { name: "快阁", place: "江西 · 泰和", work: "黄庭坚《登快阁》", quote: "落木千山天远大，澄江一道月分明。", note: "公事稍歇，登阁远望，山水替人留下清旷的一刻。", href: "/library/landmarks/kuaige" },
    ],
  },
];

const unnamedWorks = [
  { scene: "溪亭日暮", author: "李清照", title: "如梦令", quote: "常记溪亭日暮，沉醉不知归路。", note: "一场夏日游赏。误入藕花深处，惊起一滩鸥鹭。", tint: "lotus", href: "/library/landmarks/xiting-rimou" },
  { scene: "临高阁", author: "李清照", title: "忆秦娥", quote: "临高阁，乱山平野烟光薄。", note: "烟薄、栖鸦归、暮天闻角。她把秋日独处写得很远。", tint: "mist", href: "/library/landmarks/lingaoge" },
  { scene: "春日翠楼", author: "王昌龄", title: "闺怨", quote: "闺中少妇不知愁，春日凝妆上翠楼。", note: "一眼杨柳新色，使春日的欢喜忽然转成相思。", tint: "peach", href: "/library/landmarks/guiyuan" },
  { scene: "西洲望归", author: "南朝乐府", title: "西洲曲", quote: "望郎上青楼，楼高望不见。", note: "楼高望不见，便只好整日停在栏杆旁。", tint: "river", href: "/library/landmarks/xizhouqu" },
  { scene: "少年层楼", author: "辛弃疾", title: "丑奴儿", quote: "少年不识愁滋味，爱上层楼。", note: "少年时喜欢登楼写愁，后来才懂得愁为何物。", tint: "amber", href: "/library/landmarks/chounuer" },
  { scene: "庭院凭栏", author: "朱淑真", title: "谒金门·春半", quote: "十二阑干闲倚遍，愁来天不管。", note: "满院落花，莺燕成双，春光里有一个人的心事。", tint: "violet", href: "/library/landmarks/yejinmen" },
];

export default function LandmarksPage() {
  return (
    <main className="inner-page archive-detail landmarks-page">
      <SiteHeader />
      <ArchiveHeader kicker="Places That Hold Stories" title="登临篇 · 亭台楼阁" intro="山河与人间心事。" status="亭 · 台 · 楼 · 阁" />

      <section className="landmarks-opening">
        <p>亭台楼阁，本是供人停步、登高、观景与相聚的地方。古人却常在这里，把酒临风，送别故人，望见江山，也望见自己。</p>
        <p>有人把人生得失写进高阁，有人面对洞庭湖，想到天下人的忧乐；有人在山间小亭，与百姓同游；有人独坐湖心亭，看一夜雪落下来。还有一些没有留下名字的小楼与栏杆，收住了女子的相思、少年的愁绪与暮年人的回望。</p>
        <p>有些建筑因此名传千年，有些只留在诗句里。循着这些亭台楼阁，我们可以读到山河，也可以读到古人的人生悲欢、家国情怀、深明大义，以及在自然中得到的片刻欢喜。</p>
      </section>

      <section className="building-guide" aria-labelledby="building-guide-title">
        <header><p>How To Read A Building</p><h2 id="building-guide-title">先认一座建筑</h2></header>
        <div className="building-guide__grid">
          {forms.map((form) => <article key={form.kind}><BuildingMark kind={form.kind} /><p>{form.english}</p><h3>{form.kind}</h3><span>{form.description}</span></article>)}
        </div>
      </section>

      <section className="landmark-index" aria-label="本页目录">
        <p>目录</p>
        {forms.map((form) => <a href={`#${form.kind}`} key={form.kind}>{form.kind}<span>{form.english}</span></a>)}
        <a href="#unnamed">诗中楼台<span>In Poems</span></a>
      </section>

      <section className="landmark-list" aria-label="名胜中的亭台楼阁">
        <header className="landmark-section-heading"><p>01 / Named Places</p><h2>名胜中的亭台楼阁</h2><span>有地方，有来处，也有许多人在此留下的文字。</span></header>
        {landmarkGroups.map((group) => <section className="landmark-group" id={group.kind} key={group.kind}>
          <header><BuildingMark kind={group.kind} /><div><p>{group.kind} · {forms.find((form) => form.kind === group.kind)?.english}</p><h3>{group.lead}</h3></div></header>
          <div className={`landmark-cards landmark-cards--${group.kind}`}>
            {group.items.map((item) => {
              const card = <article className="landmark-card"><div className="landmark-card__top"><span>{item.place}</span><i>{group.kind}</i></div><h4>{item.name}</h4><small>{item.work}</small><blockquote>{item.quote}</blockquote><p>{item.note}</p>{item.href && <em>进入相关篇章 →</em>}</article>;
              return item.href ? <Link href={item.href} key={item.name}>{card}</Link> : <div key={item.name}>{card}</div>;
            })}
          </div>
        </section>)}
      </section>

      <section className="unnamed-places" id="unnamed">
        <header className="landmark-section-heading"><p>02 / In Poems</p><h2>诗词里的亭台楼阁</h2><span>有些没有留下地名，却写尽了楼中人的心事。</span></header>
        <div className="unnamed-places__intro"><p>溪亭、翠楼、高阁、栏杆。它们可能只是园中一角、临水一处，也可能早已无从考证。诗句留了下来，于是有人在暮春凭栏，有人在楼上望归，有人误入荷花深处。</p></div>
        <div className="unnamed-works">
          {unnamedWorks.map((work, index) => {
            const item = <article className={`unnamed-work unnamed-work--${work.tint}`}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{work.author}《{work.title}》</p><h3>{work.scene}</h3><blockquote>{work.quote}</blockquote><small>{work.note}</small>{work.href && <em>进入相关篇章 →</em>}</div></article>;
            return work.href ? <Link href={work.href} key={work.scene}>{item}</Link> : <div key={work.scene}>{item}</div>;
          })}
        </div>
      </section>

      <section className="landmarks-closing"><p>一座建筑会留下一个名字，一句诗会留住当时站在那里的人。</p><Link href="/library">回到文学藏馆 →</Link></section>
    </main>
  );
}
