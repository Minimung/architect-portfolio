import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { tagLabels, type Project } from "@/content/projects";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const locale = useLocale() as "th" | "en";

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <ProjectImage
        project={project}
        label={project.title[locale]}
        index={index}
        className="aspect-[4/3] w-full"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <p className="mt-3 text-xs uppercase tracking-wider text-neutral-500">
        {project.tags.map((tag) => tagLabels[tag][locale]).join(" · ")}
      </p>
      <h3 className="mt-1 font-serif text-lg group-hover:underline">
        {project.title[locale]}
      </h3>
    </Link>
  );
}
