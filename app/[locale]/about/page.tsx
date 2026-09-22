import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { site } from "@/content/site";

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const loc = locale as Locale;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-8 font-serif text-3xl sm:text-4xl">{t("heading")}</h1>
      <p className="mb-6 text-lg leading-relaxed text-neutral-700">
        {site.aboutIntro[loc]}
      </p>

      <h2 className="mb-3 mt-12 font-serif text-xl">
        {t("philosophyHeading")}
      </h2>
      <p className="leading-relaxed text-neutral-700">
        {site.aboutPhilosophy[loc]}
      </p>

      <h2 className="mb-3 mt-12 font-serif text-xl">
        {t("educationHeading")}
      </h2>
      <ul className="space-y-2 text-neutral-700">
        {site.education.map((item, i) => (
          <li key={i}>{item[loc]}</li>
        ))}
      </ul>

      <h2 className="mb-3 mt-12 font-serif text-xl">
        {t("experienceHeading")}
      </h2>
      <ul className="space-y-2 text-neutral-700">
        {site.experience.map((item, i) => (
          <li key={i}>{item[loc]}</li>
        ))}
      </ul>
    </div>
  );
}
