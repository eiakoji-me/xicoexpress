"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-20 text-center bg-white">
      <div className="w-128 h-128 relative mb-8 animate-fade-in">
        <Image
          src="/images/xicobot_404.png"
          alt="Xicobot diciendo: ¡Oops! Parece que te perdiste."
          fill
          className="object-contain"
        />
      </div>
      <Link href="/">
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition-transform hover:scale-105 shadow-lg">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
