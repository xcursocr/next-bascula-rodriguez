import { MessageSquareWarning } from "lucide-react";
import Link from "next/link";

export function TitleSection({
  icono = false,
  title,
  titleBtn = "Ver más ...",
  href = "#",
}) {
  return (
    <div className="flex flex-col px-3 md:px-10">
      <div className="flex justify-start items-center gap-3">
        {icono && <MessageSquareWarning className="w-4 text-primary" />}
        <h2 className="font-black text-primary/85 text-xs uppercase">
          ¡ {title} !
        </h2>
        <Link
          href={href}
          className="text-secondary text-xs hover:underline cursor-pointer"
        >
          {titleBtn}
        </Link>
      </div>
      <div className="shadow-md my-2 border-foreground/20 border-t-[0.2px]"></div>
    </div>
  );
}
