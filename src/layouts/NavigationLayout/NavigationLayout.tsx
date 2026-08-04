import { type ReactNode } from "react";
import { cn } from "@utils/cn";
import styles from "./NavigationLayout.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// NavigationLayout — persistent navigation shell.
//
// Desktop (≥ 768px): renders nav items as a horizontal row in the topbar.
// Mobile (< 768px):  hides the row and shows a hamburger button instead.
//                    Pressing the button toggles a slide-down drawer that
//                    contains the same nav links in a vertical stack.
//
// The drawer animation is pure CSS (max-height + opacity transition) so it
// works without any JS hydration timing dependencies.
//
// Usage in MainLayout:
//   <NavigationLayout isMobileOpen={open} onToggle={handleToggle}>
//     {navItems.map((item) => (
//       <NavigationButton key={item.key} to={item.path} label={item.label} />
//     ))}
//   </NavigationLayout>
// ─────────────────────────────────────────────────────────────────────────────

export interface NavigationLayoutProps {
  children: ReactNode;
  className?: string;
  isMobileOpen: boolean;
  onToggle: () => void;
}

function NavigationLayout({
  children,
  className,
  isMobileOpen,
  onToggle,
}: NavigationLayoutProps) {
  return (
    <nav className={cn(styles.nav, className)} aria-label="Main navigation">
      {/*
        Skip-navigation link — always the first focusable element.
        Screen reader / keyboard users can jump directly to content.
      */}
      <a
        href="#main-content"
        className={cn(styles.skipLink, "sr-only-focusable")}
      >
        Skip to main content
      </a>

      <div className={styles.inner}>
        {/* Desktop: horizontal flex row of nav links (hidden on mobile via CSS) */}
        <div className={styles.navItems} role="list">
          {children}
        </div>

        {/* Mobile: hamburger toggle button (hidden on desktop via CSS) */}
        <button
          className={cn(styles.menuBtn, isMobileOpen && styles.menuBtnOpen)}
          onClick={onToggle}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <span className={styles.line} aria-hidden="true" />
          <span className={styles.line} aria-hidden="true" />
          <span className={styles.line} aria-hidden="true" />
        </button>
      </div>

      {/* Mobile drawer — slides in from below the bar (hidden on desktop via CSS) */}
      <div
        id="mobile-nav-drawer"
        className={cn(styles.drawer, isMobileOpen && styles.drawerOpen)}
        aria-hidden={!isMobileOpen}
      >
        <div className={styles.drawerItems}>
          {children}
        </div>
      </div>
    </nav>
  );
}

export default NavigationLayout;
