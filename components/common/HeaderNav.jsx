"use client";
import {
  CircleChevronDown,
  CircleChevronUp,
  LogIn,
  LogOut,
  Menu,
  MenuSquare,
  Search,
  User2,
} from "lucide-react";
import { SearchMain } from "../main/home/SearchMain";
import { ThemeSelect } from "@/context/SelectTheme";
import { FixedMenu } from "./FixedMenu";
import { useState } from "react";
import { FixedSearchMobil } from "./FixedSearchMobil";
import { LogoInline } from "../ui/LogoInline";
import useScrollPosition from "@/hooks/ScrollAction";
import { LogoutButton } from "../auth/LogoutButton";
import Link from "next/link";

export function HeaderNav({ session }) {
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
          <div className="flex items-center gap-2">
            <LogoInline />
            <div className="hidden sm:block">
              <div
                className="flex items-center gap-2 text-primary hover:text-secondary hover:scale-105 transition-all duration-150 hover:cursor-pointer"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {isOpen ? (
                  <CircleChevronUp className="w-4" />
                ) : (
                  <CircleChevronDown className="w-4" />
                )}
                <h2>
                  <span className="font-semibold text-xs">
                    {isOpen ? "Cerrar Menu" : "Ver Menu"}
                  </span>
                </h2>
              </div>
            </div>
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

            {session ? (
              <p className="hidden md:block text-sm">Hola, {session.name}</p>
            ) : (
              ""
            )}

            {/* <User2 className="w-4 text-primary" /> */}
            <ThemeSelect />

            {session ? (
              <LogoutButton />
            ) : (
              <Link href="/auth/login">
                <User2 className="w-4 text-primary hover:text-primary/75 transition-colors transition-discrete duration-300 hover:cursor-pointer" />
              </Link>
            )}

            <Menu
              className="sm:hidden w-4 text-primary cursor-pointer"
              onClick={(e) => {
                setIsOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
        <FixedMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <FixedSearchMobil isSearch={isSearch} setIsSearch={setIsSearch} />
      </div>
    </>
  );
}
