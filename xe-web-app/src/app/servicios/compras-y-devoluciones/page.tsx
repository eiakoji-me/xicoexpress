import Link from "next/link";
import {
  ShoppingBag,
  CreditCard,
  Undo2,
  Package,
  ShieldQuestion,
  Globe2,
} from "lucide-react";

export default function ComprasPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Compras y Devoluciones XicoExpress
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Te ayudamos a comprar en tiendas en línea y físicas, y gestionamos
          devoluciones desde plataformas como Shein, Amazon y otros
          marketplaces.
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
          /{" "}
          <span className="text-gray-700 font-medium">
            Compras y Devoluciones
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            No siempre es sencillo comprar en línea o gestionar una devolución:
            métodos de pago limitados, direcciones de entrega, políticas en
            inglés o procesos complicados. En XicoExpress te acompañamos en todo
            el flujo para que puedas aprovechar más opciones de compra sin
            complicarte.
          </p>
          <p>
            También te ayudamos a recibir, revisar y devolver productos de
            plataformas como Shein, Amazon u otras tiendas, integrando nuestro
            servicio de envíos y almacenaje cuando sea necesario.
          </p>
        </div>
      </section>

      {/* Tipos de servicio */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          ¿Qué podemos hacer por ti?
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Desde compras puntuales por encargo hasta devoluciones y cambios
          estructurados para tu negocio o tus compras personales.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<ShoppingBag className="w-8 h-8 text-yellow-400" />}
            title="Compras por encargo"
            description="Nos compartes el producto que necesitas, la tienda y las características; nosotros apoyamos con la compra."
            details={[
              "Ideal si no cuentas con tarjeta o método de pago aceptado",
              "Apoyo en revisión de tallas, descripciones y reputación del vendedor",
              "Integración opcional con nuestro servicio de envíos",
            ]}
          />
          <ServiceCard
            icon={<Globe2 className="w-8 h-8 text-yellow-400" />}
            title="Compras en tiendas internacionales"
            description="Te ayudamos a comprar en plataformas extranjeras donde el envío directo es limitado o más complejo."
            details={[
              "Asesoría básica sobre tiempos y costos aproximados",
              "Recepción del producto y revisión física previa a reenvío",
              "Consolidación con otros paquetes para optimizar costos",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Undo2 className="w-8 h-8 text-yellow-400" />}
            title="Devoluciones y cambios"
            description="Acompañamiento para devolver productos a tiendas como Shein, Amazon y otros marketplaces."
            details={[
              "Apoyo para generar etiquetas y solicitudes de devolución",
              "Empaque y reenvío del producto a la tienda o centro de distribución",
              "Confirmación básica del estado del envío de retorno",
            ]}
          />
        </div>
      </section>

      {/* Cómo funciona: compras por encargo */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo funcionan las compras por encargo?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Buscamos que el proceso sea claro desde el inicio: qué producto se
            va a comprar, cuánto costará y en qué tiempos aproximados se
            recibirá.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Nos compartes el producto"
              description="Enlaces, capturas de pantalla o especificaciones del artículo, talla, color, tienda, etc."
            />
            <StepCard
              number={2}
              title="Cotizamos la compra"
              description="Te informamos precio estimado, costos por gestión y envío, así como tiempos aproximados."
            />
            <StepCard
              number={3}
              title="Realizamos la compra"
              description="Confirmamos contigo y procedemos con el pago en la tienda seleccionada."
            />
            <StepCard
              number={4}
              title="Recepción y entrega"
              description="Recibimos el producto, validamos lo básico y lo canalizamos a envío o recolección contigo."
            />
          </div>
        </div>
      </section>

      {/* Cómo funciona: devoluciones */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          ¿Y las devoluciones, cómo las manejamos?
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Cada tienda tiene sus reglas, pero nosotros te ayudamos a seguir los
          pasos y preparar el envío de retorno correctamente.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Package className="w-7 h-7 text-yellow-400" />}
            title="Recepción del producto"
            description="Traes el producto a XicoExpress o coordinamos recepción si ya fue entregado con nosotros."
          />
          <FeatureCard
            icon={<CreditCard className="w-7 h-7 text-yellow-400" />}
            title="Gestión del proceso en la tienda"
            description="Te apoyamos a generar la orden o etiqueta de devolución según las instrucciones de la plataforma."
          />
          <FeatureCard
            icon={<ShieldQuestion className="w-7 h-7 text-yellow-400" />}
            title="Empaque y envío de retorno"
            description="Preparamos el paquete, usamos la guía correspondiente y lo canalizamos a la paquetería indicada por la tienda."
          />
        </div>

        <p className="text-xs text-gray-500 text-center mt-6 max-w-3xl mx-auto">
          Importante: la aprobación de reembolsos, tiempos de acreditación y
          decisiones finales sobre devoluciones dependen siempre de la tienda o
          plataforma. XicoExpress acompaña el proceso logístico y de gestión,
          pero no controla la decisión final del comercio.
        </p>
      </section>

      {/* Nota operativa */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">
              Las condiciones de compras y devoluciones dependen de cada tienda.
            </span>{" "}
            Algunas plataformas pueden limitar cambios, plazos o tipos de
            producto que aceptan como devolución.
          </p>
          <p className="text-xs text-gray-600">
            Es importante revisar siempre los términos de la tienda (tiempos,
            estados aceptados del producto, reembolsos parciales, cupones, etc.)
            antes de decidir una compra o iniciar una devolución.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Necesitas ayuda con una compra o devolución?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Cuéntanos qué quieres comprar o qué problema tienes con tu pedido.
          Nuestro equipo te ayuda a dar el siguiente paso, desde la gestión con
          la tienda hasta el envío del producto.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="https://wa.me/527641028914"
            className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            ¿Necesitas más información?
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
