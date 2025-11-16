import Link from "next/link";
import {
  Coins,
  Handshake,
  Building2,
  Rocket,
  Users,
  Lightbulb,
  PhoneCall,
  Store,
} from "lucide-react";

export default function AlianzasEstrategicasPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Alianzas Estratégicas y Expansión
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nos aliamos con negocios, emprendedores e inversionistas para abrir
          nuevos puntos XicoExpress, digitalizar operaciones y ampliar cobertura
          logística en la región.
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
            Alianzas Estratégicas
          </span>
        </nav>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            XicoExpress nació con una idea clara: que la logística y el comercio
            electrónico también deben estar al alcance de zonas alejadas de las
            grandes ciudades. Para lograrlo, construimos alianzas con negocios
            locales, emprendedores e inversionistas que quieran abrir puntos,
            operar servicios y ampliar cobertura.
          </p>
          <p>
            Podemos trabajar contigo para convertir tu negocio en un punto
            XicoExpress, lanzar servicios de envíos y almacenaje en tu zona,
            digitalizar tu operación y conectar tu proyecto a nuestra red
            logística y de comercio.
          </p>
        </div>
      </section>

      {/* Tipos de alianzas */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Tipos de alianzas que exploramos
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          No todas las alianzas se ven igual. Podemos empezar de forma ligera y
          crecer conforme haya resultados, siempre con acuerdos claros.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Store className="w-8 h-8 text-yellow-400" />}
            title="Puntos aliados XicoExpress"
            description="Negocios que operan como punto de recolección/entrega y contacto para servicios de XicoExpress."
            details={[
              "Tiendas, farmacias, papelerías u otros negocios establecidos",
              "Espacio para recibir y entregar paquetes",
              "Capacitación básica en operación y atención al cliente",
            ]}
          />
          <ServiceCard
            icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
            title="Digitalización de negocios"
            description="Ayudamos a negocios sin presencia en línea a ofrecer ventas y envíos usando la infraestructura de XicoExpress."
            details={[
              "Apoyo en catálogo, procesos de pedido y cobro",
              "Integración con soluciones logísticas existentes",
              "Acompañamiento inicial en operación digital",
            ]}
            highlight
          />
          <ServiceCard
            icon={<Coins className="w-8 h-8 text-yellow-400" />}
            title="Alianzas con inversionistas"
            description="Esquemas para abrir nuevas ubicaciones u operaciones logísticas en conjunto."
            details={[
              "Evaluación de zonas con potencial logístico y comercial",
              "Modelos de co-inversión o franquicia ligera",
              "Definición de roles operativos y de gestión",
            ]}
          />
        </div>
      </section>

      {/* Cómo se construye una alianza */}
      <section className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            ¿Cómo construimos una alianza contigo?
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Buscamos relaciones de mediano y largo plazo, basadas en confianza,
            claridad y resultados. Este es el flujo general:
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              number={1}
              title="Conocer tu proyecto"
              description="Entendemos tu negocio, tu rol (operador, dueño, inversionista) y tu contexto local."
            />
            <StepCard
              number={2}
              title="Definir el modelo de alianza"
              description="Acordamos qué servicios se lanzarán, quién aporta qué y cómo se compartirán ingresos y responsabilidades."
            />
            <StepCard
              number={3}
              title="Implementación y arranque"
              description="Montamos procesos, capacitación, señalización y flujos básicos para empezar a operar."
            />
            <StepCard
              number={4}
              title="Seguimiento y ajustes"
              description="Monitoreamos resultados, ajustamos servicios y evaluamos nuevas etapas de expansión."
            />
          </div>
        </div>
      </section>

      {/* Casos de uso / perfiles de aliados */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          ¿Quién puede ser un aliado XicoExpress?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Building2 className="w-7 h-7 text-yellow-400" />}
            title="Negocios establecidos"
            description="Comercios con ubicación física que quieran sumar flujo de personas, ofrecer envíos y ampliar servicios a sus clientes."
          />
          <FeatureCard
            icon={<Users className="w-7 h-7 text-yellow-400" />}
            title="Emprendedores locales"
            description="Personas con buena red de contactos y conocimiento de su comunidad, interesadas en operar un punto XicoExpress."
          />
          <FeatureCard
            icon={<Rocket className="w-7 h-7 text-yellow-400" />}
            title="Inversionistas"
            description="Quienes buscan proyectos con enfoque territorial, impacto comunitario y potencial de crecimiento progresivo."
          />
        </div>
      </section>

      {/* Marco y expectativas */}
      <section className="bg-yellow-50 border-t border-yellow-100 py-8 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div className="space-y-3 text-sm text-gray-700">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Handshake className="w-5 h-5 text-yellow-500" />
              Expectativas en una alianza
            </h3>
            <p>
              Más que transacciones aisladas, buscamos relaciones claras. Por
              eso ponemos sobre la mesa desde el inicio:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Qué aporta XicoExpress (marca, procesos, logística, etc.).
              </li>
              <li>
                Qué aporta el aliado (local, equipo, inversión, red, etc.).
              </li>
              <li>Cómo se comparten ingresos, riesgos y decisiones.</li>
              <li>Cómo se mide el desempeño y en qué plazos se evalúa.</li>
            </ul>
            <p className="text-xs text-gray-600">
              Los detalles formales pueden ir desde acuerdos simples hasta
              contratos más estructurados, según el tamaño y la naturaleza de la
              alianza.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md text-sm text-gray-700">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-yellow-500" />
              ¿Qué necesitamos saber de ti?
            </h4>
            <p className="mb-2">
              Para una primera llamada nos ayuda conocer: ubicación, tipo de
              negocio o proyecto, qué te gustaría construir con XicoExpress y
              qué recursos tienes disponibles (espacio, tiempo, inversión,
              equipo).
            </p>
            <p className="text-xs text-gray-600">
              Con esa información podemos proponer un esquema de alianza
              aterrizado a tu realidad y a la etapa actual de XicoExpress.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 px-6 text-center border-t">
        <h3 className="text-2xl font-semibold mb-3">
          ¿Te interesa construir algo con XicoExpress?
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Cuéntanos tu idea, tu contexto y cómo imaginas una colaboración.
          Podemos empezar con una conversación exploratoria y, si hay buen
          encaje, diseñar juntos el siguiente paso.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contactanos?tipo=alianza"
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
