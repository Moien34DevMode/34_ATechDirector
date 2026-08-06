import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SkillTreemap from "@components/abilities/SkillTreemap/SkillTreemap";
import { skillTree } from "@data/skillTree";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./Abilities.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Abilities scene — the skill map.
//
// Renders `skillTree` as a nested, click-to-zoom treemap (see SkillTreemap).
// Everything must fit in one screen with no scrolling, so the header stays
// compact and the treemap takes up the remaining space.
// ─────────────────────────────────────────────────────────────────────────────

function Abilities() {
  return (
    <SceneLayout sceneId="abilities" title="Abilities">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Skill Map
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Abilities
          </motion.h1>
        </motion.header>

        <motion.div
          className={styles.treemapWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <SkillTreemap root={skillTree} />
        </motion.div>
      </div>
    </SceneLayout>
  );
}

export default Abilities;
