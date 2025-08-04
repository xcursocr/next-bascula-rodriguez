"use client";
import { themeList } from "@/data/theme";
import { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Cargar desde localStorage o prefers-color-scheme
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved && themeList.includes(saved)) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const fallbackTheme = prefersDark ? "dark" : "light";
      setTheme(fallbackTheme);
      localStorage.setItem("theme", fallbackTheme);
    }
  }, []);

  // Aplicar data-theme y guardar en localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="bg-background min-h-screen text-foreground transition-colors duration-300">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
