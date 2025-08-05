"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export function FixedMenu({ isOpen, setIsOpen }) {
  const menuRef = useClickOutside(() => {
    setIsOpen(false);
  });
  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className={` top-12 right-0 fixed z-50 flex-column bg-background shadow-md  w-64 h-screen  border-l-1 border-t-1 border-primary transition-all transition-discrete duration-150 animate-fade-in-scale`}
        >
          <ul className="w-full">
            <li className="flex items-center gap-2 hover:bg-primary px-3 py-1 w-full hover:text-background text-sm transition-colors transition-discrete animate-fade-in duration-150">
              <HomeIcon className="w-3 hover:text-background" />
              <Link href={"/"} className="w-full">
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
