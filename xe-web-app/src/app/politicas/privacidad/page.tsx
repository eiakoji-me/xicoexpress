export default function PoliticaPrivacidadPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Aviso de Privacidad</h1>

      <p className="mb-4">
        De conformidad con lo establecido en la Ley Federal de Protección de
        Datos Personales en Posesión de los Particulares, XicoExpress pone a su
        disposición el presente aviso de privacidad.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Identidad y domicilio del responsable
      </h2>
      <p className="mb-4">
        XicoExpress, con domicilio en Del Gavilán 112 Local B, Xicotepec,
        Puebla, México, es responsable del tratamiento de sus datos personales.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Datos personales recabados
      </h2>
      <p className="mb-4">
        Los datos que recabamos pueden incluir: nombre completo, dirección,
        correo electrónico, número telefónico, identificación oficial, datos de
        envío y facturación.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Finalidades del tratamiento
      </h2>
      <p className="mb-4">
        Sus datos personales serán utilizados para las siguientes finalidades:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Proveer los servicios y productos que ha solicitado</li>
        <li>Notificarle sobre cambios en los mismos</li>
        <li>Dar cumplimiento a obligaciones legales</li>
        <li>Realizar análisis internos y mejorar nuestros servicios</li>
        <li>
          (Opcional) Fines mercadotécnicos o publicitarios, previo su
          consentimiento
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Transferencia de datos
      </h2>
      <p className="mb-4">
        Sus datos podrán ser transferidos a terceros nacionales o extranjeros
        únicamente para cumplir con los fines establecidos en este aviso. No
        compartiremos sus datos con terceros sin su consentimiento, salvo que la
        ley lo permita.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Derechos ARCO</h2>
      <p className="mb-4">
        Usted tiene derecho a acceder, rectificar y cancelar sus datos
        personales, así como oponerse al tratamiento de los mismos (Derechos
        ARCO). Puede ejercer estos derechos enviando un correo a:{" "}
        <strong>info@xicoexpress.mx</strong>. Su solicitud deberá incluir
        nombre completo, copia de una identificación oficial y una descripción
        clara del derecho que desea ejercer.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Revocación del consentimiento
      </h2>
      <p className="mb-4">
        Usted puede revocar su consentimiento para el tratamiento de sus datos
        personales, escribiendo al correo anterior. Su solicitud será atendida
        en un plazo no mayor a 20 días hábiles.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Limitación del uso o divulgación
      </h2>
      <p className="mb-4">
        Puede limitar el uso o divulgación de sus datos a través de los
        mecanismos disponibles en el correo de contacto. Si desea limitar la
        publicidad, puede inscribirse en el REPEP (PROFECO).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Uso de tecnologías de rastreo
      </h2>
      <p className="mb-4">
        Nuestro sitio utiliza cookies y tecnologías similares para mejorar la
        experiencia del usuario. Estas tecnologías recolectan información como
        su IP, navegador y páginas visitadas. Usted puede deshabilitarlas desde
        su navegador.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        9. Cambios al aviso de privacidad
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de realizar modificaciones o actualizaciones
        al presente aviso. Cualquier cambio será publicado en este mismo sitio
        web.
      </p>

      <p className="mt-6 text-sm text-gray-600">
        Última actualización: {new Date().toLocaleDateString("es-MX")}
      </p>
    </main>
  );
}
