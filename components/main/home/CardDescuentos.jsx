import Image from "next/image";

export function CardDescuentos() {
  return (
    <div className="z-40 rounded-lg shadow-2xl flex flex-col justify-between items-center bg-[url(https://images.unsplash.com/photo-1629121958394-3be95d8c057c?q=80&w=200&auto=format&fit=crop)] bg-linear-to-t from-sky-500 to-indigo-500hover:shadow-2xl mx-auto sm:-mt-16 p-2 py-6 border border-primary/30 w-48 h-full translate-y-4 hover:translate-y-0 animate-float-out-top duration-500 cursor-pointer">
      <div className="w-full h-42">
        <div className="flex justify-center items-center space-y-4 bg-radial from-secondary to-secondary/60 -mt-10 py-6 rounded-md h-2 text-white dark:text-gray-100">
          <h3 className="font-border font-Oswald font-bold text-8xl text-center">
            10
          </h3>

          <span className="text-background text-xl">%</span>
          <span className="px-1 text-background text-sm">Desc</span>
        </div>
      </div>

      <h3 className="shadow-2xl font-border text-white dark:text-gray-100 text-sm text-center">
        Balanza de Laboratorio
      </h3>
      {/* <Image
        src={"https://picsum.photos/id/300/400/400"}
        width={500}
        height={500}
        alt="Balanza"
        className="w-36 object-center object-cover text-green-500"
      /> */}
    </div>
  );
}
