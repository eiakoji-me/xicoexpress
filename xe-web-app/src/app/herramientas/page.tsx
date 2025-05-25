"use client";

import ToolConfigurator from "@/components/herramientas/ToolConfigurator";

export default function HerramientasPage() {
  return (
    <main className="bg-muted min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Herramientas</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Cotiza tus envíos o rastrea tu paquete fácilmente.
        </p>
      </section>

      {/* Configurator + Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <ToolConfigurator
          onSubmit={(tool, data) => {
            console.log("Tool submitted:", tool);
            console.log("Payload:", data);
          }}
        />
      </section>
    </main>
  );
}
