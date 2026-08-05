import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./About.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// About scene
//
// Purpose: Personal introduction — who Moien is, background, personality,
// what drives him as a game director.
//
// Content will be fully implemented in the next pass.
// ─────────────────────────────────────────────────────────────────────────────

function About() {
  return (
    <SceneLayout sceneId="about" title="About Me">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            The person behind the director
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            About Me
          </motion.h1>
        </motion.header>

        <div className={styles.navSection}>
          <SceneNav exclude="ABOUT" label="Continue" />
        </div>
      </div>
    </SceneLayout>
  );
}

export default About;
