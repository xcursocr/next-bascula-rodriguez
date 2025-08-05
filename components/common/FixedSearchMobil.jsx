import { useClickOutside } from "@/hooks/useClickOutside";
import { SearchIcon } from "lucide-react";

export function FixedSearchMobil({ isSearch, setIsSearch }) {
  const menuRef = useClickOutside(() => {
    setIsSearch(false);
  });
  return (
    <>
      {isSearch && (
        <form ref={menuRef} className="z-50 px-3 py-2">
          <div className="sm:hidden flex items-center px-3 py-1 border border-primary rounded-lg md:w-[250px] transition-all transition-discrete starting:transition-all starting:transition-discrete animate-fade-in starting:animate-fade-in duration-150 starting:duration-150 ease-in-out starting:ease-in-out">
            <input
              type="text"
              className="bg-transparent outline-none w-full text-foreground/70 placeholder:text-foreground/70 placeholder:text-xs"
              placeholder="Buscar productos..."
            />
            <SearchIcon className="w-4 text-primary" />
          </div>
        </form>
      )}
    </>
  );
}
