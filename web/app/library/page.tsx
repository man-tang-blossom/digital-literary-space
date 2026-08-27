import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "文学藏馆" };

const imagerySystems = [
  { name: "月", kind: "天地", words: "明月 · 月白 · 素月 · 月满空山", note: "故园、团圆、孤独与时间" },
  { name: "金", kind: "器物与色彩", words: "金风玉露 · 金樽 · 金波 · 金炉", note: "华美、秋意、酒宴与光泽" },
  { name: "玉", kind: "器物与品格", words: "冰清玉润 · 琼枝玉树 · 春泉漱玉", note: "清洁、温润、声音与风骨" },
  { name: "山", kind: "山河", words: "巴山夜雨 · 春山眉黛 · 月满空山", note: "归隐、阻隔、远望与精神居所" },
  { name: "水", kind: "山河", words: "东流水 · 沧海 · 烟笼寒水 · 澄江似练", note: "时间、离愁、通达与无尽" },
  { name: "酒", kind: "器物", words: "金樽清酒 · 把酒东风 · 且尽手中杯", note: "相逢、放达、告别与自我宽慰" },
  { name: "葫芦", kind: "器物", words: "匏 · 瓠 · 壶卢 · 福禄 · 酒瓢", note: "果实、容器、药壶与朴素的祝愿" },
  { name: "鹤与虎", kind: "动物", words: "鹤鸣九皋 · 梅妻鹤子 · 猛虎掉尾", note: "清远的隐士，与山林的威势" },
];

const collections = [
  { title: "节令篇：新春", subtitle: "从除夕的爆竹与守岁，走到元夕的火树银花", status: "原文与节俗已归栏", href: "/library/festivals/new-year" },
  { title: "四时篇：春夏秋冬", subtitle: "从草色初生，到风雪夜归，循着节气读四季", status: "四季入口已归栏", href: "/library/seasons" },
  { title: "节令篇：七夕", subtitle: "银河、针线、乞巧楼与一座宋城的秋夜", status: "原文与译文已归栏", href: "/library/festivals/qixi" },
  { title: "梦境篇：从天姥山到庄生梦蝶", subtitle: "李白梦入天姥，庄子化蝶，李商隐在锦瑟声里回望", status: "两篇已归栏", href: "/library/poetry/dreaming-tianmu" },
  { title: "词人篇：灯影、长亭与旧梦", subtitle: "温庭筠、柳永、晏几道，从闺阁歌声到别后旧梦", status: "三位词人已归栏", href: "/library/poets/liuyong-wentingyun" },
  { title: "诗人篇：李白，梦境与真实", subtitle: "从天姥山、沉香亭，走到桃花潭与黄河之水", status: "第一辑已归栏", href: "/library/poets/li-bai" },
  { title: "文章篇：唐宋八大家", subtitle: "八个人，八种文章气质；从敢言到山水，从变法到兄弟情", status: "八盏灯已点亮", href: "/library/eight-masters" },
  { title: "花事篇：花各有性", subtitle: "牡丹、荷花、海棠、菊花与一整年的心事", status: "第一辑已归栏", href: "/library/flowers" },
  { title: "雨篇：春雨、夏雨、秋雨、冬雨", subtitle: "从一场疾风骤雨开始，慢慢收录四季的雨", status: "已归栏", href: "/library/rain" },
  { title: "美人篇：四大美人", subtitle: "从杨玉环开始，看见被诗、画与后世反复讲述的女性", status: "杨玉环已归栏", href: "/library/beauties/yang-yuhuan" },
  { title: "静处：禅与山水", subtitle: "佛偈、清光与人在尘世安住的片刻", status: "第一辑已归栏", href: "/library/stillness" },
  { title: "游记篇：小石潭记", subtitle: "水尤清冽，清而带凉", status: "已连入水系意象", href: "/library/travel/xiaoshitan" },
  { title: "梦忆篇：张岱", subtitle: "从西湖夜戏的繁华，走到雪夜与国破后的旧梦", status: "第一辑已归栏", href: "/library/travel/huxinting" },
  { title: "江湖再见", subtitle: "古人的退场、远行与重逢", status: "第一辑已归栏", href: "/library/jianghu-farewell" },
  { title: "风雪行人", subtitle: "关山、孤客、马蹄与远行", status: "首批素材已归栏", href: "/library/wind-snow" },
  { title: "踏雪寻梅", subtitle: "梅花、雪、灯与清洁的心", status: "选题已建立" },
  { title: "梦入星河", subtitle: "水天、星河、扁舟与梦境", status: "选题已建立" },
  { title: "清夜纳凉", subtitle: "流萤、小扇、荷风与月色", status: "选题已建立" },
  { title: "从容风骨", subtitle: "风雨之中，仍然缓步而行", status: "选题已建立" },
  { title: "器物篇：葫芦", subtitle: "从田野果实到福禄意象", status: "已归入意象词典", href: "/library/objects/gourd" },
];

const editorialRooms = [
  { title: "文心百味", latin: "Literary Flavors", text: "用饮食、气味和触感重新讲述不同时代的文学气质。", sample: "唐诗像盛宴，宋词如品茶——这是一种文学化评论，而不是文学史结论。", href: "/library/literary-flavors" },
  { title: "辞语新生", latin: "Language Renewal", text: "同一件人间小事，换一种语言，便有了不同的光。", sample: "从“在乡镇卫生院上班”到“在小镇当医生”，事实相近，叙事气质却已经改变。", href: "/library/language-renewal" },
  { title: "人间采风", latin: "Notes from Places", text: "把现实中的花海、步道、城市和季节，与文学里的草木山河重新连接。", sample: "这里将记录坝河、雁栖湖、西湖与太子湾，也会在发布前重新核验现实信息。" },
];

