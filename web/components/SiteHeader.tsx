import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="inner-header">
      <Link href="/" className="inner-header__brand" aria-label="返回首页">
        数字文学空间
      </Link>
      <nav aria-label="站点导航">
        <Link href="/nebula">文学星云</Link>
        <Link href="/universe">文学万象</Link>
        <Link href="/library">文学藏馆</Link>
      </nav>
    </header>
  );
}
