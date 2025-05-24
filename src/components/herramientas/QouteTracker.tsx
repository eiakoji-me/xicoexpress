"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuoteTracker() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"rastrear" | "cotizar">(
    "rastrear"
  );
  const [selectedCarrier, setSelectedCarrier] = useState<string>("");
  const [trackingNumber, setTrackingNumber] = useState<string>("");

  // Cotizar fields
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("tab", activeTab);

    if (activeTab === "rastrear") {
      if (selectedCarrier) params.set("carrier", selectedCarrier);
      if (trackingNumber) params.set("tracking", trackingNumber);
    } else {
      if (origin) params.set("origin", origin);
      if (destination) params.set("destination", destination);
    }

    router.push(`/herramientas?${params.toString()}`);
  };

  return (
    <section className="bg-muted py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          Cotiza y rastrea tus envíos
        </h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Tab Switcher */}
          <div className="flex">
            <Button
              variant="ghost"
              className={`w-1/2 rounded-none py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === "rastrear"
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-gray-500"
              }`}
              onClick={() => setActiveTab("rastrear")}
            >
              Rastrear
            </Button>
            <Button
              variant="ghost"
              className={`w-1/2 rounded-none py-3 font-medium text-sm md:text-base transition-colors ${
                activeTab === "cotizar"
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-gray-500"
              }`}
              onClick={() => setActiveTab("cotizar")}
            >
              Cotizar
            </Button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 grid gap-4 md:grid-cols-2"
          >
            {activeTab === "rastrear" ? (
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:col-span-2">
                <Select onValueChange={setSelectedCarrier}>
                  <SelectTrigger className="w-full md:w-1/2">
                    <SelectValue placeholder="Selecciona la paquetería" />
                  </SelectTrigger>
                  <SelectContent className="w-full bg-white">
                    <SelectItem value="fedex">FedEx</SelectItem>
                    <SelectItem value="dhl">DHL</SelectItem>
                    <SelectItem value="estafeta">Estafeta</SelectItem>
                    <SelectItem value="redpack">Redpack</SelectItem>
                    <SelectItem value="99minutos">99 Minutos</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="text"
                  placeholder="Número de rastreo"
                  className="w-full md:w-1/2"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder="Código postal de origen"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Código postal de destino"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <Input type="number" placeholder="Largo (cm)" min={0} />
                <Input type="number" placeholder="Ancho (cm)" min={0} />
                <Input type="number" placeholder="Alto (cm)" min={0} />
                <Input type="number" placeholder="Peso (kg)" min={0} />
              </>
            )}

            <div className="md:col-span-2 flex justify-end">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-accent transition-transform hover:scale-105 shadow-md"
              >
                {activeTab === "cotizar" ? "Obtener cotización" : "Rastrear"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
