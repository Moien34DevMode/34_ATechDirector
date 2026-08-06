// ─────────────────────────────────────────────────────────────────────────────
// Skill tree types — power the nested-treemap "skill map" visualisation.
//
// The tree is arbitrarily deep. A node with `children` is a category
// (clickable — zooms in). A node without `children` is a leaf skill
// (not clickable — hover only, shows `description`).
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillNode {
  /** Stable, unique id across the WHOLE tree (used as the shared layoutId). */
  id: string;

  /** Display name. */
  name: string;

  /** Shown on hover, above the tile. Fill in later — safe to leave empty. */
  description?: string;

  /** Present only on category nodes. Leaf nodes omit this entirely. */
  children?: SkillNode[];
}

/** A node paired with the leaf-count weight used to size it in the treemap. */
export interface WeightedSkillNode {
  node: SkillNode;
  weight: number;
}

/** A weighted node laid out inside a rectangle of a parent treemap pass. */
export interface SkillTile extends WeightedSkillNode {
  x: number;
  y: number;
  width: number;
  height: number;
}
