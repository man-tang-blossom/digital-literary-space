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
        <p>从夏天出发。缩放、拖动，再靠近一朵花、一场雨或一个节日。</p>
      </section>
      <LiteraryNebula />
    </main>
  );
}
