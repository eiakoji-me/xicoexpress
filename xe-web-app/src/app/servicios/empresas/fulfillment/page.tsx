import Link from "next/link";
import {
  ShoppingBag,
  Boxes,
  Truck,
  Warehouse,
  ClipboardList,
  ChartLine,
  Users,
  PhoneCall,
} from "lucide-react";

export default function FulfillmentPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Fulfillment para Pequeños Negocios
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nos encargamos de almacenar, preparar y enviar tus pedidos para que tú
          te enfoques en vender y hacer crecer tu marca.
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
          <Link href="/servicios#empresas" className="hover:underline">
            Empresas y Organizaciones
          </Link>{" "}
          /{" "}
          <span className="text-gray-700 font-medium">
            Fulfillment para Pequeños Negocios
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            Si vendes en línea o por redes sociales, sabes que el reto no solo
            es conseguir clientes, sino también entregarles a tiempo y en buen
            estado. Ahí entra nuestro servicio de fulfillment: centralizamos tu
            inventario, preparamos tus pedidos y coordinamos los envíos.
          </p>
          <p>
            XicoExpress está pensado para pequeños negocios y emprendedores que
            necesitan una solución flexible, sin inversiones grandes en bodegas,
            personal o sistemas complejos de logística.
          </p>
        </div>
      </section>

      {/* Qué incluye el fulfillment */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          ¿Qué incluye el servicio de fulfillment?
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Combinamos almacenaje, preparación de pedidos y coordinación de envíos
          en un solo servicio, adaptado al tamaño actual de tu operación y listo
          para crecer contigo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Warehouse className="w-8 h-8 text-yellow-400" />}
            title="Almacenaje de inventario"
            description="Resguardo de tus productos en nuestras instalaciones con organización por producto y marca."
            details={[
              "Recepción y registro básico de mercancía",
              "Organización por referencias / SKU sencillos",
              "Condiciones de resguardo acordes a tu tipo de producto",
            ]}
          />
          <ServiceCard
            icon={<Boxes className="w-8 h-8 text-yellow-400" />}
            title="Preparación de pedidos (picking & packing)"
            description="Armado de pedidos a partir de tus órdenes de venta, con empaque adecuado para envío."
            details={[
              "Selección de productos según la orden",
              "Empaque y protección para paquetería o flete",
              "Posibilidad de incluir material de marca (flyers, notas, etc.)",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8 text-yellow-400" />}
            title="Gestión de envíos"
            description="Coordinamos la salida de tus pedidos usando nuestra red de envíos y paqueterías aliadas."
            details={[
              "Envíos locales, regionales y nacionales",
              "Opción de múltiples niveles de servicio (económico / exprés)",
              "Básicos de seguimiento y confirmación de entrega",
            ]}
          />
        </div>
      </section>

      {/* Cómo funciona el flujo de fulfillment */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo funciona el flujo día a día?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Mantenemos un flujo sencillo y entendible para ti y tu equipo, aún
            si estás empezando en el comercio electrónico.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Envío de inventario"
              description="Nos envías tus productos o los entregas directamente en XicoExpress para su registro y almacenaje."
            />
            <StepCard
              number={2}
              title="Recepción de órdenes"
              description="Nos compartes tus pedidos (por archivo, sistema sencillo o integración futura) con datos de envío."
            />
            <StepCard
              number={3}
              title="Preparación y empaque"
              description="Armamos cada pedido, verificamos contenido y lo empaquetamos según el tipo de producto."
            />
            <StepCard
              number={4}
              title="Envío y seguimiento"
              description="Canalizamos el pedido a la paquetería o ruta definida y te compartimos los datos básicos de envío."
            />
          </div>
        </div>
      </section>

      {/* Beneficios para pequeños negocios */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Beneficios para tu negocio
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<ShoppingBag className="w-7 h-7 text-yellow-400" />}
            title="Más tiempo para vender"
            description="Deja la parte operativa en nuestras manos y enfócate en conseguir clientes, mejorar tu producto y crecer."
          />
          <FeatureCard
            icon={<ChartLine className="w-7 h-7 text-yellow-400" />}
            title="Escala paso a paso"
            description="Empieza con pocos productos y bajo volumen, y ajusta servicios conforme tus ventas aumenten."
          />
          <FeatureCard
            icon={<ClipboardList className="w-7 h-7 text-yellow-400" />}
            title="Mayor orden y trazabilidad"
            description="Ten claridad sobre qué hay en inventario, qué salió y hacia dónde, con registros básicos de apoyo."
          />
        </div>
      </section>

      {/* Esquema y consideraciones */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div className="space-y-3 text-sm text-gray-700">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Users className="w-5 h-5 text-yellow-500" />
              Pensado para pequeños y medianos volúmenes
            </h3>
            <p>
              Nuestro enfoque es acompañar a pequeños negocios, no competir con
              grandes centros de distribución automatizados. Eso nos permite:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Ser flexibles con volúmenes iniciales.</li>
              <li>Ajustar el servicio a tu realidad, no al revés.</li>
              <li>Dar acompañamiento más cercano y humano.</li>
            </ul>
            <p className="text-xs text-gray-600">
              Para operaciones muy grandes o requerimientos altamente
              especializados, podemos evaluar caso por caso y recomendar el
              esquema más conveniente.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-sm text-gray-700">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-yellow-500" />
              ¿Cómo cotizamos el fulfillment?
            </h4>
            <p className="mb-2">
              Normalmente consideramos tres factores principales: espacio de
              almacenaje, número de pedidos y tipo de producto. Con esos datos
              armamos una propuesta clara y simple.
            </p>
            <p className="text-xs text-gray-600">
              Podemos empezar con un piloto por uno o dos meses para ajustar
              procesos, tiempos de corte y comunicación antes de escalar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Quieres que XicoExpress maneje tus pedidos?
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Cuéntanos qué vendes, por dónde vendes (redes sociales, marketplace,
          tienda en línea) y cuántos pedidos manejas al mes. Diseñamos un
          esquema de fulfillment a tu medida.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactanos?tipo=fulfillment"
            className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            Solicitar una propuesta
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
