import Link from "next/link";
import {
  Route,
  ArrowLeftRight,
  Warehouse,
  Handshake,
  MapPin,
  ClipboardList,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function TransportistasPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transportistas y Fleteros
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Somos tu aliado en última milla, transbordo y almacenaje intermedio
          para que tu operación llegue más lejos con menos fricción.
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
            Transportistas y Fleteros
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            XicoExpress se integra a tu operación como un punto logístico
            estratégico: recibimos, consolidamos, almacenamos por periodos
            cortos y apoyamos en la entrega de última milla para tus clientes
            finales.
          </p>
          <p>
            Si manejas rutas regionales, servicios foráneos o fletes de larga
            distancia, podemos ayudarte a cerrar el recorrido en zonas donde
            sería más costoso o complejo operar directamente.
          </p>
        </div>
      </section>

      {/* Líneas de colaboración */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          ¿Cómo podemos trabajar con tu flotilla o unidad?
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Diseñamos esquemas de colaboración sencillos, con responsabilidades
          claras y enfoque en reducir tiempos muertos y recorridos innecesarios.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Route className="w-8 h-8 text-yellow-400" />}
            title="Subcontratación de última milla"
            description="Tomamos la parte final de tus entregas en zonas específicas, liberando tiempo y kilómetros a tus unidades."
            details={[
              "Entrega a cliente final en zona urbana y semiurbana",
              "Rutas definidas por colonias, días y horarios",
              "Enfoque en experiencia de entrega y confirmación básica",
            ]}
          />
          <ServiceCard
            icon={<ArrowLeftRight className="w-8 h-8 text-yellow-400" />}
            title="Transbordo y consolidación de carga"
            description="Recibimos tus envíos, los consolidamos y apoyamos en su redistribución a rutas locales o destinatarios finales."
            details={[
              "Descarga, clasificación básica y reacomodo",
              "Consolidación de carga por zona o cliente",
              "Coordinación con tus operadores y horarios de ruta",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Warehouse className="w-8 h-8 text-yellow-400" />}
            title="Almacenaje intermedio"
            description="Uso de XicoExpress como punto de paso para mercancía en tránsito o entregas diferidas."
            details={[
              "Resguardo de corta estancia",
              "Apoyo en recolecciones escalonadas",
              "Integración con servicios de envíos y fulfillment",
            ]}
          />
        </div>
      </section>

      {/* Esquema operativo */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Esquema operativo típico
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Cada alianza se ajusta a tu realidad, pero en general seguimos un
            flujo claro de coordinación.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Definición de zonas y puntos"
              description="Acordamos qué zonas, clientes o rutas tomará XicoExpress y cuáles mantendrás tú directamente."
            />
            <StepCard
              number={2}
              title="Entrega en punto XicoExpress"
              description="Tus unidades descargan mercancía en nuestros puntos acordados para consolidación o entrega."
            />
            <StepCard
              number={3}
              title="Clasificación y reparto"
              description="Se clasifica la mercancía según rutas locales, horarios y prioridades de entrega."
            />
            <StepCard
              number={4}
              title="Entrega y retroalimentación"
              description="Realizamos las entregas acordadas y compartimos retroalimentación básica sobre incidencias."
            />
          </div>
        </div>
      </section>

      {/* Beneficios para transportistas y fleteros */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Beneficios de aliarte con XicoExpress
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Clock className="w-7 h-7 text-yellow-400" />}
            title="Menos tiempo en ciudad"
            description="Reduce el tiempo de tus unidades en tramos urbanos, tráfico pesado y recorridos cortos poco rentables."
          />
          <FeatureCard
            icon={<MapPin className="w-7 h-7 text-yellow-400" />}
            title="Presencia local fortalecida"
            description="Tu marca mantiene alcance en la región apoyándose en un aliado que conoce el territorio."
          />
          <FeatureCard
            icon={<ClipboardList className="w-7 h-7 text-yellow-400" />}
            title="Operación más ordenada"
            description="Mejor organización de entregas y recolecciones, con zonas y horarios definidos para ambas partes."
          />
        </div>
      </section>

      {/* Marco de colaboración */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div className="space-y-3 text-sm text-gray-700">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Handshake className="w-5 h-5 text-yellow-500" />
              Esquemas de colaboración flexibles
            </h3>
            <p>
              Podemos trabajar bajo distintos esquemas, según el tipo de
              operación que ya tengas:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Pago por pieza entregada o manejo.</li>
              <li>Acuerdos por ruta o por jornada.</li>
              <li>Proyectos pilotos por temporada o región concreta.</li>
            </ul>
            <p className="text-xs text-gray-600">
              El objetivo es que la alianza sea rentable para ambas partes y
              fácil de administrar en el día a día.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-sm text-gray-700">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-yellow-500" />
              ¿Qué necesitamos para empezar?
            </h4>
            <p className="mb-2">
              Para una primera conversación nos ayuda saber: qué tipo de carga
              manejas, qué zonas cubres, qué problemáticas quieres resolver
              (tiempos, costos, devoluciones, etc.) y qué volumen aproximado
              tienes en la región.
            </p>
            <p className="text-xs text-gray-600">
              A partir de ahí podemos proponer un esquema de prueba con metas
              claras y un periodo definido.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Eres transportista o fletero y quieres sumar a XicoExpress?
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Agenda una conversación para explorar cómo podemos integrarnos a tu
          operación actual y ayudarte a cubrir mejor tu última milla o zonas
          específicas.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactanos?tipo=transportistas"
            className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            ¿Quieres más información?
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
