import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PoemCollectionPage } from "../../../../components/PoemCollectionPage";
import { getPoemCollection, poemCollections } from "../../../../data/poem-collections";

export function generateStaticParams() { return poemCollections.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = getPoemCollection(slug);
  return { title: collection ? `${collection.title}｜数字文学空间` : "文学选集" };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getPoemCollection(slug);
  if (!collection) notFound();
  return <PoemCollectionPage collection={collection} />;
}
