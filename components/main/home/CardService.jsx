"use client";
import { truncateText } from "@/utils/strFuntions";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardService() {
  return (
    <div className="group bg-foreground/2 border border-foreground/10 hover:border-primary w-full group:transition-colors group:transition-discrete group:duration-150 group:ease-in-out">
      <div className="flex flex-row justify-between items-center p-4">
        <div className="w-[40%]">
          <Link href={"/cateories/slug-category"}>
            <Image
              src={"https://picsum.photos/id/235/1200/400"}
              width={500}
              height={500}
              alt="Balanza"
              className="w-full h-58 object-center object-cover text-green-500"
            />
          </Link>
        </div>
        <div className="relative ps-20 pe-10 w-[60%]">
          <Link href={"/cateories/slug-category"}>
            <span className="mx-2 font-bold text-[16px] text-primary">
              Instalación, cualificación, instalación, configuración
            </span>
          </Link>
          <ul className="space-y-1 py-2">
            {Array(
              [1, 2, 3, 4].map((i, index) => (
                <li key={index} className="flex justify-start text-[14px]">
                  <Dot />
                  <span>
                    {truncateText(
                      "Operaciones comerciales ininterrumpidas",
                      60
                    )}
                  </span>
                </li>
              ))
            )}
          </ul>
          <div className="bottom-0 absolute hover:bg-foreground/5 mx-2 p-2 border-[1px] border-primary font-black text-fluid text-primary transition-all transition-discrete duration-200 ease-in-out">
            <Link href={"/cateories/slug-category"}>Más información</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
