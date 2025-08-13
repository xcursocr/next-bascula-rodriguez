import { Footer } from "@/components/common/Footer";
import { HeaderNav } from "@/components/common/HeaderNav";
import { HeroLogo } from "@/components/main/home/HeroLogo";
import { getSession } from "@/lib/getSession";

export default async function MainLayout({ children }) {
  const session = await getSession();

  return (
    <div>
      <header>
        <HeaderNav session={session} />
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
