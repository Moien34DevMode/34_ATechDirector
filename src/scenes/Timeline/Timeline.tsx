import { useState } from "react";
import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import TimelineItem from "@components/timeline/TimelineItem/TimelineItem";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { timeline } from "@data/timeline";
import { useMarkdown } from "@hooks/useMarkdown";
import { staggerContainer, staggerItem } from "@theme/animations";
import type { TimelineEntry } from "@/types/timeline.types";
import styles from "./Timeline.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Timeline scene
//
// Purpose: Chronological career history. Each entry can expand into a
// full Markdown article via a Modal.
// ─────────────────────────────────────────────────────────────────────────────

function Timeline() {
  const [activeEntry, setActiveEntry] = useState<TimelineEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(activeEntry?.markdownFile);

  const handleEntryClick = (entry: TimelineEntry) => {
    if (entry.markdownFile) {
      setActiveEntry(entry);
    }
  };

  const handleClose = () => setActiveEntry(null);

  return (
    <SceneLayout sceneId="timeline" title="Timeline">
      <div className={styles.container}>
        {/* Scene header */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Career history
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Timeline
          </motion.h1>
        </motion.header>

        {/* Timeline list */}
        <ol className={styles.list} aria-label="Career timeline">
          {timeline.map((entry) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isActive={activeEntry?.id === entry.id}
              onClick={handleEntryClick}
            />
          ))}
        </ol>

        {/* Navigation to other scenes */}
        <div className={styles.navSection}>
          <SceneNav exclude="TIMELINE" label="Continue" />
        </div>
      </div>

      {/* Detail modal */}
      <Modal
        isOpen={Boolean(activeEntry)}
        onClose={handleClose}
        title={activeEntry?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && <p className={styles.error}>Failed to load content.</p>}
        {content && <MarkdownRenderer content={content} />}
      </Modal>
    </SceneLayout>
  );
}

export default Timeline;
