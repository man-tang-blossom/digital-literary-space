import Link from "next/link";

export default function Home() {
  return (
    <main className="cover">
      <div className="cover__veil" aria-hidden="true" />

      <header className="site-mark">
        <span>Digital Literary Space</span>
        <span>V0.1</span>
      </header>

      <section className="cover__content" aria-labelledby="home-title">
        <p className="cover__eyebrow">Designed by Xiaojin</p>
        <h1 id="home-title">数字文学空间</h1>
        <p className="cover__subtitle">诗词、散文、草木、山河与人间心事</p>
        <p className="cover__preface">
          文学不是一排书架，<br />
          而是一片可以漫游的星空。
        </p>

        <nav className="cover__actions" aria-label="主要入口">
          <Link className="entry-link entry-link--primary" href="/nebula">
            <span>进入</span>
            文学星云
          </Link>
          <Link className="entry-link" href="/universe">
            <span>浏览</span>
            文学万象
          </Link>
        </nav>
        <Link className="cover__library-link" href="/library">
          翻阅正在生长的文学藏馆
        </Link>
      </section>

      <p className="cover__footnote">从一篇文字，走向另一片天地</p>
    </main>
  );
}
