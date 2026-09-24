"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AlternatingCoverImage({
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
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setShowAlt((v) => !v);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover transition-opacity duration-700 ease-in-out ${
          showAlt ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={altSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-700 ease-in-out ${
          showAlt ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
