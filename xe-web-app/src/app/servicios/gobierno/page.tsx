import Link from "next/link";
import {
  FileText,
  MapPin,
  Users,
  ClipboardCheck,
  Truck,
  CalendarDays,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function GobiernoPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Servicios para Agencias Gubernamentales
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Soluciones logísticas para dependencias públicas: recepción y entrega
          de documentación, distribución territorial y apoyo operativo en
          campañas y programas.
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
            Agencias Gubernamentales
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            Trabajamos con instituciones públicas que requieren apoyo logístico
            cercano a la gente: entrega y recepción de documentos, distribución
            territorial de materiales y coordinación de envíos asociados a
            programas y campañas.
          </p>
          <p>
            XicoExpress puede operar como un punto logístico aliado en la
            región, ayudando a acercar trámites y servicios a comunidades
            alejadas de las oficinas centrales, con procesos claros y una
            comunicación directa con los responsables de cada programa.
          </p>
        </div>
      </section>

      {/* Líneas de servicio para gobierno */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Líneas de servicio para dependencias públicas
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Adaptamos nuestros servicios de envíos, almacenaje y atención al
          público a las necesidades específicas de cada institución, programa o
          área administrativa.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FileText className="w-8 h-8 text-yellow-400" />}
            title="Documentación y paquetes oficiales"
            description="Recepción, resguardo y envío de documentos, expedientes y paquetes relacionados con trámites oficiales."
            details={[
              "Recepción y registro básico de sobres y paquetes",
              "Entrega controlada a responsables designados",
              "Integración con servicios de paquetería y mensajería",
            ]}
          />
          <ServiceCard
            icon={<MapPin className="w-8 h-8 text-yellow-400" />}
            title="Distribución territorial"
            description="Apoyo en la entrega de materiales a comunidades y oficinas regionales dentro de la zona de influencia."
            details={[
              "Rutas definidas para puntos específicos",
              "Programación por jornadas, semanas o campañas",
              "Sincronización con agendas institucionales",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Users className="w-8 h-8 text-yellow-400" />}
            title="Apoyo en campañas y programas"
            description="Logística complementaria para campañas de información, programas sociales y actividades institucionales."
            details={[
              "Entrega de materiales impresos o kits",
              "Apoyo en coordinación de recolección de documentos",
              "Adaptación a lineamientos de imagen institucional",
            ]}
          />
        </div>
      </section>

      {/* Cómo trabajamos con instituciones */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo trabajamos con tu institución?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Cada dependencia tiene procesos propios. Por eso partimos de un
            acuerdo claro sobre responsabilidades, alcances y canales de
            comunicación.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Diagnóstico y alcance"
              description="Analizamos el tipo de programa, volumen de movimientos y zonas a cubrir para definir un esquema viable."
            />
            <StepCard
              number={2}
              title="Diseño de operación"
              description="Definimos puntos de entrega/recepción, horarios, responsables y flujos de documentación básica."
            />
            <StepCard
              number={3}
              title="Operación y seguimiento"
              description="Ejecutamos la logística acordada con reportes periódicos y un canal dedicado para ajustes."
            />
            <StepCard
              number={4}
              title="Evaluación y mejora"
              description="Revisamos resultados al cierre de campañas o periodos para ajustar rutas, tiempos y capacidades."
            />
          </div>
        </div>
      </section>

      {/* Capacidades logísticas clave */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Capacidades logísticas que ponemos a disposición
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Truck className="w-7 h-7 text-yellow-400" />}
            title="Envíos y recolección en campo"
            description="Coordinamos movimientos de documentación y materiales aprovechando nuestra red de envíos y aliados."
          />
          <FeatureCard
            icon={<ClipboardCheck className="w-7 h-7 text-yellow-400" />}
            title="Control básico de registros"
            description="Registros de recepción y entrega con datos esenciales para que tu área administrativa tenga trazabilidad."
          />
          <FeatureCard
            icon={<CalendarDays className="w-7 h-7 text-yellow-400" />}
            title="Operación por calendario"
            description="Planificación por jornadas, campañas, periodos de registro o ventanas específicas del programa."
          />
        </div>
      </section>

      {/* Marco y buenas prácticas */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div className="space-y-3 text-sm text-gray-700">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <ShieldCheck className="w-5 h-5 text-yellow-500" />
              Buenas prácticas y lineamientos
            </h3>
            <p>
              Respetamos los lineamientos que marque cada institución en materia
              de imagen, comunicación y manejo de documentación. Antes de
              iniciar, acordamos:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Qué tipo de documentación y materiales se manejarán.</li>
              <li>
                Quiénes son los responsables autorizados para entregas y
                recepciones.
              </li>
              <li>
                Qué información mínima se registrará en cada movimiento
                (ejemplo: folio, área, fecha, responsable).
              </li>
              <li>
                Límites del servicio de XicoExpress frente a atribuciones
                formales de la dependencia.
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-sm text-gray-700">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-yellow-500" />
              Punto de contacto
            </h4>
            <p className="mb-2">
              Para instituciones públicas proponemos un canal de comunicación
              directo con la persona responsable del programa o área logística,
              de modo que cualquier ajuste operativo pueda resolverse con
              rapidez.
            </p>
            <p className="text-xs text-gray-600">
              Podemos trabajar con oficios, convenios o acuerdos marco que
              definan la relación de servicio, de acuerdo con las políticas de
              contratación de cada dependencia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Representas una agencia gubernamental?
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Cuéntanos el tipo de programa, las zonas que quieres cubrir y el
          volumen aproximado de movimientos. Diseñamos juntos un esquema
          logístico alineado a los procesos de tu institución.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactanos?tipo=gobierno"
            className="inline-block bg-yellow-400 text-black font-medium py-2 px-6 rounded hover:bg-yellow-500 transition"
          >
            Contáctanos para más información
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
