import { SearchIcon } from "lucide-react";

export function SearchMain() {
  return (
    <form className="">
      <div className="hidden sm:flex items-center gap-5 px-5 md:py-1 lg:py-1.5 border border-primary rounded-lg w-full md:w-[350px] lg:w-[400px]">
        <input
          type="text"
          className="bg-transparent outline-none w-full text-foreground placeholder:text-foreground placeholder:text-sm"
          placeholder="Buscar productos..."
        />
        <SearchIcon className="w-4 text-primary" />
      </div>
    </form>
  );
}