export default function LibraryPage() {
  return (
    <main className="inner-page library-page">
      <SiteHeader />
      <section className="page-intro page-intro--wide library-intro">
        <p className="page-kicker">The Growing Archive</p>
        <h1>文学藏馆</h1>
        <p>这里保存正在生长的意象、主题、故事与文字。已经核验的内容会进入正式展陈，尚未确认的句子仍留在书页背面等待考证。</p>
        <div className="library-legend" aria-label="内容状态说明">
          <span><i className="status-dot status-dot--ready" />正式内容</span>
          <span><i className="status-dot status-dot--draft" />整理中</span>
        </div>
      </section>

      <section className="archive-section new-room-section" id="new-rooms">
        <div className="archive-section__heading">
          <p>New / Living Archive</p>
          <h2>新开的房间</h2>
          <span>从神话的信念，走到纹样的秩序</span>
        </div>
        <div className="new-room-grid">
          <Link className="new-room-card new-room-card--nine-songs" href="/library/myths/nine-songs">
            <small>Mythology · 楚辞神祇</small>
            <h3>九歌</h3>
            <p>云、水、山、日光，与人的生死相思。</p>
            <span>进入神祇谱系 →</span>
          </Link>
          <Link className="new-room-card new-room-card--myth" href="/library/myths/jingwei">
            <small>Mythology · 神话志</small>
            <h3>精卫填海</h3>
            <p>一只小鸟、一根细枝，与无边东海之间漫长而不屈的对峙。</p>
            <span>阅读古籍与思想札记 →</span>
          </Link>
          <Link className="new-room-card new-room-card--pattern" href="/library/patterns/baoxianghua">
            <small>Traditional Patterns · 传统纹样</small>
            <h3>宝相花</h3>
            <p>莲与牡丹被重新组织为秩序、光芒与盛唐气象。</p>
            <span>观看纹样档案 →</span>
          </Link>
        </div>
      </section>

      <section className="archive-section" id="imagery">
        <div className="archive-section__heading">
          <p>01 / Imagery</p>
          <h2>意象词典</h2>
          <span>从一个词，走进许多作品</span>
        </div>
        <div className="imagery-grid">
          {imagerySystems.map((item) => (
            <article className="imagery-card" key={item.name}>
              <p>{item.kind}</p>
              <h3>{item.name}</h3>
              <p className="imagery-card__words">{item.words}</p>
              <p className="imagery-card__note">{item.note}</p>
              <span>示例词待逐条核验</span>
            </article>
          ))}
        </div>
        <Link className="archive-enter" href="/library/imagery">进入金、玉、山、水意象词典 →</Link>
      </section>

      <section className="archive-section" id="collections">
        <div className="archive-section__heading">
          <p>02 / Collections</p>
          <h2>主题选集</h2>
          <span>让散落在时代里的句子彼此相逢</span>
        </div>
        <div className="collection-list">
          {collections.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3><p>{item.subtitle}</p></div>
              {item.href ? <Link href={item.href}>{item.status} →</Link> : <small>{item.status}</small>}
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section" id="essays">
        <div className="archive-section__heading">
          <p>03 / Essays</p>
          <h2>文字房间</h2>
          <span>原文之外，也保存观看文学的方法</span>
        </div>
        <div className="editorial-grid">
          {editorialRooms.map((room) => (
            <article key={room.title}>
              <p>{room.latin}</p>
              <h3>{room.title}</h3>
              <p>{room.text}</p>
              <blockquote>{room.sample}</blockquote>
              {room.href ? <Link className="editorial-enter" href={room.href}>进入栏目 →</Link> : <span>栏目建设中</span>}
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section archive-section--split" id="stories">
        <div className="archive-section__heading">
          <p>04 / Stories</p>
          <h2>作者小事</h2>
          <span>只留下重要、温柔而有人情味的片刻</span>
        </div>
        <div className="story-placeholder">
          <p>故事将注明它是史实、笔记轶闻，还是后世传说。</p>
          <strong>不把可爱的传闻伪装成历史，<br />也不让历史失去人的温度。</strong>
          <span>第一批作者故事正在选择</span>
        </div>
      </section>

      <section className="archive-section color-preview" id="colors">
        <div className="archive-section__heading">
          <p>05 / Classical Colors</p>
          <h2>古典色彩</h2>
          <span>颜色也可以成为一条文学路径</span>
        </div>
        <div className="color-strip" aria-label="古典色彩预览">
          <div style={{ background: "#789f92" }}><span>青绿</span></div>
          <div style={{ background: "#b8d3dc" }}><span>天青</span></div>
          <div style={{ background: "#e7ece8" }}><span>月白</span></div>
          <div style={{ background: "#e1c06a" }}><span>鹅黄</span></div>
          <div style={{ background: "#53666d" }}><span>黛色</span></div>
          <div style={{ background: "#a65f4b" }}><span>朱砂</span></div>
        </div>
      </section>
    </main>
  );
}
