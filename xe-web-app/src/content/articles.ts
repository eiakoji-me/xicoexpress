export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  content: string;
  summary: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "expansion-xicoexpress-alianzas-empleo",
    title:
      "XicoExpress se transforma: inversión, alianzas y nuevas oportunidades",
    description:
      "Lanzamos una nueva etapa para expandir nuestros servicios, generar empleo y fortalecer el ecosistema logístico.",
    image: "/images/content/articles/flota_xicoexpress.jpg",
    date: "2025-05-25",
    featured: true,
    summary:
      "Anunciamos una nueva etapa de inversión y expansión para XicoExpress, con nuevos servicios, alianzas estratégicas y oportunidades de empleo en ecommerce y logística.",
    content: `Estamos viviendo un momento clave en la evolución de XicoExpress. Con el respaldo de nuevos aliados y una visión de largo plazo, hemos iniciado una fase de expansión que contempla:

- La implementación de nuevos servicios especializados como el fulfillment multicanal y la recolección programada en zonas estratégicas.
- Inversiones en tecnología y procesos para mejorar la trazabilidad, la velocidad de entrega y la experiencia del cliente.
- Alianzas con plataformas de ecommerce, empresas logísticas y entidades locales para consolidar una red eficiente y sostenible.
- La creación de empleos locales en áreas como almacenamiento, transporte, atención al cliente y tecnología.

Este esfuerzo busca posicionar a XicoExpress como un actor clave en la transformación logística de nuestra región, y como un puente para que más personas y negocios accedan a las oportunidades del comercio digital.

Invitamos a emprendedores, organizaciones y gobiernos locales a colaborar con nosotros en este proyecto de impacto real y duradero.`,
  },
  {
    id: "conectividad-rural-xicoexpress",
    title: "Ampliamos nuestra cobertura en la zona",
    description:
      "Llevamos envíos a zonas con poca cobertura mediante motos y unidades ligeras.",
    image: "/images/content/articles/flota_xicoexpress_motos.png",
    date: "2025-05-25",
    content: `Sabemos que muchas comunidades en nuestra región enfrentan barreras logísticas por falta de rutas de reparto y servicios de paquetería confiables. En XicoExpress queremos cambiar esa realidad.

Estamos implementando un plan de conectividad rural que incluye la creación de una flota de motocicletas y vehículos ligeros para extender nuestras rutas a localidades con poca o nula cobertura de otros servicios logísticos.

Esta estrategia nos permitirá ofrecer entregas más rápidas, recolecciones programadas y habilitar puntos de entrega en colaboración con tiendas y comercios rurales.

Nuestro compromiso es llegar a donde otros no llegan, creando soluciones accesibles y sostenibles para quienes más lo necesitan.`,
    summary:
      "Implementamos una flota para conectar zonas rurales y ampliar nuestra cobertura con rutas eficientes y adaptadas.",
  },
  {
    id: "fulfillment-ecommerce-xicoexpress",
    title: "Centro de Fulfillment para ecommerce en crecimiento",
    description:
      "Nos preparamos para manejar operaciones logísticas a gran escala para tiendas en línea.",
    image: "/images/content/articles/fulfillment-center-xicoexpress.png",
    date: "2025-05-25",
    content: `En respuesta al crecimiento del comercio electrónico en México, en XicoExpress estamos desarrollando un centro de fulfillment diseñado para apoyar a negocios que venden en plataformas como Mercado Libre, Amazon, Walmart, Liverpool y más.

Nuestro equipo estará conformado por personal capacitado en manejo de pedidos, empaquetado profesional, control de inventario y procesos de última milla. Todo esto respaldado por nuestras capacidades logísticas, rutas optimizadas y soluciones de entrega flexibles.

Con esta iniciativa buscamos convertirnos en un socio estratégico para negocios que desean escalar sin preocuparse por la operación logística, desde la recepción de pedidos hasta la entrega final.

Estamos construyendo una red que facilite el crecimiento de los vendedores locales, con infraestructura adaptada a sus necesidades.`,
    summary:
      "XicoExpress prepara un centro de fulfillment con personal especializado para impulsar operaciones en plataformas como Mercado Libre y Amazon.",
  },
  {
    id: "impulso-ecommerce-negocios-locales",
    title: "Desarrollo de negocios",
    description:
      "Apoyamos a productores y emprendedores en su transformación digital.",
    image: "/images/content/articles/xicoexpress_empaques.png",
    date: "2025-05-25",
    content: `En XicoExpress creemos en el potencial de nuestros emprendedores y productores locales. Por eso, lanzamos una nueva iniciativa para apoyar a negocios en los sectores artesanal, agrícola e industrial que desean vender en línea pero no cuentan con los medios técnicos para hacerlo.

A través de este programa, ofreceremos acompañamiento en el procesamiento y empaquetado de productos, la publicación en plataformas de ecommerce, estrategias de marketing digital, y el cumplimiento de pedidos con soluciones logísticas adaptadas.

Nuestro objetivo es conectar lo hecho en nuestra región con clientes en todo México y el extranjero, impulsando la economía local mediante herramientas accesibles y soporte personalizado.

Si tienes un negocio o conoces a alguien que podría beneficiarse, contáctanos. ¡Queremos crecer contigo!`,
    summary:
      "Nueva iniciativa para que negocios locales vendan en línea con apoyo logístico, técnico y comercial de XicoExpress.",
  },
];
