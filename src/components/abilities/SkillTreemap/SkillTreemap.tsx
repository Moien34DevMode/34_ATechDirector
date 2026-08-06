import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import type { SkillNode, SkillTile } from "@/types/skillTree.types";
import { findPath, squarify, weighChildren } from "@utils/treemap";
import { easing } from "@theme/animations";
import { cn } from "@utils/cn";
import styles from "./SkillTreemap.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// SkillTreemap — a nested, "folder map"-style treemap.
//
// • Every rectangle's area is proportional to how many leaf skills live
//   inside it.
// • Clicking a rectangle that still contains other rectangles zooms into it
//   (the clicked tile morphs into the new full-size stage — a shared
//   framer-motion layoutId animation, no manual tweening).
// • You can only click as deep as there's still something inside — leaf
//   tiles (no children) are inert, hover-only.
// • Hovering any tile surfaces its name + description in the header bar.
// ─────────────────────────────────────────────────────────────────────────────

export interface SkillTreemapProps {
  root: SkillNode;
  className?: string;
}

function SkillTreemap({ root, className }: SkillTreemapProps) {
  const [focusId, setFocusId] = useState(root.id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const path = useMemo(() => findPath(root, focusId) ?? [root], [root, focusId]);
  const current = path[path.length - 1] ?? root;

  // Reset an invalid/stale focus (defensive — shouldn't normally happen).
  useEffect(() => {
    if (!findPath(root, focusId)) setFocusId(root.id);
  }, [root, focusId]);

  const weightedChildren = useMemo(() => weighChildren(current), [current]);
  const maxWeight = useMemo(
    () => weightedChildren.reduce((m, c) => Math.max(m, c.weight), 1),
    [weightedChildren],
  );

  const tiles: SkillTile[] = useMemo(() => {
    if (size.width <= 0 || size.height <= 0) return [];
    return squarify(weightedChildren, { x: 0, y: 0, width: size.width, height: size.height });
  }, [weightedChildren, size]);

  const hovered =
    tiles.find((t) => t.node.id === hoveredId)?.node ??
    (hoveredId === current.id ? current : null);

  const isLeaf = current.children === undefined || current.children.length === 0;

  return (
    <div className={cn(styles.wrapper, className)}>
      {/* ── Header: back button, breadcrumb, hover info ─────────────── */}
      <div className={styles.header}>
        <div className={styles.breadcrumb}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => path.length > 1 && setFocusId(path[path.length - 2].id)}
            disabled={path.length <= 1}
            aria-label="Zoom out one level"
          >
            ←
          </button>

          <nav aria-label="Skill map breadcrumb" className={styles.crumbs}>
            {path.map((n, i) => (
              <span key={n.id} className={styles.crumbGroup}>
                {i > 0 && <span className={styles.crumbSep}>/</span>}
                {i === path.length - 1 ? (
                  <span className={styles.crumbCurrent}>{n.name}</span>
                ) : (
                  <button
                    type="button"
                    className={styles.crumbButton}
                    onClick={() => setFocusId(n.id)}
                  >
                    {n.name}
                  </button>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className={styles.infoPanel} aria-live="polite">
          {hovered ? (
            <>
              <span className={styles.infoName}>{hovered.name}</span>
              <span className={styles.infoDesc}>
                {hovered.description?.trim() ? hovered.description : "—"}
              </span>
            </>
          ) : (
            <span className={styles.infoHint}>
              {isLeaf
                ? "This is a leaf skill — nothing more to zoom into."
                : "Hover a tile for details, click to zoom in."}
            </span>
          )}
        </div>
      </div>

      {/* ── Stage: the treemap itself ────────────────────────────────── */}
      <LayoutGroup id="skill-treemap">
        <div className={styles.stageOuter} ref={stageRef}>
          <motion.div
            key={current.id}
            layoutId={current.id}
            layout
            className={styles.stage}
            transition={easing.gentle}
          >
            <AnimatePresence>
              {tiles.map((tile) => {
                const clickable =
                  tile.node.children !== undefined && tile.node.children.length > 0;
                const intensity = 0.12 + 0.58 * (tile.weight / maxWeight);

                return (
                  <motion.button
                    key={tile.node.id}
                    layoutId={tile.node.id}
                    layout
                    type="button"
                    className={cn(styles.tile, clickable ? styles.tileFolder : styles.tileLeaf)}
                    style={
                      {
                        left: tile.x,
                        top: tile.y,
                        width: tile.width,
                        height: tile.height,
                        "--intensity": intensity,
                      } as CSSProperties
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={easing.gentle}
                    onClick={() => clickable && setFocusId(tile.node.id)}
                    onMouseEnter={() => setHoveredId(tile.node.id)}
                    onMouseLeave={() => setHoveredId((id) => (id === tile.node.id ? null : id))}
                    onFocus={() => setHoveredId(tile.node.id)}
                    onBlur={() => setHoveredId((id) => (id === tile.node.id ? null : id))}
                    aria-label={
                      clickable ? `${tile.node.name}, ${tile.weight} skills — zoom in` : tile.node.name
                    }
                  >
                    <span className={styles.tileLabel}>{tile.node.name}</span>
                    {clickable && tile.width > 70 && tile.height > 50 && (
                      <span className={styles.tileCount}>{tile.weight}</span>
                    )}
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </div>
  );
}

export default SkillTreemap;
