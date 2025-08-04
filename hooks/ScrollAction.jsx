"use client";
import { useState, useEffect } from "react";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Establece posición inicial si ya hay scroll
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;

/**
 * 
 * USO
 * const scrollPosition = ScrollAction(); // <-- usa el hook aquí
 *  <div
              className={`transition-all duration-300 ${
                scrollPosition < 200 ? "lg:fixed lg:z-30 lg:right-10" : `hidden`
              }
            `}
            >
              <AlertMessageHome />
              <ContactForm />
              </div>
 */
