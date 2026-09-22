import { useLocale } from "next-intl";
import { Link, type Locale } from "@/i18n/routing";
import { categoryImages, categoryLabels, type ProjectCategory } from "@/content/projects";
import Photo from "./Photo";

const categories: ProjectCategory[] = [
  "landscape-intern",
  "landscape-planning",
  "urban-planning",
  "construction-drawing",
];

const categoryColors: Record<ProjectCategory, string> = {
  "landscape-intern": "bg-[#cfe3d4]",
  "landscape-planning": "bg-[#e8dcc7]",
  "urban-planning": "bg-[#c9d2dc]",
  "construction-drawing": "bg-[#e3c9b6]",
};

export default function CategoryGrid() {
  const locale = useLocale() as Locale;

  return (
    <div className="mx-auto max-w-[1382px] px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const image = categoryImages[category];
          const label = categoryLabels[category][locale];

          return (
            <Link
              key={category}
              href={`/projects?category=${category}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {image ? (
                  <Photo
                    src={image}
                    alt={label}
                    className="h-full w-full transition-opacity duration-300 ease-out group-hover:opacity-65"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div
                    className={`h-full w-full transition-opacity duration-300 ease-out group-hover:opacity-65 ${categoryColors[category]}`}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  <span className="font-serif text-sm text-white sm:text-base">
                    {label}
                  </span>
                </div>
              </div>
              <div className="flex min-h-[72px] items-center py-3">
                <p className="text-sm font-medium uppercase leading-snug group-hover:underline">
                  {label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
