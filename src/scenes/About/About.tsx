import { type ComponentType, useState } from "react";
import { motion } from "framer-motion";
import { SiUnrealengine, SiTelegram, SiGithub } from "react-icons/si";
import { HiOutlineCpuChip, HiOutlineAcademicCap, HiOutlineBolt, HiOutlineEnvelope, HiOutlineClipboardDocument, HiOutlineCheck } from "react-icons/hi2";
import { LuLayers, LuCode, LuExternalLink, LuLinkedin} from "react-icons/lu";
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
//   • Contact Info Grid
//   • Scene nav
// ─────────────────────────────────────────────────────────────────────────────

interface Highlight {
  Icon: ComponentType<{ className?: string }>;
  label: string;
  detail: string;
}

interface ContactItem {
  id: string;
  name: string;
  Icon: ComponentType<{ className?: string }>;
  value: string;
  actionUrl: string;
  actionLabel: string;
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

const contactItems: ContactItem[] = [
  {
    id: "email",
    name: "Email",
    Icon: HiOutlineEnvelope,
    value: "moientalebi@outlook.com",
    actionUrl: "mailto:moientalebi@outlook.com",
    actionLabel: "Mail",
  },
  {
    id: "telegram",
    name: "Telegram",
    Icon: SiTelegram,
    value: "https://t.me/moien34",
    actionUrl: "https://t.me/moien34",
    actionLabel: "Chat",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    Icon: LuLinkedin,
    value: "https://www.linkedin.com/in/moien-talebi-9755192b4/",
    actionUrl: "https://www.linkedin.com/in/moien-talebi-9755192b4/",
    actionLabel: "Find",
  },
  {
    id: "github",
    name: "GitHub",
    Icon: SiGithub,
    value: "https://github.com/Moien34DevMode/",
    actionUrl: "https://github.com/Moien34DevMode/",
    actionLabel: "Colab",
  },
];

function About() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

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

        {/* ── Contact info section ── */}
        <motion.section
          className={styles.contactSection}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          aria-label="Contact information"
        >
          <motion.h2 className={styles.contactHeading} variants={staggerItem}>
            Get in touch
          </motion.h2>

          <motion.div className={styles.contactGrid} variants={staggerContainer}>
            {contactItems.map(({ id, name, Icon, value, actionUrl, actionLabel }) => (
              <motion.div
                key={id}
                className={styles.contactCard}
                variants={staggerItem}
              >
                <div className={styles.contactHeader}>
                  <Icon className={styles.contactIcon} aria-hidden="true" />
                  <h3 className={styles.contactName}>{name}</h3>
                </div>

                <div className={styles.contactActions}>
                  <a
                    href={actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtnPrimary}
                  >
                    <span>{actionLabel}</span>
                    <LuExternalLink className={styles.btnIcon} aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(id, value)}
                    className={styles.actionBtnSecondary}
                    title="Copy to clipboard"
                    aria-label={`Copy ${name} information`}
                  >
                    {copiedId === id ? (
                      <>
                        <span>Copied!</span>
                        <HiOutlineCheck className={styles.btnIcon} aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span>Copy</span>
                        <HiOutlineClipboardDocument className={styles.btnIcon} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

      </div>
    </SceneLayout>
  );
}

export default About;
