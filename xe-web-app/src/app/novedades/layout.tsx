import type { JSX } from "react";

export default function NovedadesLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Entérate de las últimas noticias y novedades de XicoExpress.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">{children}</section>
    </main>
  );
}
