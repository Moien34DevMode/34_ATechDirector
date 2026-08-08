# Technical Director — Portfolio

An interactive portfolio for a Technical Director. Built as a scene-based React application, designed to feel more like a game UI than a traditional scrolling website.

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI rendering |
| TypeScript 5 | Type safety |
| Vite 5 | Build tool & dev server |
| CSS Modules | Scoped, co-located styles |
| Framer Motion | Scene transitions & animations |
| React Router v6 | Client-side routing |
| React Markdown + remark-gfm | Markdown article rendering |
| React Icons | Icon library |

---

## Project Structure

```
src/
├── assets/                  Static files (fonts, images, videos, markdown)
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   ├── videos/
│   └── markdown/            Long-form Markdown articles
│       ├── timeline/        One .md per timeline entry (optional)
│       ├── projects/        One .md per project case study (optional)
│       └── philosophy/      One .md per game philosophy article (optional)
│
├── components/              Generic, data-free reusable components
│   ├── ui/                  Primitive UI elements
│   │   ├── Button/
│   │   ├── Modal/
│   │   ├── Tooltip/
│   │   ├── LoadingOverlay/
│   │   ├── SceneTransition/
│   │   └── NavigationButton/
│   ├── timeline/
│   │   └── TimelineItem/
│   ├── projects/
│   │   └── ProjectCard/
│   ├── abilities/
│   │   └── AbilityGraph/
│   └── markdown/
│       └── MarkdownRenderer/
│
├── layouts/                 Structural wrappers (no content)
│   ├── MainLayout/          Root shell — provides nav slot + main area
│   ├── SceneLayout/         Full-screen scene wrapper with enter/exit anim
│   └── NavigationLayout/    Persistent navigation container
│
├── scenes/                  Each scene is a fully independent page
│   ├── Splash/              Entry gate (auto-advances or waits for input)
│   ├── Home/                Overview / hero / navigation hub
│   ├── Timeline/            Chronological career history
│   ├── Abilities/           Skills / proficiency visualisation
│   ├── Projects/            Portfolio of shipped & in-progress work
│   └── GamePhilosophy/      Ideas, manifestos, design thinking
│
├── hooks/                   Reusable React hooks
│   ├── useTheme.ts          Access design tokens in JS
│   ├── useAnimation.ts      Framer Motion variants + reduced-motion support
│   ├── useResponsive.ts     Reactive breakpoint detection
│   ├── useMarkdown.ts       Load a .md file from assets/markdown/
│   └── useNavigation.ts     Scene-aware routing helpers
│
├── services/
│   └── markdownLoader.ts    Cached Markdown file loader (import.meta.glob)
│
├── data/                    ALL portfolio content lives here (never in components)
│   ├── timeline.ts          Career history entries
│   ├── projects.ts          Project entries
│   ├── abilities.ts         Skill groups and proficiency levels
│   ├── gameIdeas.ts         Philosophy / concept entries
│   └── navigation.ts        Nav items array (drives NavigationLayout)
│
├── styles/                  Global styles only — no component styles here
│   ├── global.css           Entry point — imports all partials
│   ├── variables.css        CSS custom properties (mirrors theme.ts)
│   ├── reset.css            Modern CSS reset
│   ├── typography.css       Base element typography
│   └── utilities.css        Minimal utility classes (sr-only, flex-center…)
│
├── theme/                   Design token source of truth
│   ├── theme.ts             Colors, spacing, typography, radii, shadows, z-index
│   ├── breakpoints.ts       Breakpoint values + media query strings
│   └── animations.ts        Framer Motion variants and easing presets
│
├── context/
│   └── ThemeContext.tsx     Theme provider + hook (supports future theme switching)
│
├── router/
│   ├── routes.ts            Route path constants (ROUTES.HOME, etc.)
│   └── index.tsx            Lazy-loaded routes + AnimatePresence wiring
│
├── types/                   TypeScript interfaces for data structures
│   ├── common.types.ts
│   ├── timeline.types.ts
│   ├── project.types.ts
│   └── ability.types.ts
│
├── utils/
│   ├── cn.ts                className combiner
│   ├── formatDate.ts        ISO date string formatters
│   └── responsive.ts        Imperative breakpoint helpers (for non-React logic)
│
├── App.tsx                  Root component: BrowserRouter + ThemeProvider + MainLayout
├── main.tsx                 React DOM entry point
└── vite-env.d.ts            Vite type declarations + .md raw import type
```

