"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/content/site";

export default function HoverSwapImage({
  src,
  altSrc,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  src: string;
  altSrc: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={altSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-500 ease-in-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-right text-[9px] leading-tight text-white sm:bottom-3 sm:right-3 sm:text-[10px]">
        {site.heroCredit.name}
        <br />
        {site.heroCredit.affiliation}
      </div>
    </div>
  );
}
