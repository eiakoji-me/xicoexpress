import { articles } from "@/content/articles";
import Image from "next/image";
import Link from "next/link";

export default function NoticiasPage() {
  const featured = articles.find((a) => a.featured);
  const others = articles.filter((a) => a !== featured);

  return (
    <>
      {/* Featured Article */}
      {featured && (
        <article className="mb-16 border rounded-xl overflow-hidden shadow-lg">
          <Image
            src={featured.image}
            alt={featured.title}
            width={1200}
            height={500}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="p-6 max-w-4xl mx-auto">
            <p className="text-sm text-gray-500">
              {new Date(featured.date).toLocaleDateString()}
            </p>
            <h2 className="text-3xl font-bold mt-2">{featured.title}</h2>
            <p className="mt-4 text-gray-700">{featured.summary}</p>
            <Link
              href={`/novedades/${featured.id}`}
              className="text-yellow-500 font-semibold inline-block mt-4"
            >
              Leer artículo →
            </Link>
          </div>
        </article>
      )}

      {/* Other Articles Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((article) => (
          <article
            key={article.id}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString()}
              </p>
              <p className="mt-2 text-gray-700">{article.summary}</p>
              <Link
                href={`/novedades/${article.id}`}
                className="text-yellow-500 mt-3 inline-block font-medium"
              >
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
