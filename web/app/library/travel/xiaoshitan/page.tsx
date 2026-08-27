import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../../../components/SiteHeader";

export const metadata: Metadata = {
  title: "游记篇：小石潭记",
  description: "柳宗元《小石潭记》与水系意象“清冽”。",
};

export default function XiaoShiTanPage() {
  return (
    <main className="inner-page archive-detail travel-page">
      <SiteHeader />
      <section className="archive-hero">
        <p className="page-kicker">Travel Notes / 水系意象</p>
        <h1>游记篇：小石潭记</h1>
        <span>水系意象：清冽</span>
      </section>

      <section className="travel-section travel-section--text">
        <div className="archive-section__heading">
          <p>01 / Original Text</p>
          <h2>原文</h2>
          <span>柳宗元 · 唐</span>
        </div>
        <blockquote className="classical-text travel-classical-text">
          从小丘西行百二十步，隔篁竹，闻水声，如鸣佩环，心乐之。伐竹取道，下见小潭，水尤清冽。全石以为底，近岸，卷石底以出，为坻，为屿，为嵁，为岩。青树翠蔓，蒙络摇缀，参差披拂。<br /><br />
          潭中鱼可百许头，皆若空游无所依。日光下澈，影布石上，佁然不动；俶尔远逝，往来翕忽，似与游者相乐。<br /><br />
          潭西南而望，斗折蛇行，明灭可见。其岸势犬牙差互，不可知其源。<br /><br />
          坐潭上，四面竹树环合，寂寥无人，凄神寒骨，悄怆幽邃。以其境过清，不可久居，乃记之而去。<br /><br />
          同游者：吴武陵，龚古，余弟宗玄。隶而从者，崔氏二小生：曰恕己，曰奉壹。
        </blockquote>
      </section>

      <section className="travel-section travel-section--author">
        <div className="archive-section__heading">
          <p>02 / The Author</p>
          <h2>柳宗元</h2>
          <span>773—819</span>
        </div>
        <div className="travel-author-note">
          <p>柳宗元原本在长安做官，也参与过一场想改变朝政的革新。805年，革新失败，他被贬为永州司马，远离京城，在永州住了十年。</p>
          <p>永州的山多、水多，人却少。他在失意的日子里不断往山中走，写下《始得西山宴游记》《钴鉧潭记》《小石潭记》等八篇游记，后来被称为“永州八记”。</p>
          <p>《小石潭记》大约写于809年。那时他已经在永州多年，仍没有回到长安的消息。</p>
        </div>
      </section>

      <footer className="source-list travel-sources">
        <p>文本参照：<a href="https://www.gushiwen.cn/gushiwen_7584f050a8.aspx" target="_blank" rel="noreferrer">《小石潭记》原文</a>；写作年代参照永州八记编年资料。</p>
        <Link href="/library/imagery#water">回到水系意象 →</Link>
      </footer>
    </main>
  );
}
