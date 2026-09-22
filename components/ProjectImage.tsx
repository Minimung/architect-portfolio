import type { Project } from "@/content/projects";
import PlaceholderImage from "./PlaceholderImage";
import Photo from "./Photo";

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
    <Photo
      src={project.coverImage}
      alt={label}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
