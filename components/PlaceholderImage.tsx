const gradients = [
  "from-neutral-200 to-neutral-400",
  "from-stone-200 to-stone-400",
  "from-zinc-200 to-zinc-400",
  "from-neutral-300 to-neutral-500",
];

export default function PlaceholderImage({
  label,
  className = "",
  index = 0,
}: {
  label: string;
  className?: string;
  index?: number;
}) {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <span className="px-4 text-center font-serif text-sm text-white/90 sm:text-base">
        {label}
      </span>
    </div>
  );
}
