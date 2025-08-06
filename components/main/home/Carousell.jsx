"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Carousell({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-avance del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 7000); // Cambia de diapositiva cada 7 segundos
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      // style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {products.map((s, index) => {
          return (
            <div
              key={index}
              className="md:static relative flex md:flex-row flex-col flex-shrink-0 justify-between w-full transition-transform duration-700 ease-in-out"
            >
              <div className="relative p-4 md:w-3xl lg:w-6xl">
                <Image
                  src={s.imageUrl[0]}
                  alt={s.name}
                  width={1250}
                  height={500}
                  className="w-full h-80 object-center object-cover"
                />

                <div className="right-6 bottom-6 absolute flex justify-between gap-5 bg-background shadow-lg p-2 rounded-md w-fit">
                  <ChevronLeft
                    onClick={goToPrevious}
                    className="text-foreground hover:text-foreground/70 transition-all transition-discrete animate-fade-in ease-in-out delay-150 cursor-pointer"
                  />
                  <ChevronRight
                    onClick={goToNext}
                    className="text-foreground hover:text-foreground/70 transition-all transition-discrete animate-fade-in ease-in-out delay-150 cursor-pointer"
                  />
                </div>
              </div>

              <div
                className={`top-5 sm:left-6 left-3 md:static absolute p-4 md:w-md `}
              >
                <div className="flex flex-col justify-between items-center gap-3 bg-background shadow-lg mx-auto p-2 w-56 sm:w-64 lg:w-full h-full text-foreground">
                  <h2 className="font-Montserrat font-bold text-foreground text-md md:text-xl uppercase">
                    {s.name}
                  </h2>
                  <p className="text-sm text-start">{s.description}</p>
                  <button className="bg-primary hover:bg-primary/80 shadow-md px-4 py-2 rounded-sm font-Montserrat text-background transition-all transition-discrete animate-fade-in-scale duration-150 ease-in-out cursor-pointer">
                    Ver mas
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
