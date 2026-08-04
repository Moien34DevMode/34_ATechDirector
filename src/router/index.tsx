import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ROUTES } from "./routes";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";

// ─────────────────────────────────────────────────────────────────────────────
// Lazy-loaded scenes
//
// Each scene is a separate dynamic import → separate JS chunk.
// Vite will only fetch a scene's code when the user first navigates to it.
// This keeps the initial bundle tiny and time-to-interactive fast.
// ─────────────────────────────────────────────────────────────────────────────

const Home = lazy(() => import("@scenes/Home/Home"));
const Timeline = lazy(() => import("@scenes/Timeline/Timeline"));
const Abilities = lazy(() => import("@scenes/Abilities/Abilities"));
const Projects = lazy(() => import("@scenes/Projects/Projects"));
const GamePhilosophy = lazy(
  () => import("@scenes/GamePhilosophy/GamePhilosophy"),
);

// ─────────────────────────────────────────────────────────────────────────────
// AppRouter
//
// `location` is passed to both <Routes> and <AnimatePresence> so that
// exiting scenes can finish their exit animation before the next scene mounts.
//
// The `key` prop on <Routes> tells AnimatePresence which scene changed.
// ─────────────────────────────────────────────────────────────────────────────

export function AppRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.TIMELINE} element={<Timeline />} />
          <Route path={ROUTES.ABILITIES} element={<Abilities />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.GAME_PHILOSOPHY} element={<GamePhilosophy />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}
