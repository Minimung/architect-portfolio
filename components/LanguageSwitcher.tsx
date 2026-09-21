"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing";

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className={light ? "text-white/40" : "text-neutral-300"}>
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            aria-current={loc === locale}
            className={
              loc === locale
                ? light
                  ? "font-semibold text-white"
                  : "font-semibold text-neutral-900"
                : light
                  ? "text-white/60 hover:text-white"
                  : "text-neutral-400 hover:text-neutral-600"
            }
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
