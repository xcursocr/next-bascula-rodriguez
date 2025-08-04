"use client";
import { Logo } from "@/components/ui/Logo";
import { ThemeSelect } from "@/context/SelectTheme";
import useScrollPosition from "@/hooks/ScrollAction";

export function HeroLogo() {
  const scrollPosition = useScrollPosition();
  return (
    <div className={`relative ${scrollPosition < 50 ? "py-10" : ""}`}>
      <Logo />
      <div className="top-1/5 right-1/3 absolute">
        <ThemeSelect />
      </div>
    </div>
  );
}
