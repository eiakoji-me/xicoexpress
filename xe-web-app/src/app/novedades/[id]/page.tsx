import { articles } from "@/content/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function ArticleDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) return notFound();

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {article.title}
      </h1>
      <p className="text-sm text-center text-gray-500 mb-8">
        {new Date(article.date).toLocaleDateString("es-MX", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {article.image && (
        <div className="aspect-[16/6] w-full relative rounded-xl shadow-md mb-6 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <p className="text-lg leading-relaxed whitespace-pre-line mb-10">
        {article.content}
      </p>

      <div className="text-center">
        <Link
          href="/novedades"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition-transform hover:scale-105 shadow-md"
        >
          ← Regresar a noticias
        </Link>
      </div>
    </>
  );
}
