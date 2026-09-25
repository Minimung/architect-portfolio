"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Photo from "./Photo";
import PlaceholderImage from "./PlaceholderImage";
import { site } from "@/content/site";

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

function GalleryThumbnail({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!isVideo(src)) {
    return (
      <Photo
        src={src}
        alt={alt}
        className="aspect-[4/3]"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
    );
  }

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-neutral-800"
      onMouseEnter={() => {
        videoRef.current?.play();
        setPlaying(true);
      }}
      onMouseLeave={() => {
        const video = videoRef.current;
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
        setPlaying(false);
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      {!playing && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-neutral-900">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      } else if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, images.length]);

  if (images.length === 0) {
    return (
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <PlaceholderImage label={`${alt} — 02`} className="aspect-[4/3]" index={1} />
        <PlaceholderImage label={`${alt} — 03`} className="aspect-[4/3]" index={2} />
      </div>
    );
  }

  const activeSrc = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={`${i}-${src}`}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View larger ${isVideo(src) ? "video" : "image"} ${i + 2}`}
            className="block cursor-zoom-in"
          >
            <GalleryThumbnail src={src} alt={`${alt} — ${i + 2}`} />
          </button>
        ))}
      </div>

      {activeSrc !== null && openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 text-white/80 transition-colors hover:text-white sm:right-8 sm:top-8"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:left-8"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:right-8"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(activeSrc) ? (
              <video
                src={activeSrc}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <>
                <Image
                  src={activeSrc}
                  alt={`${alt} — ${openIndex + 2}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute bottom-2 right-2 rounded bg-black/40 px-1.5 py-0.5 text-right text-[10px] leading-tight text-white sm:bottom-3 sm:right-3 sm:text-xs">
                  {site.heroCredit.name}
                  <br />
                  {site.heroCredit.affiliation}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
