import { Footer } from "@/components/common/Footer";
import { HeaderNav } from "@/components/common/HeaderNav";
import { HeroLogo } from "@/components/main/home/HeroLogo";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <HeaderNav />
      </header>
      <div className="">
        <HeroLogo />
      </div>
      <main className="">{children}</main>
      <footer className="bg-background">
        <div className="mx-auto px-4 py-8 max-w-5xl">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
