import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link, routing, type Locale } from "@/i18n/routing";
import { categoryLabels, getProjectBySlug, projects } from "@/content/projects";
import ProjectImage from "@/components/ProjectImage";
import AlternatingCoverImage from "@/components/AlternatingCoverImage";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("projectDetail");
  const loc = locale as Locale;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Link
        href="/projects"
        className="text-sm text-neutral-500 hover:text-neutral-800"
      >
        ← {t("back")}
      </Link>

      <h1 className="mb-6 mt-4 font-serif text-3xl sm:text-4xl">
        {project.title[loc]}
      </h1>

      {project.coverImage && project.hoverImage ? (
        <AlternatingCoverImage
          src={project.coverImage}
          altSrc={project.hoverImage}
          alt={project.title[loc]}
          className="mb-10 aspect-[16/9] w-full"
          sizes="(min-width: 1024px) 896px, 100vw"
          priority
        />
      ) : (
        <ProjectImage
          project={project}
          label={project.title[loc]}
          className="mb-10 aspect-[16/9] w-full"
          sizes="(min-width: 1024px) 896px, 100vw"
          priority
        />
      )}

      <dl className="mb-10 grid grid-cols-2 gap-6 border-y border-neutral-200 py-6 text-sm sm:grid-cols-4">
        <div>
          <dt className="text-neutral-500">{t("year")}</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">{t("location")}</dt>
          <dd>{project.location[loc]}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">{t("role")}</dt>
          <dd>{project.role[loc]}</dd>
        </div>
        <div>
          <dt className="text-neutral-500">{t("category")}</dt>
          <dd>{categoryLabels[project.category][loc]}</dd>
        </div>
      </dl>

      <p className="text-lg leading-relaxed text-neutral-700">
        {project.description[loc]}
      </p>

      <ProjectGallery images={project.gallery ?? []} alt={project.title[loc]} />
    </div>
  );
}
