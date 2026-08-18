import type { Metadata } from "next";
import { LiteraryNebula } from "../../components/LiteraryNebula";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata: Metadata = { title: "文学星云" };

export default function NebulaPage() {
  return (
    <main className="inner-page inner-page--nebula">
      <SiteHeader />
      <section className="page-intro">
        <p className="page-kicker">Literary Nebula</p>
        <h1>文学星云</h1>
        <p>作者、意象与主题从不孤立。轻触一个名字，看见文字之间隐约相连的路径。</p>
      </section>
      <LiteraryNebula />
    </main>
  );
}
