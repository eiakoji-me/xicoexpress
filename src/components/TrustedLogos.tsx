"use client";

import Image from "next/image";

const brands = [
  { name: "DHL", src: "/logos/dhl.svg" },
  { name: "UPS", src: "/logos/ups.svg" },
  { name: "JTExpress", src: "/logos/jt_express_logo.svg" },
  { name: "FedEx", src: "/logos/fedex.svg" },
  { name: "Estafeta", src: "/logos/estafeta.svg" },
];

export default function TrustedBrands() {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-8 px-4">
        <h2 className="text-xl font-semibold">
          Trabajamos con los mejores carriers
          <br />
          nacionales e internacionales
        </h2>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-6 px-4">
        {brands.map((brand, i) => (
          <div key={i} className="h-16 w-auto">
            <Image
              src={brand.src}
              alt={brand.name}
              width={120}
              height={64}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
