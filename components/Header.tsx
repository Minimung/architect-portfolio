"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { site } from "@/content/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-10"
          : "border-b border-neutral-200"
      }
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:gap-4">
        {site.name && (
          <Link
            href="/"
            className={`whitespace-nowrap font-serif text-lg tracking-tight ${
              isHome ? "text-white" : ""
            }`}
          >
            {site.name}
          </Link>
        )}
        <nav
          className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:ml-auto sm:gap-x-7 ${
            isHome ? "text-white" : "text-neutral-700"
          }`}
        >
          <Link
            href="/"
            className={`whitespace-nowrap ${
              isHome ? "hover:text-white/70" : "hover:text-neutral-950"
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href="/projects"
            className={`whitespace-nowrap ${
              isHome ? "hover:text-white/70" : "hover:text-neutral-950"
            }`}
          >
            {t("projects")}
          </Link>
          <Link
            href="/about"
            className={`whitespace-nowrap ${
              isHome ? "hover:text-white/70" : "hover:text-neutral-950"
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/contact"
            className={`whitespace-nowrap ${
              isHome ? "hover:text-white/70" : "hover:text-neutral-950"
            }`}
          >
            {t("contact")}
          </Link>
          <LanguageSwitcher light={isHome} />
        </nav>
      </div>
    </header>
  );
}
