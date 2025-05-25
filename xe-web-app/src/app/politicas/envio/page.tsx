export default function PoliticaEnvioPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Política de Envío</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introducción</h2>
        <p>
          En XicoExpress, nos comprometemos a entregar tus envíos de manera
          rápida, segura y eficiente. Esta política detalla nuestras prácticas
          de envío, tiempos estimados, costos y servicios adicionales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Tiempos de Procesamiento
        </h2>
        <p>
          Los envíos se procesan dentro de las 24 a 48 horas hábiles siguientes
          a la recepción del paquete y/o confirmación del pago.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Tiempos de Entrega Estimados
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Envíos nacionales: 1 a 5 días hábiles</li>
          <li>Envíos a EE.UU.: 5 a 12 días hábiles</li>
          <li>Otros destinos: sujeto a condiciones del transportista</li>
        </ul>
        <p>
          Los tiempos pueden variar por aduanas, clima u otras causas externas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Cobertura</h2>
        <p>
          Operamos a nivel nacional en México y realizamos envíos
          internacionales, principalmente hacia Estados Unidos. Algunos destinos
          internacionales pueden requerir validación previa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Tarifas de Envío</h2>
        <p>
          El costo del envío depende del peso, volumen y destino. Puedes usar
          nuestra herramienta de cotización en línea para estimar el precio
          antes de realizar tu envío.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Servicios Especiales</h2>
        <p>
          Ofrecemos recolección local, empaque al vacío, impresión de etiquetas
          y devoluciones para plataformas como Amazon, Shein, Temu y Mercado
          Libre.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Recolección Local</h2>
        <p>
          Puedes solicitar la recolección de tus paquetes en puntos
          participantes. Aplican restricciones según zona y horario. Consulta
          disponibilidad en tienda o WhatsApp.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Rastreo</h2>
        <p>
          Todos los envíos incluyen número de guía. Puedes rastrear tu paquete
          en la sección{" "}
          <a
            href="/herramientas/rastreo"
            className="text-blue-600 hover:underline"
          >
            Herramientas &gt; Rastreo
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Excepciones y Demoras</h2>
        <p>
          Envíos pueden retrasarse por causas ajenas como clima, inspección
          aduanal o alta demanda estacional. En estos casos, haremos lo posible
          por mantenerte informado.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Contacto</h2>
        <p>
          Si tienes dudas sobre tu envío, contáctanos por WhatsApp, redes
          sociales o en nuestra sucursal ubicada en Del Gavilán 112 Local B,
          Xicotepec, Puebla.
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-10">
        Última actualización: {new Date().toLocaleDateString("es-MX")}
      </p>
    </main>
  );
}
