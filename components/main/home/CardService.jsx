"use client";
import { truncateText } from "@/utils/strFuntions";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardService() {
  return (
    <div className="mx-auto mt-5 max-w-md sm:max-w-5xl">
      <div className="relative flex sm:flex-row flex-col sm:justify-start items-center gap-3 bg-background border border-foreground/30 rounded-xl overflow-hidden">
        <div className="sm:relative flex-shrink-0 w-full sm:w-32 h-32">
          <Image
            className="top-0 left-0 sm:absolute w-full h-full object-center object-cover transition duration-50"
            loading="lazy"
            src="https://picsum.photos/id/500/1200/400"
            alt="image-service"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col sm:items-start gap-2 p-2 text-center sm:text-start">
          <p className="font-bold text-xl">Post title</p>

          <p className="text-foreground/75">
            Description of your post/article, Description of your post/article,
          </p>

          <Link
            className="top-6 right-6 absolute hover:bg-secondary active:bg-primary/50 px-6 py-2 border border-primary rounded focus:outline-none focus:ring min-w-[120px] max-w-[120px] text-background sm:text-foreground hover:text-background text-center"
            href="/"
          >
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
}
