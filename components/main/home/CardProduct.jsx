import {
  HeartIcon,
  Link as Compartir,
  ShoppingBag,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { capitalizeFirstLetter, truncateText } from "@/utils/strFuntions";
import Link from "next/link";

export function CardProduct({ product, width = "250px" }) {
  console.log(product);
  return (
    <div
      className={`group  animate-fade-in flex flex-col justify-between hover:shadow-2xl border border-foreground/10  w-[${width}] transition-all transition-discrete duration-300 ease-in-out cursor-pointer`}
    >
      <div className="flex flex-col justify-center items-center group-hover:opacity-75 group-hover:transition-all group-hover:transition-discrete group-hover:duration-300 group-hover:ease-in-out">
        <Link href={"/"}>
          <Image
            src={product.imageUrl[0]}
            width={500}
            height={500}
            alt="Balanza"
            className="w-full h-[200px] object-center object-cover text-green-500"
          />
        </Link>
      </div>
      <div className="space-y-3 p-3">
        <Link href={"/"}>
          <h4 className="font-bold text-fluid text-primary hover:text-secondary">
            {capitalizeFirstLetter(product.name)}
          </h4>
        </Link>
        <p className="mt-5 text-fluid">
          {capitalizeFirstLetter(truncateText(product.description, 120))}
        </p>
      </div>
      <div className="flex items-center bg-foreground/5">
        <div className="flex justify-start items-center gap-1 hover:bg-foreground/10 p-1 w-full hover:text-foreground/300">
          <ShoppingCart className="w-4" />
          <span className="w-full text-fluid">Comprar</span>
        </div>
        <div className="flex justify-center items-center hover:bg-foreground/10 p-1 px-2 border-foreground/20 border-l w-32 hover:text-foreground/300">
          <HeartIcon className="w-4" />
        </div>
        <div className="flex justify-center items-center hover:bg-foreground/10 p-1 px-2 border-foreground/20 border-l w-32 hover:text-foreground/300">
          <Compartir className="w-4" />
        </div>
      </div>
    </div>
  );
}
