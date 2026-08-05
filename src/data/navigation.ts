import { ROUTES, type RouteKey } from '@router/routes';

/**
 * Navigation configuration.
 * The NavigationLayout and NavigationButton components read this array —
 * they never hard-code scene names or paths.
 */

export interface NavItem {
  /** Key matching a ROUTES entry — used for active-state detection */
  key: RouteKey;
  /** Full display label */
  label: string;
  /** Shorter label for constrained viewports */
  shortLabel?: string;
  /** Resolved route path */
  path: string;
}

export const navItems: NavItem[] = [
  {
    key:        'HOME',
    label:      'Home',
    path:       ROUTES.HOME,
  },
  {
    key:        'ABOUT',
    label:      'About Me',
    shortLabel: 'About',
    path:       ROUTES.ABOUT,
  },
  {
    key:        'ABILITIES',
    label:      'Skills',
    path:       ROUTES.ABILITIES,
  },
  {
    key:        'PROJECTS',
    label:      'Projects',
    path:       ROUTES.PROJECTS,
  },
  {
    key:        'GAME_PHILOSOPHY',
    label:      'Gaming Preferences',
    shortLabel: 'GP',
    path:       ROUTES.GAME_PHILOSOPHY,
  },
  {
    key:        'TIMELINE',
    label:      'Timeline',
    path:       ROUTES.TIMELINE,
  }
];
