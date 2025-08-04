"use client";
import { useTheme } from "@/context/ThemeProvider";
import { themeList } from "@/data/theme";

export function ThemeSelect({ className = "" }) {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className={`bg-primary text-background px-2 py-1 text-xs md:text-md rounded capitalize ${className} w-fit`}
    >
      {themeList.map((t) => (
        <option key={t} value={t}>
          {formatLabel(t)}
        </option>
      ))}
    </select>
  );
}

function formatLabel(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (s) => s.toUpperCase());
}
