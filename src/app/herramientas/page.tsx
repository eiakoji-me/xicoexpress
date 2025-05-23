"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Placeholder form + result components (to be replaced)
function CotizadorForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="grid gap-4"
    >
      <input type="text" placeholder="Origen" className="border p-2 rounded" />
      <input type="text" placeholder="Destino" className="border p-2 rounded" />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Cotizar
      </button>
    </form>
  );
}

function CotizadorResult() {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      Resultados de cotización
    </div>
  );
}

function RastreadorForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="grid gap-4"
    >
      <input
        type="text"
        placeholder="Número de rastreo"
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Rastrear
      </button>
    </form>
  );
}

function RastreadorResult() {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">Resultado de rastreo</div>
  );
}

import ToolConfigurator from "@/components/herramientas/ToolConfigurator";

export default function HerramientasPage() {
  return (
    <main className="bg-muted min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-black py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Herramientas</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Cotiza tus envíos o rastrea tu paquete fácilmente. Elige una opción
          para comenzar.
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
