import {
  HeartIcon,
  Link,
  ShoppingBag,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { capitalizeFirstLetter, truncateText } from "@/utils/strFuntions";

export function CardProduct() {
  return (
    <div className="group flex flex-col justify-between hover:shadow-2xl border border-foreground/10 w-[270px] h-[371px] transition-all transition-discrete duration-300 ease-in-out cursor-pointer">
      <div className="flex flex-col justify-center items-center group-hover:opacity-75 group-hover:transition-all group-hover:transition-discrete group-hover:duration-300 group-hover:ease-in-out">
        <Image
          src={"https://picsum.photos/id/325/400/300"}
          width={500}
          height={500}
          alt="Balanza"
          className="w-full object-center object-cover text-green-500"
        />
      </div>
      <div className="space-y-3 p-3">
        <h4 className="font-bold text-[13px] text-primary hover:text-secondary">
          {capitalizeFirstLetter(
            "PC-2000D PISTOLA DE CALOR PARA PLÁSTICO TERMOENCOGIBLE DE 2000W DE POTENCIA"
          )}
        </h4>
        <p className="text-[12px]">
          {capitalizeFirstLetter(
            truncateText(
              " PFS-100 Selladora de Impulso Manual con Chasis de Aluminio / Sello Ancho: 2mm - Largo: 100mm o 4' Pulgadas DESCRIPTION",
              120
            )
          )}
        </p>
      </div>
      <div className="flex items-center bg-foreground/5">
        <div className="flex justify-start items-center gap-1 hover:bg-foreground/10 p-1 w-full hover:text-foreground/300">
          <ShoppingCart className="w-4" />
          <span className="w-full text-xs">Comprar</span>
        </div>
        <div className="flex justify-center items-center hover:bg-foreground/10 p-1 px-2 border-foreground/20 border-l w-32 hover:text-foreground/300">
          <HeartIcon className="w-4" />
        </div>
        <div className="flex justify-center items-center hover:bg-foreground/10 p-1 px-2 border-foreground/20 border-l w-32 hover:text-foreground/300">
          <Link className="w-4" />
        </div>
      </div>
    </div>
  );
}
