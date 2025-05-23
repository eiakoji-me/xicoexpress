"use client";

import { useState } from "react";
import Cotizador from "@/components/herramientas/Cotizador";
import Rastreo from "@/components/herramientas/Rastreo";
import { Button } from "@/components/ui/button";

export default function HerramientasPage() {
  const [activeTool, setActiveTool] = useState<"cotizador" | "rastreo">(
    "cotizador"
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Herramientas</h1>
      <div className="flex gap-4 mb-6">
        <Button
          variant={activeTool === "cotizador" ? "default" : "outline"}
          onClick={() => setActiveTool("cotizador")}
        >
          Cotizador
        </Button>
        <Button
          variant={activeTool === "rastreo" ? "default" : "outline"}
          onClick={() => setActiveTool("rastreo")}
        >
          Rastreo
        </Button>
      </div>

      {activeTool === "cotizador" && <Cotizador />}
      {activeTool === "rastreo" && <Rastreo />}
    </main>
  );
}
