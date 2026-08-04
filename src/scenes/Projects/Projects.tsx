import { useState } from "react";
import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import ProjectCard from "@components/projects/ProjectCard/ProjectCard";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { projects } from "@data/projects";
import { useMarkdown } from "@hooks/useMarkdown";
import { staggerContainer, staggerItem } from "@theme/animations";
import type { ProjectEntry } from "@/types/project.types";
import styles from "./Projects.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Projects scene
//
// Purpose: Portfolio of shipped and in-progress projects.
// ─────────────────────────────────────────────────────────────────────────────

function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(
    activeProject?.markdownFile,
  );

  const handleCardClick = (project: ProjectEntry) => {
    setActiveProject(project);
  };

  const handleClose = () => setActiveProject(null);

  return (
    <SceneLayout sceneId="projects" title="Projects">
      <div className={styles.container}>
        {/* Scene header */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Shipped &amp; in progress
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Projects
          </motion.h1>
        </motion.header>

        {/* Project grid */}
        <div className={styles.grid} role="list">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={project.featured ? "featured" : "default"}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Navigation to other scenes */}
        <div className={styles.navSection}>
          <SceneNav exclude="PROJECTS" label="Continue" />
        </div>
      </div>

      {/* Detail modal */}
      <Modal
        isOpen={Boolean(activeProject)}
        onClose={handleClose}
        title={activeProject?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && (
          <p className={styles.error}>Failed to load project details.</p>
        )}
        {content && <MarkdownRenderer content={content} />}
        {!activeProject?.markdownFile && activeProject && (
          <p>{activeProject.summary}</p>
        )}
      </Modal>
    </SceneLayout>
  );
}

export default Projects;
