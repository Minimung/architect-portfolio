"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, type Locale } from "@/i18n/routing";
import type { Project } from "@/content/projects";
import { site } from "@/content/site";
import ProjectImage from "./ProjectImage";

function getSlideOffset(i: number, activeIndex: number, total: number) {
  if (total <= 1) {
    return 0;
  }
  return ((i - activeIndex + total + 1) % total) - 1;
}

export default function HeroCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const locale = useLocale() as Locale;
  const t = useTranslations("home");

  useEffect(() => {
    if (isPaused || projects.length <= 1) {
      return;
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, projects.length]);

  if (projects.length === 0) {
    return null;
  }

  const active = projects[index];

  function goTo(next: number) {
    setIndex((next + projects.length) % projects.length);
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projects.map((project, i) => {
        const offset = getSlideOffset(i, index, projects.length);
        return (
          <div
            key={project.slug}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              offset === 0 ? "" : "pointer-events-none"
            }`}
            style={{ transform: `translateX(${offset * 100}%)` }}
          >
            <ProjectImage
              project={project}
              label={project.title[locale]}
              index={i}
              className="h-full w-full"
              priority={i === 0}
            />
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-20 text-white sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-10">
        <Link
          key={active.slug}
          href={`/projects/${active.slug}`}
          className="hero-caption group max-w-xs"
        >
          <p className="border-b border-white/60 pb-1 text-sm group-hover:border-white">
            {active.title[locale]}
          </p>
          <p className="mt-2 text-xs text-white/80">{active.summary[locale]}</p>
          <span className="mt-3 inline-block border-b border-white/70 pb-0.5 text-xs group-hover:border-white">
            {t("aboutTeaserCta")} →
          </span>
        </Link>

        <div className="flex items-center gap-6 self-center">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
            className="text-white/80 hover:text-white"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(index + 1)}
            className="text-white/80 hover:text-white"
          >
            →
          </button>
        </div>

        <p className="text-xs text-white/70 sm:text-right">
          {site.heroCredit.name}
          <br />
          {site.heroCredit.affiliation}
        </p>
      </div>
    </section>
  );
}
