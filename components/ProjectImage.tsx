import Image from "next/image";
import type { Project } from "@/content/projects";
import PlaceholderImage from "./PlaceholderImage";

export default function ProjectImage({
  project,
  label,
  index = 0,
  className = "",
  sizes = "100vw",
  priority = false,
}: {
  project: Project;
  label: string;
  index?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!project.coverImage) {
    return <PlaceholderImage label={label} index={index} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={project.coverImage}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
