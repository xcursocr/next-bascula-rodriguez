export function TitleSectionV2({ title = "Encuentre su solución" }) {
  return (
    <div className="mb-14 px-3 md:px-10">
      <div className="flex flex-col items-center py-[1px] border-secondary border-t-6 md:w-fit">
        <h2 className="py-3 font-Oswald font-bold text-primary md:text-3xl h1-fluid text">
          {title}
        </h2>
      </div>
    </div>
  );
}
