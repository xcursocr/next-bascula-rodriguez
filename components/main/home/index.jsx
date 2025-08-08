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
import { FormContact } from "./FormContact";

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

      <div className="mb-4 px-3 md:px-10">
        <TitleSectionV2 title="Servicio y asistencia" />
        {Array([1, 2, 3, 4].map((item, index) => <CardService key={index} />))}
      </div>

      <div className="my-10"></div>
      {/* hero bg-foreground/95*/}
      <div className="relative h-[350px]">
        <div className="z-10 absolute bg-foreground w-full h-[400px]"></div>
        <div className="z-20 absolute bg-[url(https://picsum.photos/id/112/1200/400)] bg-cover bg-no-repeat bg-center opacity-30 w-full h-[400px]"></div>
        <div className="z-30 absolute py-8 w-full h-[400px] text-background">
          <CardHero className={"fill-background w-32 h-32"} />
        </div>
      </div>
      <div className="my-10"></div>
      {/* form contact */}
      <div className="bg-foreground/5 px-3 md:px-10 py-10">
        <FormContact />
      </div>
    </section>
  );
}
