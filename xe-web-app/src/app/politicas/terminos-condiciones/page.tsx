export default function TerminosCondicionesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          1. Aceptación de los Términos
        </h2>
        <p>
          Al acceder y utilizar el sitio web de XicoExpress, así como nuestros
          servicios físicos y digitales, usted acepta quedar obligado por los
          presentes Términos y Condiciones. Si no está de acuerdo con estos
          términos, por favor no utilice nuestros servicios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Definiciones</h2>
        <p>
          &quot;Usuario&quot; se refiere a cualquier persona que acceda o use los
          servicios de XicoExpress. &quot;Sitio web&quot; se refiere a www.xicoexpress.mx.
          &quot;Servicios&quot; incluye recolección, envío, empaque, etiquetado,
          almacenamiento, compra y devolución de productos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Uso del Sitio Web y Servicios
        </h2>
        <p>
          El Usuario se compromete a utilizar el sitio web y los servicios de
          manera lícita, sin violar derechos de terceros ni normas aplicables.
          Está prohibido usar nuestros servicios para actividades ilegales o
          fraudulentas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. Alcance de los Servicios
        </h2>
        <p>
          XicoExpress ofrece servicios de envío nacional e internacional
          (principalmente a EE.UU.), recolección local, embalaje, etiquetado,
          almacenamiento temporal, compras y devoluciones de plataformas como
          Amazon, Shein, Temu, y Mercado Libre.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Tiempos y Cobertura</h2>
        <p>
          Los tiempos de entrega son estimados y pueden variar según el destino,
          condiciones logísticas o factores externos como clima o aduanas.
          XicoExpress no garantiza fechas específicas de entrega.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Precios, Pagos y Facturación
        </h2>
        <p>
          Los precios se determinan según peso, volumen y destino. Las
          cotizaciones están sujetas a cambio sin previo aviso. El pago debe
          realizarse antes de realizar el envío. El Usuario puede solicitar
          factura conforme a las disposiciones fiscales vigentes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Cancelaciones y Reembolsos
        </h2>
        <p>
          Los servicios contratados no son reembolsables una vez que el paquete
          ha sido recolectado o entregado a un transportista. Las cancelaciones
          deben solicitarse por escrito y están sujetas a evaluación caso por
          caso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Responsabilidad Limitada
        </h2>
        <p>
          XicoExpress no será responsable por daños indirectos, pérdida de
          mercancía por parte de terceros, o cualquier incidente fuera de su
          control. El Usuario es responsable de proporcionar información
          correcta y embalar adecuadamente sus productos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Propiedad Intelectual</h2>
        <p>
          Todo el contenido del sitio web, incluyendo logotipos, textos e
          imágenes, es propiedad de XicoExpress o de sus licenciantes, y está
          protegido por las leyes de propiedad intelectual. Queda prohibido su
          uso sin autorización previa por escrito.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          10. Privacidad y Protección de Datos
        </h2>
        <p>
          El tratamiento de datos personales se rige por nuestro Aviso de
          Privacidad. Al usar nuestros servicios, usted consiente el tratamiento
          de sus datos conforme a dicho aviso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">11. Modificaciones</h2>
        <p>
          XicoExpress se reserva el derecho de modificar estos Términos y
          Condiciones en cualquier momento. Las modificaciones serán publicadas
          en esta misma página, y se considerarán aceptadas si el Usuario
          continúa utilizando nuestros servicios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          12. Ley Aplicable y Jurisdicción
        </h2>
        <p>
          Este contrato se rige por las leyes mexicanas. Para la interpretación
          y cumplimiento de estos Términos, las partes se someten a la
          jurisdicción de los tribunales competentes en Puebla, renunciando a
          cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>

      <p className="text-sm text-gray-600 mt-10">
        Última actualización: {new Date().toLocaleDateString("es-MX")}
      </p>
    </main>
  );
}
