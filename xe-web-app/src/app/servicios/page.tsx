import Link from "next/link";
import {
  Truck,
  Package,
  ShoppingBag,
  Building2,
  Handshake,
  Coins,
} from "lucide-react";

export default function ServiciosPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Soluciones logísticas a tu medida
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Servicios de envío, almacenaje y compras por encargo para
          particulares, empresas y organizaciones.
        </p>
      </section>

      {/* Intro Paragraphs */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center space-y-6 text-gray-700 text-lg">
        <p>
          En XicoExpress hemos desarrollado una plataforma logística y
          colaborativa que impulsa conexiones estratégicas con empresas,
          transportistas y actores clave del comercio electrónico. Nuestra
          infraestructura está orientada a fortalecer redes de distribución
          eficientes, facilitando entregas ágiles y expandiendo el alcance de
          nuestros servicios en beneficio de las comunidades que atendemos.
        </p>
        <p>
          Nos comprometemos a acercar oportunidades a emprendedores en zonas
          remotas mediante soluciones de fulfillment accesibles, permitiéndoles
          competir en mercados más amplios. Al mismo tiempo, ofrecemos servicios
          personalizados a usuarios individuales y negocios en crecimiento, con
          un enfoque claro en la eficiencia, cercanía y confianza.
        </p>
      </section>

      {/* Categorías de servicios */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <CategoryCard
            icon={<Truck className="w-8 h-8 text-yellow-400" />}
            title="Envíos y Fletes"
            summary="Cobertura nacional e internacional con opciones exprés, recolección local y etiquetas prepagadas."
            link="/servicios/envios"
          />
          <CategoryCard
            icon={<Package className="w-8 h-8 text-yellow-400" />}
            title="Almacenaje y Empaque"
            summary="Ofrecemos resguardo seguro, empaque profesional y al vacío para optimizar espacio y protección."
            link="/servicios/almacenaje"
          />
          <CategoryCard
            icon={<ShoppingBag className="w-8 h-8 text-yellow-400" />}
            title="Compras y Devoluciones"
            summary="Adquiere productos con nosotros y gestiona devoluciones desde plataformas como Shein o Amazon."
            link="/servicios/compras"
          />
        </div>
      </section>

      {/* Servicios Empresariales */}
      <section className="bg-gray-50 py-16 px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Soluciones para Empresas y Organizaciones
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Colaboramos con dependencias públicas, transportistas y comercios
            electrónicos para ofrecer servicios logísticos adaptados a sus
            operaciones.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 overflow-x-auto px-4 pb-4">
          <IndustryCard
            icon={<Building2 className="w-8 h-8 text-yellow-400" />}
            title="Agencias Gubernamentales"
            points={[
              "Entrega y recepción de paquetes oficiales",
              "Distribución territorial de documentación",
              "Apoyo logístico en campañas",
            ]}
            link="/servicios/empresas/gobierno"
          />
          <IndustryCard
            icon={<Package className="w-8 h-8 text-yellow-400" />}
            title="Fulfillment para Pequeños Negocios"
            points={[
              "Almacenaje y preparación de pedidos",
              "Etiquetado y empaquetado personalizado",
              "Gestión de envíos a nivel nacional",
            ]}
            link="/servicios/empresas/fulfillment"
            highlight
          />
          <IndustryCard
            icon={<Handshake className="w-8 h-8 text-yellow-400" />}
            title="Transportistas y Fleteros"
            points={[
              "Subcontratación de última milla",
              "Transbordo y consolidación de cargas",
              "Almacenaje intermedio",
            ]}
            link="/servicios/empresas/transportistas"
          />
          <IndustryCard
            icon={<Coins className="w-8 h-8 text-yellow-400" />}
            title="Alianzas Estratégicas"
            points={[
              "Digitalizamos negocios sin presencia en línea",
              "Colaboración con emprendedores e inversionistas",
              "Puntos de recolección con aliados locales",
            ]}
            link="/servicios/empresas/expansion"
          />
        </div>
      </section>

      {/* CTA Empresarial */}
      <section className="bg-white py-16 px-6 text-center shadow-inner border-t">
        <h3 className="text-2xl font-semibold mb-2">
          ¿Representas una empresa o institución?
        </h3>
        <p className="text-gray-600 mb-4">
          Estamos listos para colaborar contigo y diseñar una solución logística
          a tu medida.
        </p>
        <Link
          href="/contacto?tipo=empresa"
          className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
        >
          Contáctanos
        </Link>
      </section>
    </main>
  );
}

function CategoryCard({
  icon,
  title,
  summary,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  summary: string;
  link: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-gray-600 text-sm">{summary}</p>
      </div>
      <div className="mt-4">
        <Link
          href={link}
          className="inline-block text-sm font-medium text-yellow-600 hover:underline"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
}

function IndustryCard({
  icon,
  title,
  points,
  link,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
  link?: string;
  highlight?: boolean;
}) {
  const baseStyle = highlight
    ? "bg-white border border-yellow-300 shadow-lg"
    : "bg-white shadow-md";

  return (
    <div
      className={`min-w-[280px] md:min-w-[320px] p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between ${baseStyle}`}
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      {link && (
        <div className="mt-4">
          <Link
            href={link}
            className="inline-block text-sm font-medium text-yellow-600 hover:underline"
          >
            Ver detalles →
          </Link>
        </div>
      )}
    </div>
  );
}
