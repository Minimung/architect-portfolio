import { useLocale, useTranslations } from "next-intl";
import { Link, type Locale } from "@/i18n/routing";
import { site } from "@/content/site";

export default function Footer() {
  const locale = useLocale() as Locale;
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const year = new Date().getFullYear();

  return (
    //mt-24 border-t border-neutral-200 bg-neutral-50
    <footer className="mt-24 border-t border-[#FEFEBE] bg-[#FEFEBE]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 sm:py-20">
        <div>
          {site.name && <p className="font-serif text-lg">{site.name}</p>}
          <p className="mt-2 max-w-xs text-sm text-neutral-500">
            {site.tagline[locale]}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            {t("linksHeading")}
          </p>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
            <Link href="/" className="hover:text-neutral-950">
              {tNav("home")}
            </Link>
            <Link href="/projects" className="hover:text-neutral-950">
              {tNav("projects")}
            </Link>
            <Link href="/about" className="hover:text-neutral-950">
              {tNav("about")}
            </Link>
            <Link href="/contact" className="hover:text-neutral-950">
              {tNav("contact")}
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            {tContact("heading")}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
            <a
              href={`mailto:${site.contact.email}`}
              className="hover:text-neutral-950"
            >
              {site.contact.email}
            </a>
            <span>{site.contact.phone}</span>
            {(site.contact.instagram || site.contact.line) && (
              <div className="mt-1 flex gap-4">
                {site.contact.instagram && (
                  <a
                    href={site.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neutral-950"
                  >
                    Instagram
                  </a>
                )}
                {site.contact.line && (
                  <a
                    href={site.contact.line}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neutral-950"
                  >
                    LINE
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          {site.name && <span>{site.name}</span>}
          <span>
            © {year} {site.name && `${site.name}. `}
            {t("rights")}
          </span>
        </div>
      </div>
    </footer>
  );
}
