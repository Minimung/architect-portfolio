import { getTranslations, setRequestLocale } from "next-intl/server";
import { site } from "@/content/site";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="mb-6 font-serif text-3xl sm:text-4xl">{t("heading")}</h1>
      <p className="mb-10 text-lg leading-relaxed text-neutral-700">
        {t("intro")}
      </p>

      <dl className="space-y-6 text-sm">
        <div>
          <dt className="text-neutral-500">{t("email")}</dt>
          <dd>
            <a
              href={`mailto:${site.contact.email}`}
              className="text-lg text-neutral-900 underline underline-offset-4"
            >
              {site.contact.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-neutral-500">{t("phone")}</dt>
          <dd className="text-lg text-neutral-900">{site.contact.phone}</dd>
        </div>
        {(site.contact.instagram || site.contact.line) && (
          <div>
            <dt className="text-neutral-500">{t("social")}</dt>
            <dd className="flex gap-4 text-lg">
              {site.contact.instagram && (
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline underline-offset-4"
                >
                  Instagram
                </a>
              )}
              {site.contact.line && (
                <a
                  href={site.contact.line}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline underline-offset-4"
                >
                  LINE
                </a>
              )}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
