import React from "react";
import { Briefcase, Globe, ShieldCheck, Users } from "lucide-react";

export default function NosotrosPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg max-w-2xl mx-auto">
          En XicoExpress conectamos a México con el mundo a través de envíos
          seguros y eficientes.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p>
            Proveer soluciones logísticas confiables que acerquen a las personas
            con sus productos, brindando un servicio personalizado y accesible.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
          <p>
            Ser la empresa de envíos preferida en Xicotepec y más allá,
            reconocida por nuestra rapidez, transparencia y cercanía con
            nuestros clientes.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto text-center">
          <div>
            <ShieldCheck className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
            <h3 className="font-semibold mb-1">Seguridad</h3>
            <p className="text-sm">
              Protegemos cada paquete como si fuera nuestro.
            </p>
          </div>
          <div>
            <Globe className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
            <h3 className="font-semibold mb-1">Cobertura</h3>
            <p className="text-sm">
              Envíos nacionales e internacionales sin complicaciones.
            </p>
          </div>
          <div>
            <Users className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
            <h3 className="font-semibold mb-1">Atención</h3>
            <p className="text-sm">
              Cercanía y soporte humano en cada paso del proceso.
            </p>
          </div>
          <div>
            <Briefcase className="mx-auto mb-2 h-10 w-10 text-yellow-500" />
            <h3 className="font-semibold mb-1">Profesionalismo</h3>
            <p className="text-sm">
              Comprometidos con la calidad y el cumplimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Iniciativas Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestras Iniciativas
        </h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Apoyo a negocios locales */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Apoyo a Negocios Locales
            </h3>
            <p className="text-sm text-gray-700">
              Ayudamos a pequeños negocios a vender en línea con servicios de
              almacenamiento, empaquetado y envíos, facilitando su entrada al
              ecommerce.
            </p>
          </div>

          {/* Programas de Franquicias Locales */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">
              Programas de Franquicias Locales
            </h3>
            <p className="text-sm text-gray-700">
              Compartimos nuestro conocimiento y plataforma para que socios
              locales puedan replicar el modelo de XicoExpress en comunidades
              remotas.
            </p>
          </div>

          {/* Iniciativas sociales */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Iniciativas Sociales</h3>
            <p className="text-sm text-gray-700">
              Ofrecemos apoyo logístico para campañas de donación, útiles
              escolares y eventos comunitarios, fortaleciendo el tejido social.
            </p>
          </div>

          {/* Conectividad rural */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Conectividad Rural</h3>
            <p className="text-sm text-gray-700">
              Establecemos rutas hacia zonas con poca cobertura para asegurar
              entregas de última milla y puntos de recolección accesibles.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section: Nuestra Proyección */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestra Proyección
        </h2>
        <div className="relative border-l-4 border-yellow-400 max-w-3xl mx-auto">
          {/* Milestone 1 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-6 top-1" />
            <h3 className="text-xl font-semibold mb-1">
              2024 – Apoyo a Negocios Locales
            </h3>
            <p className="text-sm text-gray-700">
              Lanzamos servicios de fulfillment y logística accesibles para
              pequeños comercios, permitiéndoles competir en el mercado digital.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-6 top-1" />
            <h3 className="text-xl font-semibold mb-1">
              2025 – Franquicias Locales
            </h3>
            <p className="text-sm text-gray-700">
              Implementamos un modelo de franquicia social para que otros
              emprendedores puedan replicar XicoExpress en regiones remotas.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-6 top-1" />
            <h3 className="text-xl font-semibold mb-1">
              2026 – Iniciativas Sociales
            </h3>
            <p className="text-sm text-gray-700">
              Fortalecemos alianzas comunitarias para apoyar campañas de
              donación, distribución de útiles escolares y eventos con impacto
              social.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="mb-12 ml-6 relative">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-6 top-1" />
            <h3 className="text-xl font-semibold mb-1">
              2027 – Conectividad Rural
            </h3>
            <p className="text-sm text-gray-700">
              Expandimos nuestras rutas a comunidades con baja cobertura,
              garantizando entregas de última milla y puntos de recolección más
              cercanos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para enviar con nosotros?
        </h2>
        <p className="mb-6">
          Descubre nuestros servicios o contáctanos directamente para asesoría
          personalizada.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition-transform hover:scale-105 shadow-md"
        >
          Contáctanos
        </a>
      </section>
    </main>
  );
}
