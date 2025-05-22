"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function QuoteTracker() {
  const [activeTab, setActiveTab] = useState<"cotizar" | "rastrear">("cotizar");

  return (
    <section className="bg-muted py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Cotiza y rastrea tus envíos
        </h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex">
            <button
              className={`w-1/2 py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === "cotizar"
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-500"
              }`}
              onClick={() => setActiveTab("cotizar")}
            >
              Cotizar
            </button>
            <button
              className={`w-1/2 py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === "rastrear"
                  ? "bg-gray-200 text-black"
                  : "bg-white text-gray-500"
              }`}
              onClick={() => setActiveTab("rastrear")}
            >
              Rastrear
            </button>
          </div>

          <form className="p-6 grid gap-4 md:grid-cols-2">
            {activeTab === "cotizar" ? (
              <>
                <input
                  type="text"
                  placeholder="Código postal de origen"
                  className="border border-gray-300 p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Código postal de destino"
                  className="border border-gray-300 p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Tipo de envío"
                  className="border border-gray-300 p-3 rounded md:col-span-2"
                />
              </>
            ) : (
              <input
                type="text"
                placeholder="Número de rastreo"
                className="border border-gray-300 p-3 rounded md:col-span-2"
              />
            )}

            <div className="md:col-span-2 flex justify-end">
              <Button className="bg-primary text-primary-foreground hover:bg-accent transition-transform hover:scale-105 shadow-md">
                {activeTab === "cotizar" ? "Obtener cotización" : "Rastrear"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
