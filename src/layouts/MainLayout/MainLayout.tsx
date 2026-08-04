import { type ReactNode } from "react";
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
//   • Never contains portfolio content directly
// ─────────────────────────────────────────────────────────────────────────────

export interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useLocation();

  return (
    <div className={styles.layout}>
      <NavigationLayout>
        {navItems.map((item) => (
          <NavigationButton
            key={item.key}
            to={item.path}
            label={item.shortLabel ?? item.label}
            isActive={pathname === item.path}
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
