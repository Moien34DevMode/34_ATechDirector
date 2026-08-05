import { motion } from "framer-motion";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";

import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./GamePhilosophy.module.css";

function GamePhilosophy() {
  return (
    <SceneLayout sceneId="game-philosophy" title="Game Philosophy">
      <div className={styles.container}>
        <motion.div
          className={styles.underDev}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.underDevTitle} variants={staggerItem}>
            This scene is under development
          </motion.h1>
        </motion.div>

      </div>
    </SceneLayout>
  );
}

export default GamePhilosophy;
