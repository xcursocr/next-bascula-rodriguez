import { allProducts } from "@/data/products";
import { Carousell } from "./Carousell";
import { CardDescuentos } from "./CardDescuentos";
import { TitleSection } from "@/components/common/TitleSection";
import { CardProduct } from "./CardProduct";
import { SliderDinamyc } from "@/components/common/SliderDinamyc";
import { CardCategory } from "./CardCategory";
import { TitleSectionV2 } from "@/components/common/TitleSectionV2";
import { CardService } from "./CardService";
import { CardHero } from "./CardHero";

export function IndexHome() {
  return (
    <section className="">
      <div className="">
        <Carousell products={allProducts} />
      </div>
      <div className="flex sm:flex-row flex-col gap-6 px-6 max-w-3xl">
        <CardDescuentos />
        <CardDescuentos />
        <CardDescuentos />
      </div>
      <TitleSection title={"Descubre lo nuevo"} icono={true} />
      {/* ultimos 4 o 6 productos agregados */}
      <div className="flex justify-center gap-2 mx-auto w-[250px] sm:w-[500px] md:w-5xl overflow-x-scroll custom-scroll">
        {allProducts.map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
      {/* marcas */}
      <div className="bg-background shadow-xl mx-auto my-8 p-3 md:px-10 border-1 border-foreground/5 max-w-5xl overflow-hidden">
        <SliderDinamyc />
      </div>
      {/* categorias */}
      <div className="bg-foreground/2 px-20 py-10">
        <TitleSectionV2 />
        <div className="px-3 md:px-10">
          <div className="flex flex-col justify-center items-center">
            <div className="flex md:flex-row flex-col gap-3 md:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              <CardCategory />
              <CardCategory />
              <CardCategory />
              <CardCategory />
            </div>
          </div>
        </div>
      </div>
      {/* servicios */}
      <div className="bg-background px-20 py-10">
        <TitleSectionV2 title="Servicio y asistencia" />
        <div className="px-3 md:px-10">
          <div className="flex flex-col justify-start items-center gap-4">
            {Array(
              [1, 2, 3, 4].map((item, index) => <CardService key={index} />)
            )}
          </div>
        </div>
      </div>
      {/* hero bg-foreground/95*/}
      <div className="relative">
        <div className="z-10 absolute bg-[url(https://picsum.photos/id/112/1200/400)] bg-cover bg-no-repeat bg-center opacity-60 w-full h-[400px]">
          <div className="px-20 py-10 text-background">
            <CardHero />
          </div>
        </div>
        <div class="absolute bg-black w-full h-[400px]"></div>
      </div>
      <div className="my-20">
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <h1>Home page</h1>
      </div>
    </section>
  );
}
