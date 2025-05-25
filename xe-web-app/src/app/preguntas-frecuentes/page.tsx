import React from "react";
import { ChevronDown } from "lucide-react";

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
      <div>
        <p>Puedes rastrear tu envío fácilmente siguiendo estos pasos:</p>
        <ol className="list-decimal list-inside mt-2 mx-5 space-y-1 text-gray-700">
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
        <p className="mt-2">
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Preguntas Frecuentes
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-gray-200 rounded-md px-4 py-3 transition-all"
          >
            <summary className="flex justify-between items-center cursor-pointer font-medium text-lg text-gray-800 group-open:text-primary">
              {faq.question}
              <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentesPage;
