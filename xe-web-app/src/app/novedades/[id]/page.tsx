import { articles } from "@/content/articles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articles.find((a) => a.id === params.id);
  if (!article) return notFound();

  return (
    <>
      {article.image && (
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 w-full h-auto object-cover"
        />
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
