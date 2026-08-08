import type { DataEntry, MediaAsset, ExternalLink } from './common.types';

// ─────────────────────────────────────────────────────────────────────────────
// Project entry types
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus =
  | 'released'
  | 'in-development'
  | 'prototype'
  | 'concept'
  | 'cancelled';

export type ProjectRole =
  | 'game-director'
  | 'creative-director'
  | 'game-designer'
  | 'level-designer'
  | 'narrative-designer'
  | 'producer'
  | 'programmer'
  | 'writer';

/** Left open as a string so you can add any genre without changing this file */
export type ProjectGenre = string;

/** Category that drives display priority: professional → personal → educational */
export type ProjectCategory = 'professional' | 'personal' | 'educational';

export interface ProjectEntry extends DataEntry {
  title: string;
  category: ProjectCategory;

  /** Bullet-point highlights shown on the project card */
  keyFeatures: string[];

  tagline?: string;

  /** Short description for card views */
  summary?: string;

  status?: ProjectStatus;
  roles?: ProjectRole[];
  genres?: ProjectGenre[];
  platforms?: string[];
  engine?: string;

  teamSize?: number;
  /** Human-readable duration, e.g. "18 months" */
  duration?: string;
  startDate?: string;
  endDate?: string;

  /** Ordered list — first image is used as the card thumbnail */
  media?: MediaAsset[];

  /**
   * Optional path relative to src/assets/markdown/projects/.
   * When provided, the detail modal/page renders this Markdown file.
   * Example: "project-echoes.md"
   */
  markdownFile?: string;

  tags?: string[];
  links?: ExternalLink[];

  /** Featured projects appear first and with extra visual weight */
  featured?: boolean;
}
