import Link from "next/link";

export function ArchiveHeader({ kicker, title, intro, status }: { kicker: string; title: string; intro: string; status?: string }) {
  return (
    <>
      <Link className="archive-back" href="/library">← 返回文学藏馆</Link>
      <header className="archive-hero">
        <p className="page-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        {status && <span>{status}</span>}
      </header>
    </>
  );
}
