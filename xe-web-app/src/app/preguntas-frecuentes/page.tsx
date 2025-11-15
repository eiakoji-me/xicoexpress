import React from "react";
import { ChevronDown, Headphones } from "lucide-react";

const faqs = [
  {
    question: "¿Qué servicios ofrece XicoExpress?",
    answer:
      "Ofrecemos envíos nacionales e internacionales, recolección local, almacenamiento, etiquetas prepagadas, embalaje al vacío, y gestión de compras y devoluciones en plataformas como Shein, Temu, Amazon y Mercado Libre.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Estamos en Del Gavilán 112 Local B, Xicotepec, Puebla, México. Consulta la sección de contacto para más detalles.",
  },
  {
    question: "¿Puedo hacer devoluciones desde mi domicilio?",
    answer:
      "Sí. Ofrecemos recolección local para devoluciones de plataformas como Shein y Temu. Consulta disponibilidad en tu zona.",
  },
  {
    question: "¿Cómo puedo rastrear mi envío?",
    answer: (
      <div className="space-y-2 text-gray-700">
        <p>Puedes rastrear tu envío fácilmente siguiendo estos pasos:</p>
        <ol className="list-decimal list-inside ml-6 space-y-1">
          <li>
            Dirígete al menú principal y selecciona{" "}
            <strong>Herramientas &gt; Rastreo</strong>.
          </li>
          <li>
            Selecciona la paquetería con la que realizaste el envío (por
            ejemplo: FedEx, Estafeta, DHL, etc.).
          </li>
          <li>Ingresa tu número de guía.</li>
          <li>
            Haz clic en <strong>Rastrear</strong> para consultar el estado
            actualizado de tu paquete.
          </li>
        </ol>
        <p>
          Si no estás seguro de qué paquetería se utilizó, contáctanos y con
          gusto te ayudamos a rastrear tu envío.
        </p>
      </div>
    ),
  },
  {
    question: "¿Tienen servicio de almacenamiento?",
    answer:
      "Sí, almacenamos tus compras en Estados Unidos para consolidar y reenviar tus paquetes cuando lo necesites.",
  },
  {
    question: "¿Puedo comprar productos en USA aunque no tenga tarjeta?",
    answer:
      "¡Claro! Nosotros podemos hacer la compra por ti. Solo compártenos el enlace y nos encargamos del resto.",
  },
];

const PreguntasFrecuentesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Resolvemos las dudas más comunes sobre nuestros servicios, envíos,
          devoluciones, almacenamiento y más.
        </p>
      </section>

      {/* Main Content */}
      <main>
        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-gray-200 rounded-xl p-5 transition-all open:shadow-md open:border-yellow-400"
              >
                <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800 group-open:text-yellow-600">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 text-base leading-relaxed text-gray-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="border-t border-gray-200 mt-20" />

        {/* CTA Section */}
        <section className="bg-white py-16 px-6 text-center">
          {/* Icon */}
          <Headphones className="w-12 h-12 mx-auto mb-4 text-yellow-500" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes más preguntas?
          </h2>
          <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
            Si aún tienes dudas sobre nuestros servicios, puedes hablar
            directamente con un asesor que te guiará paso a paso.
          </p>
          <a
            href="https://wa.me/527641028914"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition-transform hover:scale-105 shadow-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Habla con un asesor
          </a>
        </section>
      </main>
    </>
  );
};

export default PreguntasFrecuentesPage;
