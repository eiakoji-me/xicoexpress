import Link from "next/link";
import {
  Package,
  Boxes,
  Warehouse,
  Shield,
  ClipboardList,
  Clock,
} from "lucide-react";

export default function AlmacenajePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Almacenaje y Empaque XicoExpress
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Resguardo seguro de mercancía y empaque profesional para personas,
          emprendedores y negocios en crecimiento.
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
            Almacenaje y Empaque
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            Nuestro servicio de almacenaje está pensado para quienes necesitan
            espacio, control y seguridad sin invertir en una bodega propia.
            Puedes resguardar desde algunos paquetes hasta inventarios de
            negocio, con apoyo en registro, etiquetado y salida de mercancías.
          </p>
          <p>
            Complementamos el almacenaje con empaque profesional para proteger
            tus productos, optimizar espacio y facilitar envíos posteriores,
            incluyendo opciones de consolidación, reempaque y acondicionamiento
            especial para ventas en línea.
          </p>
        </div>
      </section>

      {/* Tipos de almacenaje y empaque */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Qué podemos almacenar y cómo te ayudamos
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Adaptamos el servicio a tu volumen, frecuencia de movimiento y tipo de
          producto. Desde guardado temporal hasta apoyo en operaciones de
          fulfillment.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Package className="w-8 h-8 text-yellow-400" />}
            title="Almacenaje por caja o paquete"
            description="Ideal para personas, emprendedores y pequeños negocios que manejan volúmenes moderados."
            details={[
              "Resguardo de paquetes, cajas y pequeñas existencias",
              "Control básico de entradas y salidas",
              "Opción de integrar con envíos individuales",
            ]}
          />
          <ServiceCard
            icon={<Warehouse className="w-8 h-8 text-yellow-400" />}
            title="Almacenaje para negocios"
            description="Espacio para inventarios más amplios, con enfoque en operación continua y logística de distribución."
            details={[
              "Almacenaje por volumen y por posición (estantería)",
              "Apoyo en separación de pedidos (picking simple)",
              "Coordinación con fletes y paqueterías aliadas",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Boxes className="w-8 h-8 text-yellow-400" />}
            title="Empaque y acondicionamiento"
            description="Preparación de tus productos para almacenaje prolongado y envíos seguros."
            details={[
              "Reempaque, relleno y protección de mercancía",
              "Etiquetado básico e identificación por cliente",
              "Empaque pensado para paquetería y flete",
            ]}
          />
        </div>
      </section>

      {/* Cómo funciona el almacenaje */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo funciona el servicio de almacenaje?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Queremos que tengas claridad sobre dónde está tu mercancía, en qué
            condiciones se resguarda y cómo se mueve. Este es el flujo básico de
            servicio:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Recepción de mercancía"
              description="Recibimos tus productos en nuestras instalaciones, verificamos cantidades y estado general."
            />
            <StepCard
              number={2}
              title="Registro e identificación"
              description="Etiquetamos y registramos tu mercancía para poder ubicarla fácilmente y gestionar salidas."
            />
            <StepCard
              number={3}
              title="Resguardo seguro"
              description="Almacenamos tus productos en área asignada, con organización que puede crecer con tu operación."
            />
            <StepCard
              number={4}
              title="Salida y entrega"
              description="Preparamos tu mercancía para retiro en bodega o enviarla mediante nuestro servicio de envíos."
            />
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Servicios adicionales de valor
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Shield className="w-7 h-7 text-yellow-400" />}
            title="Cuidado y protección de productos"
            description="Te orientamos sobre el tipo de empaque y resguardo más adecuado para minimizar daños."
          />
          <FeatureCard
            icon={<ClipboardList className="w-7 h-7 text-yellow-400" />}
            title="Apoyo en inventario básico"
            description="Podemos ayudarte con recuentos periódicos sencillos y reportes de existencias bajo acuerdo."
          />
          <FeatureCard
            icon={<Clock className="w-7 h-7 text-yellow-400" />}
            title="Estancias flexibles"
            description="Planea almacenajes de corto, mediano o mayor plazo, según tu temporada de ventas y flujo de mercancía."
          />
        </div>
      </section>

      {/* Nota operativa */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">
              El servicio de almacenaje está sujeto a evaluación de tipo de
              producto y volumen.
            </span>{" "}
            No manejamos mercancías prohibidas por ley, sustancias peligrosas,
            ni valores en efectivo.
          </p>
          <p className="text-xs text-gray-600">
            Para productos especiales (frágiles, electrónicos, equipos de alto
            valor, etc.) es importante revisar condiciones específicas de
            resguardo y responsabilidad antes de iniciar.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Necesitas espacio para tu inventario o tus paquetes?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Cuéntanos qué tipo de productos manejas y con qué frecuencia se
          mueven. Diseñamos un esquema de almacenaje y empaque que acompañe el
          crecimiento de tu proyecto.
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
