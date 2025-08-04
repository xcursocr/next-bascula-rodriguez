import Image from "next/image";

export function LogoInline() {
  return (
    <div className="flex flex-row items-center">
      <Image
        src={"/logo-icon.svg"}
        alt="logo"
        width={400}
        height={400}
        className="w-6"
      />
      <Image
        src={"/logo-br.svg"}
        alt="logo"
        width={400}
        height={400}
        className="w-8"
      />
      <div className="mx-3">
        <h1 className="font-Oswald text-sm">Basculas Rodriguez</h1>
        <h2 className="font-Ephesis font-semibold text-sm">
          Calidad que pesa...
        </h2>
      </div>
    </div>
  );
}
