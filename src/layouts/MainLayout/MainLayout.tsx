import { type ReactNode, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationLayout from "@layouts/NavigationLayout/NavigationLayout";
import NavigationButton from "@components/ui/NavigationButton/NavigationButton";
import { navItems } from "@data/navigation";
import styles from "./MainLayout.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// MainLayout — the outermost structural shell of the application.
//
// Responsibilities:
//   • Provides the full-screen container that all scenes live inside
//   • Renders the persistent NavigationLayout topbar
//   • Owns the mobile drawer open/close state and passes it down
//   • Closes the drawer on route change
//   • Never contains portfolio content directly
// ─────────────────────────────────────────────────────────────────────────────

export interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close the mobile drawer whenever the route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  function handleNavToggle() {
    setIsMobileOpen((prev) => !prev);
  }

  return (
    <div className={styles.layout}>
      <NavigationLayout isMobileOpen={isMobileOpen} onToggle={handleNavToggle}>
        {navItems.map((item) => (
          <NavigationButton
            key={item.key}
            to={item.path}
            label={item.shortLabel ?? item.label}
            isActive={pathname === item.path}
            // Close the mobile drawer when a nav link is tapped
            onClick={() => setIsMobileOpen(false)}
          />
        ))}
      </NavigationLayout>

      <main className={styles.main} id="main-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
