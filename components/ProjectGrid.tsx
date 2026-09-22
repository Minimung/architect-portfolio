"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import {
  categoryLabels,
  type Project,
  type ProjectCategory,
} from "@/content/projects";
import ProjectCard from "./ProjectCard";

const categories: ProjectCategory[] = [
  "landscape-intern",
  "landscape-planning",
  "urban-planning",
  "construction-drawing",
];

export default function ProjectGrid({
  projects,
  initialCategory,
  defaultHeading,
}: {
  projects: Project[];
  initialCategory?: ProjectCategory;
  defaultHeading: string;
}) {
  const [active, setActive] = useState<ProjectCategory | "all">(
    initialCategory ?? "all",
  );
  const locale = useLocale() as Locale;
  const t = useTranslations("projects");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  const heading = active === "all" ? defaultHeading : categoryLabels[active][locale];

  return (
    <div>
      <h1 className="mb-10 font-serif text-3xl sm:text-4xl">{heading}</h1>
      <div className="mb-8 flex flex-wrap gap-2 text-sm">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-1.5 text-center transition-colors ${
            active === "all"
              ? "border-neutral-900 bg-neutral-900 text-white"
              : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
          }`}
        >
          {t("filterAll")}
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActive(category)}
            className={`max-w-[220px] rounded-full border px-4 py-1.5 text-center leading-snug transition-colors ${
              active === category
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
            }`}
          >
            {categoryLabels[category][locale]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
