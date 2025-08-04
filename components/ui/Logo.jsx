import Image from "next/image";

export function Logo() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center my-8">
        <Image
          src="/logo-icon.svg"
          alt="logo"
          width={60}
          height={60}
          className=""
        />
        <div className="relative">
          <Image
            src="/logo-br.svg"
            alt="logo"
            width={90}
            height={90}
            className=""
          />
          {/* <Image
            src="/logo-title.svg"
            alt="logo"
            width={90}
            height={90}
            className="top-2 -right-24 absolute"
          /> */}
          <p className="hidden md:block top-2 -right-20 absolute font-Oswald font-medium text-md">
            BÁSCULAS
          </p>
          <p className="hidden md:block top-6 -right-22 absolute font-Oswald font-medium text-md">
            RODRÍGUEZ
          </p>
          {/* <Image
            src="/logo-slogan.svg"
            alt="logo"
            width={90}
            height={90}
            className="-right-24 bottom-8 absolute"
          /> */}
          <p className="hidden md:block -right-26 bottom-6 absolute font-Ephesis font-semibold text-md underline -rotate-6">
            Calidad Que Pesa
          </p>
        </div>
        <p className="-bottom-4 absolute font-Ephesis font-semibold md:text-[10px] text-xs">
          Servicios profesionales | Basculas Rodriguez
        </p>
      </div>
    </div>
  );
}
