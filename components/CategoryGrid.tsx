import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { categoryLabels, type ProjectCategory } from "@/content/projects";

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
  const locale = useLocale() as "th" | "en";

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/projects?category=${category}`}
            className="group flex flex-col"
          >
            <div
              className={`aspect-[4/3] w-full ${categoryColors[category]}`}
            />
            <div className="flex min-h-[72px] items-center py-3">
              <p className="text-sm font-medium uppercase leading-snug group-hover:underline">
                {categoryLabels[category][locale]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
