import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ToolConfigurator({
  onSubmit,
}: {
  onSubmit?: (tool: "cotizar" | "rastrear", data: any) => void;
}) {
  const [activeTool, setActiveTool] = useState<"rastrear" | "cotizar">(
    "rastrear"
  );
  const [showResult, setShowResult] = useState(false);

  // Rastrear state
  const [carrier, setCarrier] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");

  // Cotizar state
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);

    if (onSubmit) {
      const payload =
        activeTool === "rastrear"
          ? { carrier, trackingNumber }
          : { origin, destination, length, width, height, weight };

      onSubmit(activeTool, payload);
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded-md">
      {/* Tab Switcher */}
      <div className="flex mb-6">
        <Button
          variant="ghost"
          className={`w-1/2 rounded-none py-3 font-medium ${
            activeTool === "rastrear"
              ? "bg-yellow-400 text-black"
              : "bg-white text-gray-500"
          }`}
          onClick={() => {
            setActiveTool("rastrear");
            setShowResult(false);
          }}
        >
          Rastrear
        </Button>
        <Button
          variant="ghost"
          className={`w-1/2 rounded-none py-3 font-medium ${
            activeTool === "cotizar"
              ? "bg-yellow-400 text-black"
              : "bg-white text-gray-500"
          }`}
          onClick={() => {
            setActiveTool("cotizar");
            setShowResult(false);
          }}
        >
          Cotizar
        </Button>
      </div>

      {/* Dynamic Form */}
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        {activeTool === "rastrear" ? (
          <>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:col-span-2">
              <Select onValueChange={setCarrier}>
                <SelectTrigger className="w-full md:w-1/2 bg-white border border-gray-300">
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
          </>
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
            <Input
              type="number"
              placeholder="Largo (cm)"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Ancho (cm)"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Alto (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Peso (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </>
        )}

        <div className="md:col-span-2 flex justify-end">
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-accent transition-transform hover:scale-105 shadow-md"
          >
            {activeTool === "cotizar" ? "Obtener cotización" : "Rastrear"}
          </Button>
        </div>
      </form>
    </div>
  );
}
