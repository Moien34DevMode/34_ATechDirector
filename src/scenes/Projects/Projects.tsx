import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { LuBriefcase, LuGraduationCap, LuUser, LuExternalLink } from "react-icons/lu";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import ProjectCard from "@components/projects/ProjectCard/ProjectCard";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { projects } from "@data/projects";
import type { ProjectCategory, ProjectEntry } from "@/types/project.types";
import { useMarkdown } from "@hooks/useMarkdown";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./Projects.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Projects scene — the project portfolio.
//
// Projects are grouped by category and ordered by display priority:
// professional → personal → educational.
//
// Each card shows the title, category and key features. "View Details" opens a
// Modal that renders the project's Markdown description via MarkdownRenderer.
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_ORDER: ProjectCategory[] = [
  "professional",
  "personal",
  "educational",
];

const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; Icon: ComponentType<{ className?: string }> }
> = {
  professional: { label: "Professional", Icon: LuBriefcase },
  personal:     { label: "Personal",     Icon: LuUser },
  educational:  { label: "Educational",  Icon: LuGraduationCap },
};

const projectGroups = CATEGORY_ORDER.map((category) => ({
  category,
  items: projects.filter((p) => p.category === category),
})).filter((group) => group.items.length > 0);

function Projects() {
  const [selected, setSelected] = useState<ProjectEntry | null>(null);
  const { content, isLoading, error } = useMarkdown(selected?.markdownFile);

  return (
    <SceneLayout sceneId="projects" title="Projects">
      <div className={styles.container}>
        {/* ── Header ── */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Portfolio
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Projects
          </motion.h1>
        </motion.header>

        {/* ── Category sections ── */}
        {projectGroups.map(({ category, items }) => {
          const { label, Icon } = CATEGORY_META[category];
          return (
            <motion.section
              key={category}
              className={styles.section}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              aria-label={`${label} projects`}
            >
              <motion.h2 className={styles.sectionHeading} variants={staggerItem}>
                <Icon className={styles.sectionIcon} aria-hidden="true" />
                {label}
                <span className={styles.sectionCount}>{items.length}</span>
              </motion.h2>

              <div className={styles.grid}>
                {items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelected}
                  />
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* ── Project detail modal ── */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? "Project Details"}
        className={styles.modal}
      >
        <div className={styles.modalBody}>
          {isLoading ? (
            <LoadingOverlay
              fullScreen={false}
              message="Loading project details…"
            />
          ) : error ? (
            <p className={styles.modalMessage}>
              Failed to load project details.
            </p>
          ) : (
            <>
              {content && <MarkdownRenderer content={content} />}

              {selected?.links && selected.links.length > 0 && (
                <div className={styles.modalLinks}>
                  {selected.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalLink}
                    >
                      {link.label}
                      <LuExternalLink
                        className={styles.modalLinkIcon}
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Modal>
    </SceneLayout>
  );
}

export default Projects;
