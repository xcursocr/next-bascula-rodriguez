import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export function CardHero({ className }) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide-scale-icon lucide lucide-scale ${className}`}
      >
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
      <div className="w-64 md:w-3xl">
        <h1 className="font-bold md:font-stretch-extra-expanded md:text-3xl text-center italic text-wrap">
          Brindamos calidad y soluciones integrales en equipos de pesaje y
          mantenimiento
        </h1>
      </div>
      <div className="p-6 w-72 max-w-72">
        <Link href={"/"} className="">
          <button className="flex justify-center items-center gap-3 bg-transparent p-4 border-2 border-secondary hover:border-background rounded-md w-full transition-all transition-discrete duration-300 ease-in hover:cursor-pointer hover:fade">
            <span className="tracking-wide h1-fluid">Conócenos</span>
            <ChevronRightIcon className="w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
