"use client";
import { mainMenu } from "@/data/mainMenu";
import { useClickOutside } from "@/hooks/useClickOutside";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function FixedMenu({ isOpen, setIsOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const menuRef = useClickOutside(() => {
    setIsOpen(false);
  });

  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      {isOpen && (
        <div
          ref={menuRef}
          className={` top-12 right-0 fixed z-50 flex-column bg-background shadow-md  w-64 h-screen  border-l-1 border-t-1 border-primary transition-all transition-discrete duration-150 animate-fade-in-scale`}
        >
          <ul className="w-full">
            {mainMenu.map((item) => (
              <li
                key={item.href}
                className={`flex items-center gap-2 p-4 hover:bg-foreground/2 transition-all transition-discrete ease-in duration-200 ${
                  item.href === pathname
                    ? "bg-foreground/4 transition-all transition-discrete ease-in duration-200"
                    : ""
                } ${
                  item.submenu
                    ? "cursor-pointer flex-col items-start transition-all transition-discrete ease-in duration-200"
                    : ""
                }`}
              >
                <div
                  className={`flex gap-3 transition-all transition-discrete ease-in duration-200`}
                >
                  {item.submenu && (
                    <ChevronDown
                      onClick={() => {
                        if (item.submenu) {
                          setOpenSubmenu(
                            openSubmenu === item.href ? null : item.href
                          );
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    />
                  )}

                  <Link
                    href={`${item.href}`}
                    className="flex items-center gap-2"
                  >
                    <div className="w-fit h-fit">{item.icon}</div>
                    {item.label}
                  </Link>
                </div>
                {item.submenu && openSubmenu === item.href && (
                  <ul className="bg-foreground/3 shadow-sm mt-2 rounded-md w-full transition-all transition-discrete duration-200 ease-in">
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem.href}
                        className="flex items-center hover:bg-foreground/2 p-2 transition-all transition-discrete duration-200 ease-in"
                      >
                        <Link
                          href={`${item.href}/${subItem.href}`}
                          className="flex items-center gap-2"
                        >
                          <div className="w-fit h-fit">{subItem.icon}</div>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
