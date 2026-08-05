// ─────────────────────────────────────────────────────────────────────────────
// Shared primitive types used across the entire application.
// Keep this file lean — only truly cross-cutting types belong here.
// ─────────────────────────────────────────────────────────────────────────────

/** Every data entry carries a stable string id. */
export interface WithId {
  id: string;
}

/** Optional audit timestamps on data entries. */
export interface WithTimestamps {
  createdAt?: string;
  updatedAt?: string;
}

/** Base for every portfolio data entry. */
export type DataEntry = WithId & WithTimestamps;

// ─── Media ───────────────────────────────────────────────────────────────────

export type MediaKind = 'image' | 'video' | 'gif' | 'youtube';

export interface MediaAsset {
  kind: MediaKind;
  src: string;
  alt?: string;
  poster?: string; // for video / youtube thumbnails
  width?: number;
  height?: number;
}

// ─── Links ───────────────────────────────────────────────────────────────────

export interface ExternalLink {
  label: string;
  url: string;
  /** React Icons icon name, e.g. 'FaGithub'. Resolved at render time. */
  icon?: string;
}

// ─── Scenes ──────────────────────────────────────────────────────────────────

export type SceneId =
  | 'home'
  | 'about'
  | 'timeline'
  | 'abilities'
  | 'projects'
  | 'game-philosophy';

// ─── Utility ─────────────────────────────────────────────────────────────────

/** Generic key→value record with typed values. */
export type Dict<T = string> = Record<string, T>;
