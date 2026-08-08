import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import CodeRain from "@components/ui/CodeRain/CodeRain";
import MediaLoader from "@components/media/MediaLoader/MediaLoader";
import { staggerContainer, staggerItem, fadeInUp } from "@theme/animations";
import { ROUTES } from "@router/routes";
import styles from "./Home.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Home scene — full-screen landing with two portrait images and a centred hero.
//
// Layout (desktop):
//   [left portrait: camera + code rain bg] [centre: hero + nav] [right portrait: person]
//
// Layout (mobile):
//   Stacked vertically — portraits hidden or shown below hero.
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About Me",           path: ROUTES.ABOUT },
  { label: "My Skills",          path: ROUTES.ABILITIES },
  { label: "My Projects",        path: ROUTES.PROJECTS },
  { label: "Gaming Preferences", path: ROUTES.GAME_PHILOSOPHY },
  { label: "My Timeline",        path: ROUTES.TIMELINE },
] as const;

function Home() {
  return (
    <SceneLayout sceneId="home" title="Home">
      <div className={styles.page}>

        {/* ── Left portrait: wireframe camera over code rain ── */}
        <div className={styles.portraitLeft} aria-hidden="true">
          <CodeRain className={styles.codeRain} />
          {/* Replace src with your actual camera PNG once ready */}
          <MediaLoader
            src="images/WireFrameKid.webp"
            alt=""
            className={styles.cameraImg}
          />
          {/* Gradient vignette so the portrait blends into the dark bg */}
          <div className={styles.portraitVignette} />
        </div>

        {/* ── Centre: hero text + navigation buttons ── */}
        <motion.main
          className={styles.centre}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          <motion.h1 className={styles.title} variants={staggerItem}>
            Moien 34
          </motion.h1>

          <motion.p className={styles.subtitle} variants={staggerItem}>
            A Technical Director
          </motion.p>

          <motion.p className={styles.tagline} variants={staggerItem}>
            Crafting worlds, systems, and experiences that leave a mark.
          </motion.p>

          {/* Navigation buttons */}
          <motion.nav
            className={styles.navGrid}
            variants={fadeInUp}
            aria-label="Site sections"
          >
            {NAV_LINKS.map(({ label, path }) => (
              <Link key={path} to={path} className={styles.navBtn}>
                <span className={styles.navBtnLabel}>{label}</span>
                <span className={styles.navBtnArrow} aria-hidden="true">→</span>
              </Link>
            ))}
          </motion.nav>
        </motion.main>

        {/* ── Right portrait: person image ── */}
        <div className={styles.portraitRight} aria-hidden="true">
          {/* Replace src with your actual person PNG/JPG once ready */}
          <MediaLoader
            src="images/KidLookingLeft.webp"
            alt=""
            className={styles.personImgWrap}
            mediaClassName={styles.personImg}
          />
          <div className={styles.portraitVignette} />
        </div>

      </div>
    </SceneLayout>
  );
}

export default Home;
