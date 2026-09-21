import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const loc = locale as "th" | "en";
  const featured = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <HeroCarousel projects={featured} />

      <section className="bg-[#a6ded1]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-2 sm:py-24">
          <h2 className="font-serif text-4xl sm:text-5xl">
            {t("aboutTeaser")}
          </h2>
          <div>
            <p className="text-lg leading-relaxed">{site.aboutIntro[loc]}</p>
            <Link
              href="/about"
              className="mt-6 inline-block border-b border-neutral-900 pb-1 text-sm"
            >
              {t("aboutTeaserCta")} →
            </Link>
          </div>
        </div>
      </section>

      <CategoryGrid />
    </>
  );
}
