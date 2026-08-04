import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import SceneNav from "@components/ui/SceneNav/SceneNav";
import { fadeInUp, staggerContainer, staggerItem } from "@theme/animations";
import styles from "./Home.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Home scene — primary landing and navigation hub.
// Content will be fully implemented in the next pass.
// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <SceneLayout sceneId="home" title="Home">
      <div className={styles.container}>
        {/* Hero */}
        <motion.header
          className={styles.hero}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Game Director · Designer · Storyteller
          </motion.p>
          <motion.h1 className={styles.headline} variants={staggerItem}>
            A Game Director
          </motion.h1>
          <motion.p className={styles.subline} variants={staggerItem}>
            Crafting worlds, systems, and experiences that leave a mark.
          </motion.p>
        </motion.header>

        {/* Scene navigation cards */}
        <motion.div
          className={styles.navSection}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <SceneNav exclude="HOME" label="Explore" />
        </motion.div>
      </div>
    </SceneLayout>
  );
}

export default Home;
