"use client";
import { Menu, Search, User2 } from "lucide-react";
import { SearchMain } from "../main/home/SearchMain";
import { ThemeSelect } from "@/context/SelectTheme";
import { FixedMenu } from "./FixedMenu";
import { useState } from "react";
import { FixedSearchMobil } from "./FixedSearchMobil";
import { LogoInline } from "../ui/LogoInline";
import useScrollPosition from "@/hooks/ScrollAction";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <>
      <div
        className={`${
          scrollPosition > 50
            ? "fixed top-0 w-full bg-background z-50"
            : "hidden"
        } `}
      >
        <div
          className={` flex justify-between items-center shadow-sm px-3 md:px-10 py-2 transition-all transition-discrete duration-150 animate-fade-in-scale`}
        >
          {/* logo inline*/}
          <div className="">
            <LogoInline />
          </div>
          {/* search */}
          <div className="">
            <SearchMain />
          </div>
          {/* profile */}
          <div className="flex justify-between items-center gap-2">
            <Search
              className="sm:hidden w-4 text-primary cursor-pointer"
              onClick={(e) => {
                setIsSearch((prev) => !prev);
              }}
            />
            <User2 className="w-4 text-primary" />
            <ThemeSelect />
            <Menu
              className="sm:hidden w-4 text-primary cursor-pointer"
              onClick={(e) => {
                setIsOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
      <FixedMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <FixedSearchMobil isSearch={isSearch} setIsSearch={setIsSearch} />
    </>
  );
}
