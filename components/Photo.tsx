import Image from "next/image";
import { site } from "@/content/site";

export default function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  showCredit = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showCredit?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading="eager"
        className="object-cover"
      />
      {showCredit && (
        <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-right text-[9px] leading-tight text-white sm:bottom-3 sm:right-3 sm:text-[10px]">
          {site.heroCredit.name}
          <br />
          {site.heroCredit.affiliation}
        </div>
      )}
    </div>
  );
}
