import Link from "next/link";
import { Truck, MapPin, Clock, Package, Shield, PhoneCall } from "lucide-react";

export default function EnviosPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Envíos y Fletes XicoExpress
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Envíos locales, nacionales e internacionales con soluciones flexibles
          para personas, negocios y organizaciones.
        </p>
      </section>

      {/* Breadcrumb + Intro */}
      <section className="py-8 px-6 max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>{" "}
          /{" "}
          <Link href="/servicios" className="hover:underline">
            Servicios
          </Link>{" "}
          / <span className="text-gray-700 font-medium">Envíos y Fletes</span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            En XicoExpress conectamos a personas, comercios y organizaciones con
            soluciones de envío confiables. Desde paquetes pequeños hasta carga
            por flete, te ayudamos a mover lo que necesitas con seguimiento y
            acompañamiento en cada etapa.
          </p>
          <p>
            Operamos con una red de transportistas y paqueterías aliadas para
            ofrecerte opciones de costo, tiempo de entrega y nivel de servicio
            que se adapten a tu realidad: urgencias, entregas programadas,
            recolección a domicilio y más.
          </p>
        </div>
      </section>

      {/* Opciones de envío */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Opciones de envío que ofrecemos
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Ya sea que envíes un paquete individual o manejes volúmenes
          constantes, podemos diseñar una solución a tu medida.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<MapPin className="w-8 h-8 text-yellow-400" />}
            title="Envíos Locales y Regionales"
            description="Entregas dentro de la ciudad y municipios cercanos, ideales para comercios locales, envíos personales y entregas urgentes."
            details={[
              "Opciones de mismo día o día siguiente (según zona)",
              "Recolección en punto XicoExpress o a domicilio",
              "Ideal para tiendas, emprendedores y servicios locales",
            ]}
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8 text-yellow-400" />}
            title="Envíos Nacionales y Fletes"
            description="Cobertura a nivel nacional con aliados logísticos y transportistas para paquetería y carga."
            details={[
              "Paquetería y fletes consolidados",
              "Rastreo y confirmación de entrega",
              "Opciones económicas y exprés según destino",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Package className="w-8 h-8 text-yellow-400" />}
            title="Envíos Internacionales"
            description="Envíos seleccionados al extranjero mediante socios de paquetería internacional."
            details={[
              "Apoyo básico en documentación de envío",
              "Cotizaciones personalizadas por destino",
              "Ideal para compras por encargo y regalos",
            ]}
          />
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo funciona el servicio de envíos?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Hemos simplificado el proceso para que puedas enviar con confianza,
            aunque no tengas experiencia previa usando paqueterías o fletes.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Cotiza tu envío"
              description="Compártenos origen, destino, dimensiones y tipo de contenido. Te presentamos opciones de costo y tiempo de entrega."
            />
            <StepCard
              number={2}
              title="Prepara tu paquete"
              description="Puedes traer tu paquete ya empacado o solicitar apoyo de nuestro equipo para empaque y protección adicional."
            />
            <StepCard
              number={3}
              title="Entrega o recolección"
              description="Entrega tu paquete en nuestro punto XicoExpress o programa recolección según disponibilidad en tu zona."
            />
            <StepCard
              number={4}
              title="Seguimiento y entrega"
              description="Te compartimos número de guía o referencia. Nuestro equipo te acompaña hasta confirmar la entrega con el destinatario."
            />
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Servicios adicionales para envíos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Clock className="w-7 h-7 text-yellow-400" />}
            title="Envíos programados y recurrentes"
            description="Ideal para negocios que envían de forma frecuente. Definimos rutas, días de recolección y acuerdos de tarifa."
          />
          <FeatureCard
            icon={<Shield className="w-7 h-7 text-yellow-400" />}
            title="Asesoría en embalaje y riesgos"
            description="Te orientamos sobre el tipo de empaque recomendado, restricciones y mejores prácticas para reducir daños."
          />
          <FeatureCard
            icon={<PhoneCall className="w-7 h-7 text-yellow-400" />}
            title="Acompañamiento y soporte humano"
            description="No eres un número de guía más. Nuestro equipo da seguimiento personalizado, especialmente en envíos sensibles."
          />
        </div>
      </section>

      {/* Nota operativa */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">
              Cobertura sujeta a zona y tipo de carga.
            </span>{" "}
            Algunas rutas, tipos de producto o servicios especiales pueden
            requerir revisión adicional. Confirma siempre disponibilidad y
            condiciones en el cotizador o directamente con nuestro equipo.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Listo para enviar con XicoExpress?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Déjanos los detalles de tu envío y te ayudamos a elegir la mejor
          opción en costo, tiempo y seguridad.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://wa.me/527641028914"
            className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            Hablar con un asesor
          </Link>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  details,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  highlight?: boolean;
}) {
  const baseStyle = highlight
    ? "border border-yellow-300 shadow-lg"
    : "shadow-md";

  return (
    <div
      className={`bg-white p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between ${baseStyle}`}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mt-2">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md flex flex-col gap-2">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black font-semibold mb-2">
        {number}
      </div>
      <h4 className="text-base font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
