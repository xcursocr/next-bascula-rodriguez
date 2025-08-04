import { Header } from "@/components/common/Header";
import { HeroLogo } from "@/components/main/home/HeroLogo";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="">
        <HeroLogo />
      </div>
      <main className="">{children}</main>
    </div>
  );
}
