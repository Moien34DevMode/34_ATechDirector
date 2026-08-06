import type { SkillNode, SkillTile, WeightedSkillNode } from '@/types/skillTree.types';

// ─────────────────────────────────────────────────────────────────────────────
// treemap.ts
//
// - countLeaves: recursively counts leaf descendants (used as node "weight").
// - squarify: classic squarified treemap algorithm (Bruls, Huizing, van
//   Wijk). Produces near-square rectangles instead of thin slivers, which is
//   what makes a treemap actually readable at a glance.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns the chain of nodes from `root` down to the node with `targetId`
 * (inclusive on both ends), or `null` if not found. Used to resolve the
 * current zoom level + breadcrumb trail from a single focused id.
 */
export function findPath(root: SkillNode, targetId: string): SkillNode[] | null {
  if (root.id === targetId) return [root];
  for (const child of root.children ?? []) {
    const rest = findPath(child, targetId);
    if (rest) return [root, ...rest];
  }
  return null;
}

export function countLeaves(node: SkillNode): number {
  if (!node.children || node.children.length === 0) return 1;
  return node.children.reduce((sum, child) => sum + countLeaves(child), 0);
}

export function weighChildren(node: SkillNode): WeightedSkillNode[] {
  const children = node.children ?? [];
  return children.map((child) => ({ node: child, weight: countLeaves(child) }));
}

interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * Lays out `items` (already sorted desc by weight is NOT required — we sort
 * internally) into `container`, returning absolute-positioned tiles.
 */
export function squarify(items: WeightedSkillNode[], container: Rect): SkillTile[] {
  const filtered = items.filter((i) => i.weight > 0);
  if (filtered.length === 0 || container.width <= 0 || container.height <= 0) return [];

  const sorted = [...filtered].sort((a, b) => b.weight - a.weight);
  const totalWeight = sorted.reduce((s, i) => s + i.weight, 0);

  const results: SkillTile[] = [];
  let rect: Rect = { ...container };
  let remaining = sorted;

  while (remaining.length > 0) {
    const sideLength = Math.min(rect.width, rect.height);
    let row: WeightedSkillNode[] = [remaining[0]];
    let rest = remaining.slice(1);

    // Grow the row as long as adding the next item improves (or keeps equal)
    // the worst aspect ratio in the row.
    while (rest.length > 0) {
      const candidateRow = [...row, rest[0]];
      const currentWorst = worstAspect(row, totalWeight, sideLength, rect);
      const candidateWorst = worstAspect(candidateRow, totalWeight, sideLength, rect);
      if (candidateWorst <= currentWorst) {
        row = candidateRow;
        rest = rest.slice(1);
      } else {
        break;
      }
    }

    // Place the row along the shorter side of the remaining rect.
    const rowWeight = row.reduce((s, i) => s + i.weight, 0);
    const rowArea = (rowWeight / totalWeight) * (container.width * container.height);
    const horizontal = rect.width >= rect.height;
    const rowThickness = horizontal ? rowArea / rect.height : rowArea / rect.width;

    let offset = horizontal ? rect.y : rect.x;
    for (const item of row) {
      const itemArea = (item.weight / totalWeight) * (container.width * container.height);
      const itemLength = itemArea / rowThickness;
      if (horizontal) {
        results.push({
          ...item,
          x: rect.x,
          y: offset,
          width: rowThickness,
          height: itemLength,
        });
      } else {
        results.push({
          ...item,
          x: offset,
          y: rect.y,
          width: itemLength,
          height: rowThickness,
        });
      }
      offset += itemLength;
    }

    if (horizontal) {
      rect = { x: rect.x + rowThickness, y: rect.y, width: rect.width - rowThickness, height: rect.height };
    } else {
      rect = { x: rect.x, y: rect.y + rowThickness, width: rect.width, height: rect.height - rowThickness };
    }

    remaining = rest;
  }

  return results;
}

function worstAspect(
  row: WeightedSkillNode[],
  totalWeight: number,
  _sideLength: number,
  rect: Rect,
): number {
  const totalArea = rect.width * rect.height;
  const rowWeight = row.reduce((s, i) => s + i.weight, 0);
  const rowArea = (rowWeight / totalWeight) * totalArea;
  const horizontal = rect.width >= rect.height;
  const thickness = horizontal ? rowArea / rect.height : rowArea / rect.width;

  let worst = 0;
  for (const item of row) {
    const itemArea = (item.weight / totalWeight) * totalArea;
    const length = itemArea / thickness;
    const ratio = Math.max(thickness / length, length / thickness);
    if (ratio > worst) worst = ratio;
  }
  return worst || Infinity;
}
