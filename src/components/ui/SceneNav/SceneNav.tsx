import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@theme/animations";
import { navItems } from "@data/navigation";
import type { RouteKey } from "@router/routes";
import styles from "./SceneNav.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// SceneNav — a grid of navigation cards used inside scenes.
//
// Pass `exclude` with the current scene's RouteKey to hide it from the list.
// ─────────────────────────────────────────────────────────────────────────────

export interface SceneNavProps {
  /** The RouteKey of the current scene — hides it from the card list */
  exclude?: RouteKey;
  label?: string;
}

function SceneNav({ exclude, label = "Explore" }: SceneNavProps) {
  const items = navItems.filter((item) => item.key !== exclude);

  return (
    <nav className={styles.wrapper} aria-label={label}>
      <p className={styles.label}>{label}</p>
      <motion.ul
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        role="list"
      >
        {items.map((item) => (
          <motion.li key={item.key} variants={staggerItem} role="listitem">
            <Link to={item.path} className={styles.card}>
              <span className={styles.cardLabel}>{item.label}</span>
              <span className={styles.arrow} aria-hidden="true">→</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export default SceneNav;
