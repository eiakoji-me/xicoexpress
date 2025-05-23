export default function PoliticasPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Políticas de XicoExpress</h1>
      <p className="mb-4">
        Aquí encontrarás información detallada sobre nuestras políticas de
        privacidad, envío y condiciones de uso. Recomendamos leerlas
        cuidadosamente para conocer tus derechos y obligaciones al utilizar
        nuestros servicios.
      </p>

      <ul className="list-disc ml-6 space-y-4 text-lg">
        <li>
          <a
            href="/politicas/privacidad"
            className="text-blue-600 hover:underline"
          >
            Aviso de Privacidad
          </a>
        </li>
        <li>
          <a href="/politicas/envio" className="text-blue-600 hover:underline">
            Política de Envío
          </a>
        </li>
        <li>
          <a
            href="/politicas/terminos-condiciones"
            className="text-blue-600 hover:underline"
          >
            Términos y Condiciones
          </a>
        </li>
      </ul>
    </main>
  );
}
