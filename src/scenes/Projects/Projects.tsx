import { useRef, useState, type CSSProperties, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuBriefcase,
  LuGraduationCap,
  LuUser,
  LuExternalLink,
  LuSlidersHorizontal,
  LuRotateCcw,
  LuChevronDown,
  LuArrowUp,
} from "react-icons/lu";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import ProjectCard from "@components/projects/ProjectCard/ProjectCard";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import Button from "@components/ui/Button/Button";
import { projects } from "@data/projects";
import type { ProjectCategory, ProjectEntry } from "@/types/project.types";
import { useMarkdown } from "@hooks/useMarkdown";
import { cn } from "@utils/cn";
import { staggerContainer, staggerItem } from "@theme/animations";
import styles from "./Projects.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Projects scene — the project portfolio.
//
// Projects are grouped by category and ordered by display priority:
// professional → personal → educational.
//
// Each card shows the title and key features, with a "Read Markdown" button
// that opens a Modal rendering the project's Markdown description via
// MarkdownRenderer. The whole card is also clickable — the button is only a
// convenience affordance.
//
// A side options panel lets the visitor tweak the display: toggle key
// features/thumbnails, snap the column size, group by category, and
// collapse/expand categories.
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_ORDER: ProjectCategory[] = [
  "professional",
  "personal",
  "educational",
];

const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; Icon: ComponentType<{ className?: string }> }
> = {
  professional: { label: "Professional", Icon: LuBriefcase },
  personal:     { label: "Personal",     Icon: LuUser },
  educational:  { label: "Educational",  Icon: LuGraduationCap },
};

const projectGroups = CATEGORY_ORDER.map((category) => ({
  category,
  items: projects.filter((p) => p.category === category),
})).filter((group) => group.items.length > 0);

const sortedProjects = CATEGORY_ORDER.flatMap((category) =>
  projects.filter((p) => p.category === category),
);

const MIN_COLUMNS = 1;
const MAX_COLUMNS = 4;
const DEFAULT_COLUMNS = 3;

