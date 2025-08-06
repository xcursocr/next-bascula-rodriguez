import { allProducts } from "@/data/products";
import { Carousell } from "./Carousell";
import { CardDescuentos } from "./CardDescuentos";
import { TitleSection } from "@/components/common/TitleSection";
import { CardProduct } from "./CardProduct";
import { SliderDinamyc } from "@/components/common/SliderDinamyc";

export function IndexHome() {
  return (
    <section className="px-3 md:px-10">
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
