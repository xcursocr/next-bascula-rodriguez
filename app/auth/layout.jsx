import { CircleChevronLeft, Home } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="top-0 fixed bg-foreground/95 w-full auth-layout">
      <header className="flex justify-center items-center gap-2 h-20 text-background">
        <Link href={"/"}>
          <CircleChevronLeft className="w-10 text-secondary/85 hover:text-secondary/75 transition-colors transition-discrete duration-200 hover:cursor-pointer" />
        </Link>
        <p className="text-fluid text-secondary">Home</p>
      </header>
      <main className="">{children}</main>
    </div>
  );
}
