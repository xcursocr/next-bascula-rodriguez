import { truncateText } from "@/utils/strFuntions";
import Image from "next/image";
import Link from "next/link";

export function CardCategory() {
  // sm:w-[270px] md:w-[330px]
  return (
    <div className="group bg-background border border-foreground/10 hover:border-primary w-[320px] lg:w-[320px] transition-colors transition-discrete duration-150 ease-in-out hover:cursor-pointer">
      <div className="p-8">
        <Link href={"/cateories/slug-category"}>
          <Image
            src={"https://picsum.photos/id/235/1200/400"}
            width={500}
            height={500}
            alt="Balanza"
            className="w-full h-42 object-center object-cover text-green-500"
          />
        </Link>
      </div>
      <div className="px-8">
        <div className="flex justify-center items-center border border-primary/10"></div>
      </div>
      <header className="px-8 pt-6 pb-3">
        <Link href={"/cateories/slug-category"}>
          <span className="font-bold text-primary">Pesaje de laboratorio</span>
        </Link>
      </header>
      <footer className="px-8 pb-10 h-auto">
        <p className="text-foreground/70">
          {truncateText(
            " Balanzas de laboratorio, analíticas, de precisión y micro y ultra micro balanzas, dosificación de polvo y líquidos, analizadores de humedad, pesas ...",
            80
          )}
        </p>
      </footer>
    </div>
  );
}
