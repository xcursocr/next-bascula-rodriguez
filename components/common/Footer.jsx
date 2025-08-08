import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { LogoInline } from "../ui/LogoInline";

export function Footer() {
  return (
    <div className="text-center">
      <a
        href="#"
        className="flex justify-center items-center mb-5 font-semibold text-foreground text-2xl"
      >
        {/* <Image
          src="https://www.svgrepo.com/show/499962/music.svg"
          className="mr-3 h-12 sm:h-9"
          alt="Landwind Logo"
          width={48}
          height={48}
        /> */}
        <LogoInline />
        {/* Basculas Rodriguez Nicaragua */}
      </a>

      <span className="block text-foreground text-sm text-center">
        © {new Date().getFullYear()} Basculas Rodriguez Nicaragua™. Todos los
        derechos reservados Web Tecnology Costa Rica{" "}
        <a
          href="https://tailwindcss.com"
          className="text-secondary hover:underline"
        >
          Gonza Technology Costa Rica
        </a>
        .
      </span>

      <ul className="flex justify-center space-x-5 mt-5">
        <li>
          <a href="#" className="text-foreground hover:text-foreground">
            <Facebook className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="#" className="text-foreground hover:text-foreground">
            <Instagram className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="#" className="text-foreground hover:text-foreground">
            <Twitter className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="#" className="text-foreground hover:text-foreground">
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  );
}
