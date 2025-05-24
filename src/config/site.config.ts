import {
  ContactInfo,
  CtaButton,
  FooterSection,
  NavLink,
  SocialLink,
} from "./types";

// Header configuration for the site
export const navLinks: NavLink[] = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/contactanos", label: "Contáctanos" },
];

export const ctaButton: CtaButton = {
  label: "Habla con un asesor",
  href: "https://wa.me/527641028914?text=Hola%20XicoExpress%2C%20quiero%20más%20información%20sobre%20sus%20servicios.",
  target: "_blank",
};

// Footer configuration for the site
export const footerLinks: FooterSection[] = [
  {
    title: "Sobre Nosotros",
    links: [
      { label: "Quiénes somos", href: "/nosotros" },
      { label: "Novedades", href: "/novedades" },
      { label: "Contáctanos", href: "/contactanos" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Envíos y Fletes exprés", href: "/servicios/envios" },
      { label: "Compras y Devoluciones", href: "/servicios/compras" },
      { label: "Servicios para Empresas", href: "/servicios/empresas" },
      { label: "Almacenaje y Empaque", href: "/servicios/almacenaje" },
      { label: "Servicios para Gobierno", href: "/servicios/gobierno" },
    ],
  },
  {
    title: "Enlaces",
    links: [
      { label: "Bolsa de trabajo", href: "/trabajo" },
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Política de Privacidad", href: "/politicas/privacidad" },
      {
        label: "Términos y Condiciones",
        href: "/politicas/terminos-condiciones",
      },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Xicoexpress/#",
    show: true,
    iconKey: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xicoexpress/",
    show: true,
    iconKey: "instagram",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/527641028914",
    external: true,
    show: true,
    iconKey: "whatsapp",
  },
  {
    label: "Google",
    href: "https://g.co/kgs/19pehR5",
    show: false,
    iconKey: "google",
  },
  { label: "Youtube", href: "#", show: true, iconKey: "youtube" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@xicoexpress",
    show: true,
    iconKey: "tiktok",
  },
];

export const contactInfo: ContactInfo = {
  address: "Del Gavilán 112-Local B\nXicotepec, Puebla",
  phone: "+52 764 102 8914",
};
