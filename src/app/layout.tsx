import "@/styles/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "XicoExpress",
  description: "Envíos y fletes nacionales e internacionales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
