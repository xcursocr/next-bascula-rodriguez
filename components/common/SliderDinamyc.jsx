"use client";

import { allBrands } from "@/data/brands";
import Image from "next/image";
import { useEffect, useState } from "react";

export function SliderDinamyc() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allBrands.length);
    }, 7000); // Cambia de diapositiva cada 7 segundos
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + allBrands.length) % allBrands.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % allBrands.length);
  };
  return (
    <div
      style={{ transform: `translateX(-${currentSlide * 5}%)` }}
      className="flex items-center gap-7 transition-all transition-discrete duration-300"
    >
      {allBrands.map((brand, index) => {
        return (
          <Image
            src={brand.picture}
            key={index}
            width={500}
            height={500}
            alt="Balanza"
            className="rounded-md w-20 h-10 object-center object-cover text-green-500"
          />
        );
      })}
    </div>
  );
}
