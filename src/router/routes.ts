/**
 * Central route registry.
 *
 * All scene paths live here. Never hard-code route strings in components.
 * Import ROUTES and reference keys (ROUTES.HOME, ROUTES.TIMELINE, etc.).
 */

export const ROUTES = {
  HOME:            '/',
  TIMELINE:        '/timeline',
  ABILITIES:       '/abilities',
  PROJECTS:        '/projects',
  GAME_PHILOSOPHY: '/game-philosophy',
} as const;

export type RouteKey  = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