function Projects() {
  const [selected, setSelected] = useState<ProjectEntry | null>(null);
  const [showHighlights, setShowHighlights] = useState(true);
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [groupByCategory, setGroupByCategory] = useState(true);
  const [showCounts, setShowCounts] = useState(true);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [collapsedCategories, setCollapsedCategories] = useState<
    Set<ProjectCategory>
  >(new Set());

  const { content, isLoading, error } = useMarkdown(selected?.markdownFile);

  const scrollRef = useRef<HTMLDivElement>(null);

  const gridStyle = { "--grid-cols": columns } as CSSProperties;

  const resetOptions = () => {
    setShowHighlights(true);
    setShowThumbnails(true);
    setGroupByCategory(true);
    setShowCounts(true);
    setColumns(DEFAULT_COLUMNS);
    setCollapsedCategories(new Set());
  };

  const toggleCategory = (category: ProjectCategory) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const collapseAll = () => {
    setCollapsedCategories(new Set(projectGroups.map((g) => g.category)));
  };

  const expandAll = () => {
    setCollapsedCategories(new Set());
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cardProps = { showHighlights, showThumbnails, onClick: setSelected };

  return (
    <SceneLayout sceneId="projects" title="Projects">
      <div className={styles.container} ref={scrollRef}>
        {/* ── Header ── */}
        <motion.header
          className={styles.header}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={staggerItem}>
            Portfolio
          </motion.p>
          <motion.h1 className={styles.title} variants={staggerItem}>
            Projects
          </motion.h1>
        </motion.header>

        <div className={styles.body}>
          {/* ── Main content ── */}
          <div className={styles.content}>
            {groupByCategory
              ? projectGroups.map(({ category, items }) => {
                  const { label, Icon } = CATEGORY_META[category];
                  const isCollapsed = collapsedCategories.has(category);
                  return (
                    <motion.section
                      key={category}
                      className={styles.section}
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      aria-label={`${label} projects`}
                    >
                      <motion.h2
                        className={styles.sectionHeading}
                        variants={staggerItem}
                      >
                        <button
                          type="button"
                          className={styles.collapseBtn}
                          onClick={() => toggleCategory(category)}
                          aria-expanded={!isCollapsed}
                          aria-label={`${isCollapsed ? "Expand" : "Collapse"} ${label} projects`}
                        >
                          <LuChevronDown
                            className={cn(
                              styles.collapseIcon,
                              isCollapsed && styles.collapseIconClosed,
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        <Icon className={styles.sectionIcon} aria-hidden="true" />
                        {label}
                        {showCounts && (
                          <span className={styles.sectionCount}>
                            {items.length}
                          </span>
                        )}
                      </motion.h2>

                      <AnimatePresence initial={false}>
                        {!isCollapsed && (
                          <motion.div
                            className={styles.grid}
                            style={gridStyle}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            {items.map((project) => (
                              <ProjectCard
                                key={project.id}
                                project={project}
                                {...cardProps}
                              />
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.section>
                  );
                })
              : (
                <motion.section
                  className={styles.section}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  aria-label="All projects"
                >
                  <div className={styles.grid} style={gridStyle}>
                    {sortedProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        {...cardProps}
                      />
                    ))}
                  </div>
                </motion.section>
              )}

            {/* ── Back to top ── */}
            <div className={styles.backToTop}>
              <Button
                variant="secondary"
                size="md"
                leftIcon={<LuArrowUp aria-hidden="true" />}
                onClick={scrollToTop}
                className={styles.backToTopBtn}
              >
                Jump Back to Top
              </Button>
            </div>
          </div>

          {/* ── Options panel ── */}
          <aside className={styles.panel} aria-label="Display options">
            <div className={styles.panelHeader}>
              <LuSlidersHorizontal
                className={styles.panelIcon}
                aria-hidden="true"
              />
              <h2 className={styles.panelTitle}>Display</h2>
            </div>

            <div className={styles.panelGroup}>
              <p className={styles.panelGroupLabel}>Cards</p>

              <label className={styles.optionRow}>
                <span className={styles.optionLabel}>Project Highlights</span>
                <input
                  type="checkbox"
                  checked={showHighlights}
                  onChange={(e) => setShowHighlights(e.target.checked)}
                  className={styles.checkbox}
                />
              </label>

              <label className={styles.optionRow}>
                <span className={styles.optionLabel}>Thumbnails</span>
                <input
                  type="checkbox"
                  checked={showThumbnails}
                  onChange={(e) => setShowThumbnails(e.target.checked)}
                  className={styles.checkbox}
                />
              </label>
            </div>

            <div className={styles.panelGroup}>
              <p className={styles.panelGroupLabel}>Layout</p>

              <label className={styles.optionRow}>
                <span className={styles.optionLabel}>Category Sections</span>
                <input
                  type="checkbox"
                  checked={groupByCategory}
                  onChange={(e) => setGroupByCategory(e.target.checked)}
                  className={styles.checkbox}
                />
              </label>

              {groupByCategory && (
                <label className={styles.optionRow}>
                  <span className={styles.optionLabel}>Section Counts</span>
                  <input
                    type="checkbox"
                    checked={showCounts}
                    onChange={(e) => setShowCounts(e.target.checked)}
                    className={styles.checkbox}
                  />
                </label>
              )}

              {groupByCategory && (
                <div className={styles.panelActions}>
                  <button
                    type="button"
                    className={styles.panelActionBtn}
                    onClick={collapseAll}
                  >
                    Collapse All
                  </button>
                  <button
                    type="button"
                    className={styles.panelActionBtn}
                    onClick={expandAll}
                  >
                    Expand All
                  </button>
                </div>
              )}

              <div className={styles.optionSlider}>
                <span className={styles.optionLabel}>Column Size</span>
                <div className={styles.sliderWrap}>
                  <input
                    type="range"
                    min={MIN_COLUMNS}
                    max={MAX_COLUMNS}
                    step={1}
                    value={columns}
                    onChange={(e) => setColumns(Number(e.target.value))}
                    className={styles.slider}
                    aria-label="Column Size"
                  />
                  <span className={styles.sliderValue}>{columns}</span>
                </div>
              </div>
            </div>

            <div className={styles.panelFooter}>
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<LuRotateCcw aria-hidden="true" />}
                onClick={resetOptions}
              >
                Reset
              </Button>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Project detail modal ── */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? "Project Details"}
        className={styles.modal}
      >
        <div className={styles.modalBody}>
          {isLoading ? (
            <LoadingOverlay
              fullScreen={false}
              message="Loading project details…"
            />
          ) : error ? (
            <p className={styles.modalMessage}>
              Failed to load project details.
            </p>
          ) : (
            <>
              {content && <MarkdownRenderer content={content} />}

              {selected?.links && selected.links.length > 0 && (
                <div className={styles.modalLinks}>
                  {selected.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.modalLink}
                    >
                      {link.label}
                      <LuExternalLink
                        className={styles.modalLinkIcon}
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </Modal>
    </SceneLayout>
  );
}

export default Projects;
