import { getTranslations, setRequestLocale } from "next-intl/server";
import ProjectGrid from "@/components/ProjectGrid";
import { categoryLabels, projects, type ProjectCategory } from "@/content/projects";

const validCategories = Object.keys(categoryLabels) as ProjectCategory[];

export default async function ProjectsPage({
  params,
  searchParams,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { category } = await searchParams;
  const t = await getTranslations("projects");

  const activeCategory = validCategories.find((c) => c === category);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <ProjectGrid
        projects={projects}
        initialCategory={activeCategory}
        defaultHeading={t("heading")}
      />
    </div>
  );
}
