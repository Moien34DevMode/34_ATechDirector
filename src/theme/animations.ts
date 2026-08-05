import type { Variants, Transition } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// Centralised animation presets for Framer Motion.
//
// All scenes and components should pull from here rather than defining
// inline animation values. This makes global animation redesigns trivial.
//
// Convention:
//   variants  → Framer Motion Variants objects (hidden / visible / exit)
//   easing    → reusable Transition objects
// ─────────────────────────────────────────────────────────────────────────────

// ─── Transition presets ──────────────────────────────────────────────────────

export const easing = {
  smooth: {
    duration: 0.45,
    ease: [0.25, 0.1, 0.25, 1],
  } as Transition,

  snappy: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  } as Transition,

  gentle: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  spring: {
    type: 'spring',
    stiffness: 320,
    damping: 28,
  } as Transition,

  springGentle: {
    type: 'spring',
    stiffness: 160,
    damping: 22,
  } as Transition,

  springBouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 18,
  } as Transition,
} as const;

// ─── Variant presets ─────────────────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: easing.smooth },
  exit:    { opacity: 0, transition: easing.snappy },
};

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: easing.gentle },
  exit:    { opacity: 0, y: -16, transition: easing.snappy },
};

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: easing.gentle },
  exit:    { opacity: 0, y: 16, transition: easing.snappy },
};

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: easing.springGentle },
  exit:    { opacity: 0, x: 40, transition: easing.snappy },
};

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: easing.springGentle },
  exit:    { opacity: 0, x: -40, transition: easing.snappy },
};

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: easing.spring },
  exit:    { opacity: 0, scale: 0.92, transition: easing.snappy },
};

/**
 * Used by SceneLayout to animate each scene in/out.
 * The exit scaling slightly above 1 creates a "push away" feel.
 */
export const sceneEnter: Variants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: easing.gentle },
  exit:    { opacity: 0, y: -8, transition: easing.snappy },
};

/**
 * Parent container that staggers its children.
 * Pair with staggerItem on each child.
 */
export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren:   0.05,
    },
  },
  exit: { opacity: 0 },
};

/** Each staggered child inherits timing from staggerContainer */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easing.smooth },
  exit:    { opacity: 0, y: -10 },
};

// ─── Convenience bundle ──────────────────────────────────────────────────────

/** All variants in a single object — useful for dynamic variant selection */
export const variants = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  sceneEnter,
  staggerContainer,
  staggerItem,
} as const;

export type VariantKey = keyof typeof variants;
