import Image from "next/image";

export function Carousell() {
  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-12">
      <div className="relative col-span-8 bg-primary h-12/6">
        <Image
          src={"/bg-1.png"}
          alt="carousell"
          width={1250}
          height={500}
          className="w-full h-full object-cover"
        />
        <div className="top-1/3 left-1/12 absolute bg-primary/10 p-4 w-96 text-background">
          <h2>Titulo</h2>
          <p>Decripcion</p>
          <button>Ver mas</button>
        </div>
      </div>
      <div className="col-span-4 bg-secondary px-3">
        <h1>Ofertas</h1>
      </div>
    </div>
  );
}
