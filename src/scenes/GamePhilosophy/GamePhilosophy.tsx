import { useState } from "react";
import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { gameIdeas, type GameIdeaEntry } from "@data/gameIdeas";
import { useMarkdown } from "@hooks/useMarkdown";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./GamePhilosophy.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// GamePhilosophy scene
//
// Purpose: Ideas, manifestos, and design philosophies.
// ─────────────────────────────────────────────────────────────────────────────

function GamePhilosophy() {
  const [activeIdea, setActiveIdea] = useState<GameIdeaEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(activeIdea?.markdownFile);

  const handleClose = () => setActiveIdea(null);

  return (
    <SceneLayout sceneId="game-philosophy" title="Game Philosophy">
      <div className={styles.container}>
        {/* Scene header */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Design thinking
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Game Philosophy
          </motion.h1>
        </motion.header>

        {/* Idea cards */}
        <div className={styles.ideaList}>
          {gameIdeas.map((idea) => (
            <article
              key={idea.id}
              className={styles.ideaCard}
              onClick={() => setActiveIdea(idea)}
              role="button"
              tabIndex={0}
              aria-label={`Read: ${idea.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveIdea(idea);
                }
              }}
            >
              <h2 className={styles.ideaTitle}>{idea.title}</h2>
              <p className={styles.ideaSummary}>{idea.summary}</p>
              {idea.tags && (
                <ul className={styles.tags}>
                  {idea.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {/* Navigation to other scenes */}
        <div className={styles.navSection}>
          <SceneNav exclude="GAME_PHILOSOPHY" label="Continue" />
        </div>
      </div>

      <Modal
        isOpen={Boolean(activeIdea)}
        onClose={handleClose}
        title={activeIdea?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && <p className={styles.error}>Failed to load article.</p>}
        {content && <MarkdownRenderer content={content} />}
        {!activeIdea?.markdownFile && activeIdea && <p>{activeIdea.summary}</p>}
      </Modal>
    </SceneLayout>
  );
}

export default GamePhilosophy;
