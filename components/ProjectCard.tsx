import { useLocale } from "next-intl";
import { Link, type Locale } from "@/i18n/routing";
import { tagLabels, type Project } from "@/content/projects";
import ProjectImage from "./ProjectImage";
import HoverSwapImage from "./HoverSwapImage";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const locale = useLocale() as Locale;
  const label = project.title[locale];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      {project.coverImage && project.hoverImage ? (
        <HoverSwapImage
          src={project.coverImage}
          altSrc={project.hoverImage}
          alt={label}
          className="aspect-[4/3] w-full"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      ) : (
        <ProjectImage
          project={project}
          label={label}
          index={index}
          className="aspect-[4/3] w-full"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      )}
      <p className="mt-3 text-xs uppercase tracking-wider text-neutral-500">
        {project.tags.map((tag) => tagLabels[tag][locale]).join(" · ")}
      </p>
      <h3 className="mt-1 font-serif text-base group-hover:underline">
        {label}
      </h3>
    </Link>
  );
}
