import Image from "next/image";

export function CardCategory() {
  return (
    <div className="z-40 flex flex-col items-center space-y-3 bg-background/95 hover:shadow-2xl mx-auto sm:-mt-16 p-2 py-6 border border-primary/30 w-48 h-full translate-y-4 hover:translate-y-0 animate-float-out-top duration-500 cursor-pointer">
      <Image
        src={"/next.svg"}
        width={500}
        height={500}
        alt="Balanza"
        className="w-10 h-10 object-center object-cover text-red-500"
      />

      <h3 className="text-sm text-center">Balanza de Laboratorio</h3>
    </div>
  );
}
