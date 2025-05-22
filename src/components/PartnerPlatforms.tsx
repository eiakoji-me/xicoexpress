// src/components/PartnerPlatforms.tsx
import { Button } from "@/components/ui/button";

export default function PartnerPlatforms() {
  return (
    <section className="bg-background py-16 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Tu aliado para envíos de Shein, Temu, Amazon y más
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Ofrecemos un servicio confiable y eficiente para gestionar tus compras
          en línea, asegurándonos de que tus paquetes lleguen a tiempo y en
          perfectas condiciones. Confía en nosotros para ser tu socio logístico
          de confianza.
        </p>
        <Button className="bg-primary text-primary-foreground px-6 py-2 text-sm  hover:bg-accent transition-transform hover:scale-105 shadow-md">
          Más información
        </Button>
      </div>
    </section>
  );
}