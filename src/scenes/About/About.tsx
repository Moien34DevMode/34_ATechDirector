import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { SiUnrealengine } from "react-icons/si";
import { HiOutlineCpuChip, HiOutlineAcademicCap, HiOutlineBolt } from "react-icons/hi2";
import { LuLayers, LuCode } from "react-icons/lu";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from "@theme/animations";
import styles from "./About.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// About scene
//
// Sections:
//   • Header
//   • Profile card  (photo + biography)
//   • Highlights summary grid
//   • Scene nav
// ─────────────────────────────────────────────────────────────────────────────

interface Highlight {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}

const highlights: Highlight[] = [
  {
    Icon: SiUnrealengine,
    label: "Unreal Engine & XR",
    detail: "Real-time 3D, MR/VR, and AI Avatar systems",
  },
  {
    Icon: LuCode,
    label: "Full-Stack Dev",
    detail: "Web & desktop applications across personal and professional projects",
  },
  {
    Icon: HiOutlineCpuChip,
    label: "AI-Powered Systems",
    detail: "AI Avatars, intelligent behaviour, and AI-driven tooling",
  },
  {
    Icon: LuLayers,
    label: "Software Architecture",
    detail: "Clean, organised, and maintainable code design",
  },
  {
    Icon: HiOutlineAcademicCap,
    label: "Computer Engineering",
    detail: "K. N. Toosi University of Technology — Algorithms, AI, Databases",
  },
  {
    Icon: HiOutlineBolt,
    label: "Fast Learner",
    detail: "Rapidly adapts to new technologies and challenging problem spaces",
  },
];

function About() {
  return (
    <SceneLayout sceneId="about" title="About Me">
      <div className={styles.container}>

        {/* ── Header ── */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            A Few Words
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            About Me
          </motion.h1>
        </motion.header>

        {/* ── Profile card: photo + bio ── */}
        <div className={styles.profileCard}>

          {/* Photo column */}
          <motion.div
            className={styles.photoWrap}
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.photoFrame}>
              <img
                src="images/Esfehan.webp"
                alt="Moien — profile photo"
                className={styles.photo}
              />
            </div>
            <p className={styles.photoCaption}>Moien Talebi</p>
            <p className={styles.photoRole}>Software Developer</p>
          </motion.div>

          {/* Biography column */}
          <motion.div
            className={styles.bioWrap}
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            <p className={styles.bioText}>
              I am a <strong>Software Developer</strong> with professional experience in
              designing, developing, and optimising{" "}
              <strong>interactive software applications</strong>. My expertise includes
              developing projects with <strong>Unreal Engine</strong>,{" "}
              <strong>Mixed and Virtual Reality (MR/VR)</strong> technologies,{" "}
              <strong>real-time 3D environments</strong>, and{" "}
              <strong>AI-powered systems</strong>, including{" "}
              <strong>AI Avatars</strong>.
            </p>

            <p className={styles.bioText}>
              In addition to my professional experience, I have strong expertise in both{" "}
              <strong>web and desktop application development</strong> and have completed
              a variety of personal projects across these domains.
            </p>

            <p className={styles.bioText}>
              I am passionate about <strong>learning emerging technologies</strong>,
              solving <strong>complex technical challenges</strong>, and building{" "}
              <strong>efficient, high-quality software solutions</strong>. I enjoy
              working on challenging projects that require{" "}
              <strong>analytical thinking</strong>, creativity, and continuous learning.
            </p>

            <p className={styles.bioText}>
              During my <strong>Computer Engineering</strong> studies at{" "}
              <strong>K. N. Toosi University of Technology</strong>, I built a strong
              foundation in core computer science disciplines, including{" "}
              <strong>algorithm design</strong>, <strong>artificial intelligence</strong>
              , and <strong>database systems</strong>. I have consistently applied this
              theoretical knowledge to <strong>software architecture design</strong>,
              problem-solving, and the development of robust, real-world software
              solutions.
            </p>

            <p className={styles.bioText}>
              My key strengths include writing{" "}
              <strong>clean, well-structured, and maintainable code</strong>, designing{" "}
              <strong>organised and reliable software architectures</strong>, delivering
              tasks <strong>on schedule</strong>, paying close attention to{" "}
              <strong>technical details</strong>, and rapidly{" "}
              <strong>learning and adapting</strong> to new technologies.
            </p>
          </motion.div>
        </div>

        {/* ── Highlights grid ── */}
        <motion.section
          className={styles.highlightsSection}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Key highlights"
        >
          <motion.h2 className={styles.highlightsHeading} variants={staggerItem}>
            At a glance
          </motion.h2>

          <motion.div className={styles.highlightsGrid} variants={staggerContainer}>
            {highlights.map(({ Icon, label, detail }) => (
              <motion.div
                key={label}
                className={styles.highlightCard}
                variants={staggerItem}
              >
                <Icon className={styles.highlightIcon} aria-hidden="true" />
                <h3 className={styles.highlightLabel}>{label}</h3>
                <p className={styles.highlightDetail}>{detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>


      </div>
    </SceneLayout>
  );
}

export default About;
