import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import type { ProjectCategory, ProjectEntry } from "@/types/project.types";
import MediaLoader from "@components/media/MediaLoader/MediaLoader";
import Button from "@components/ui/Button/Button";
import { cn } from "@utils/cn";
import styles from "./ProjectCard.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// ProjectCard — renders a single project in list/grid views.
//
// Categories are expressed through a subtle color accent on the card instead
// of a text tag. The "Read Markdown" button opens the project's Markdown
// description (handled by the parent scene via the onClick callback).
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  professional: "Professional",
  personal:     "Personal",
  educational:  "Educational",
};

export interface ProjectCardProps {
  project: ProjectEntry;
  onClick?: (project: ProjectEntry) => void;
  className?: string;
}

function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  const thumbnail = project.media?.[0];
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const isThumbnailInView = useInView(thumbnailRef, {
    once: true,
    margin: "200px",
  });

  return (
    <motion.article
      className={cn(
        styles.card,
        styles[`category_${project.category}`],
        project.featured && styles.featured,
        className,
      )}
      onClick={() => onClick?.(project)}
      role="button"
      tabIndex={0}
      aria-label={`${CATEGORY_LABELS[project.category]} project: ${project.title}`}
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
      {thumbnail && (thumbnail.kind === "image" || thumbnail.kind === "gif") && (
        <div
          className={styles.thumbnailWrapper}
          aria-hidden="true"
          ref={thumbnailRef}
        >
          <MediaLoader
            kind={thumbnail.kind}
            src={thumbnail.src}
            alt={thumbnail.alt ?? project.title}
            enabled={isThumbnailInView}
            mediaClassName={styles.thumbnail}
          />
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>

        {/* Key features */}
        {project.keyFeatures.length > 0 && (
          <ul className={styles.features} aria-label="Key features">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className={styles.feature}>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.footer}>
          <Button
            variant="secondary"
            size="sm"
            rightIcon={<LuArrowRight aria-hidden="true" />}
            onClick={(e) => {
              e.stopPropagation();
              onClick?.(project);
            }}
          >
            Read Markdown
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
