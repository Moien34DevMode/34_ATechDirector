import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import AbilityGraph from "@components/abilities/AbilityGraph/AbilityGraph";
import { abilities } from "@data/abilities";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./Abilities.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Abilities scene
//
// Purpose: Visual representation of skills and proficiency levels.
// ─────────────────────────────────────────────────────────────────────────────

function Abilities() {
  return (
    <SceneLayout sceneId="abilities" title="Abilities">
      <div className={styles.container}>
        {/* Scene header */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Skills &amp; expertise
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Abilities
          </motion.h1>
        </motion.header>

        {/* Ability graph */}
        <AbilityGraph groups={abilities} displayMode="bar" />

        {/* Navigation to other scenes */}
        <div className={styles.navSection}>
          <SceneNav exclude="ABILITIES" label="Continue" />
        </div>
      </div>
    </SceneLayout>
  );
}

export default Abilities;
