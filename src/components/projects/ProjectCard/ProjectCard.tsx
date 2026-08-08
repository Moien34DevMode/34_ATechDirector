import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProjectEntry } from "@/types/project.types";
import MediaLoader from "@components/media/MediaLoader/MediaLoader";
import { cn } from "@utils/cn";
import styles from "./ProjectCard.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCard — renders a single project in list/grid views.
//
// Three visual densities via `variant`:
//   compact   → minimal card for dense grids
//   default   → standard card with thumbnail + summary
//   featured  → hero-scale card for highlighted projects
//
// The parent scene handles click → open Modal with full detail.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCardVariant = "compact" | "default" | "featured";

export interface ProjectCardProps {
  project: ProjectEntry;
  variant?: ProjectCardVariant;
  onClick?: (project: ProjectEntry) => void;
  className?: string;
}

function ProjectCard({
  project,
  variant = "default",
  onClick,
  className,
}: ProjectCardProps) {
  const thumbnail = project.media[0];
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const isThumbnailInView = useInView(thumbnailRef, {
    once: true,
    margin: "200px",
  });

  return (
    <motion.article
      className={cn(
        styles.card,
        styles[variant],
        project.featured && styles.featured,
        className,
      )}
      onClick={() => onClick?.(project)}
      role="button"
      tabIndex={0}
      aria-label={`View project: ${project.title}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.(project);
        }
      }}
    >
      {/* Thumbnail */}
      {thumbnail && variant !== "compact" && (
        <div
          className={styles.thumbnailWrapper}
          aria-hidden="true"
          ref={thumbnailRef}
        >
          {thumbnail.kind === "image" || thumbnail.kind === "gif" ? (
            <MediaLoader
              kind={thumbnail.kind}
              src={thumbnail.src}
              alt={thumbnail.alt ?? project.title}
              enabled={isThumbnailInView}
              mediaClassName={styles.thumbnail}
            />
          ) : (
            <div className={styles.thumbnailPlaceholder} />
          )}
        </div>
      )}

      <div className={styles.body}>
        {/* Status badge */}
        <span className={cn(styles.status, styles[`status_${project.status}`])}>
          {project.status.replace("-", " ")}
        </span>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.tagline}>{project.tagline}</p>

        {variant !== "compact" && (
          <p className={styles.summary}>{project.summary}</p>
        )}

        {/* Roles */}
        <ul className={styles.roles} aria-label="Roles">
          {project.roles.map((role) => (
            <li key={role} className={styles.role}>
              {role.replace("-", " ")}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