---

## Architecture Decisions

### Scene-based routing
Each major section is a full React component that owns its layout, data wiring, and animations. Scenes are lazily loaded — only the active scene's JS is fetched. This keeps the initial bundle small and makes each scene independently modifiable without risking regressions elsewhere.

### Data-driven design
All portfolio content lives in `src/data/`. Components never contain strings, numbers, or media references. To add a project or timeline entry, you only touch a data file — no React component changes required.

### CSS Modules over utility frameworks
Every component co-locates its `.module.css` file. There are no global class conflicts and no framework-specific syntax to learn. Redesigning a component means changing one CSS file.

### Centralised theme
`src/theme/theme.ts` is the TypeScript source of truth for all design tokens. `src/styles/variables.css` mirrors these as CSS custom properties. Components consume CSS variables at runtime, meaning a full visual redesign only requires changing two files.

### Framer Motion via hooks
The `useAnimation()` hook wraps all Framer Motion variants. It automatically collapses animations to instant fades when the user has `prefers-reduced-motion: reduce` set — this costs nothing to implement everywhere and is the accessible default.

### GitHub Pages compatibility
`BrowserRouter` is used with `basename={import.meta.env.BASE_URL}`. `public/404.html` redirects deep links back to `index.html`. The `index.html` script restores the original path before React Router mounts. This is the battle-tested [rafgraph/spa-github-pages](https://github.com/rafgraph/spa-github-pages) approach.

---

## Adding Content

### Add a timeline entry
1. Open `src/data/timeline.ts`
2. Add a `TimelineEntry` object to the array
3. Optionally create `src/assets/markdown/timeline/your-entry.md` and set `markdownFile`

### Add a project
1. Open `src/data/projects.ts`
2. Add a `ProjectEntry` object to the array
3. Optionally create `src/assets/markdown/projects/your-project.md` and set `markdownFile`

### Add an ability group
1. Open `src/data/abilities.ts`
2. Add an `AbilityGroup` with its `AbilityEntry` items

### Add a philosophy entry
1. Open `src/data/gameIdeas.ts`
2. Add a `GameIdeaEntry` object
3. Optionally create `src/assets/markdown/philosophy/your-idea.md` and set `markdownFile`

---

## GitHub Pages Deployment

### Set your repository name

In `vite.config.ts`, update the `base` path:

```ts
// Change 'agamedirector' to your actual repository name
const base = mode === 'production' ? '/agamedirector/' : '/';
```

Or set it via `.env.production`:

```
VITE_BASE_PATH=/your-repo-name/
```

### Enable GitHub Pages in repository settings
1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Run TypeScript compiler without emitting |
| `npm run lint` | Run ESLint |

---

## Implementing a Scene

Each scene file follows this pattern:

```tsx
// src/scenes/YourScene/YourScene.tsx
import React from 'react';
import SceneLayout from '@layouts/SceneLayout/SceneLayout';
import { yourData } from '@data/yourData';
import YourComponent from '@components/category/YourComponent/YourComponent';
import styles from './YourScene.module.css';

function YourScene() {
  return (
    <SceneLayout sceneId="your-scene" title="Your Scene">
      <div className={styles.container}>
        {yourData.map((item) => (
          <YourComponent key={item.id} data={item} />
        ))}
      </div>
    </SceneLayout>
  );
}

export default YourScene;
```

`SceneLayout` handles enter/exit animations, full-screen sizing, and ARIA landmarks automatically.
