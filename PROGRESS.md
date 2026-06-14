# Progress

## Current Status

Phase 4 MVP Modules is in progress.
The app shell now uses `/home` as the primary home route, with the old `/dashboard` path redirecting to `/home` for compatibility.
The first real module page is `งานที่ต้องทำ` at `/tasks`, implemented as a frontend mock with CRUD + UX before backend work.
The app now has a temporary frontend-only demo auth gate: a `localStorage` flag protects the main shell through React Router loaders, `/login` is its own route, and the top nav has a sign-out action. This is a throwaway gate to be replaced by Better Auth later.
The Vercel deployment path now has an SPA rewrite plus a Thai fallback 404 page so deep links do not hit a raw platform `NOT_FOUND`.
The repo rules now also spell out that feature pages should stay thin and split crowded JSX into smaller local components.
Frontend UI work now has an explicit AntD/Tailwind/CSS decision order so future AI/Codex runs use AntD layout first, Tailwind only for small utilities, and CSS only when it is the right tool for project-specific visuals.
The project rules now allow external UI and visual libraries when they clearly improve UX/UI quality, especially for landing pages, hero sections, illustrations, motion, charts, and polished visual showcases.
The app now has a public Step-by-Step landing page at `/landing` that explains Sabai through a day-in-the-life journey.
The landing page has been upgraded with real logo branding, `framer-motion` polish, code-native mini previews, product clarity, and trust messaging that stays inside MVP scope.

## Completed

- Created the initial project control document set:
  - `PROJECT.md`
  - `MVP.md`
  - `TECH_STACK.md`
  - `ARCHITECTURE.md`
  - `ROADMAP.md`
  - `PROGRESS.md`
  - `DECISIONS.md`
- Created the initial Bun workspace scaffold:
  - `apps/web` for React + Vite frontend.
  - `apps/api` for Hono backend.
  - Root TypeScript, lint, typecheck, and build scripts.
- Added frontend foundation:
  - React Router v7 route structure.
  - Ant Design `ConfigProvider`.
  - `theme.ts`.
  - Tailwind CSS v4 Vite setup.
  - TanStack Query provider.
  - Zustand vanilla store placeholder.
  - Login and dashboard placeholder pages.
- Added backend foundation:
  - Hono app entry.
  - Basic `/api/health` and `/api/status` endpoints.
  - Exported Hono app type for initial RPC typing.
- Started Phase 2.5 UI Visual Foundation:
  - Added Sabai glassmorphism visual guide.
  - Added soft emerald and mint Ant Design theme tokens.
- Added shared visual wrappers for page background, glass cards, ambient glow, page container, and empty state.
- Applied the visual foundation to login and dashboard placeholders.
- Removed the obsolete Ant Design React 19 compatibility patch now that the web app uses AntD v6.
- Completed Phase 2.5 with a shared `MotionCard` CSS-motion wrapper.
- Started Phase 2.6 Frontend UI Prototype:
  - Defined Sabai Life Console as the UI direction.
  - Added Life Hub bento layout with mock dashboard data.
  - Added floating top navigation and mobile bottom pill navigation.
  - Added feature and stat cards for the placeholder dashboard.
- Applied Thai-first global typography:
  - LINE Seed Sans TH is loaded in base CSS.
  - Ant Design theme token uses LINE Seed Sans TH with Noto Sans Thai, Inter, system-ui, and sans-serif fallback.
- Clarified project rules so responsive layout decisions in `apps/web/src/ui/layout/` must go through `withBreakpoint`.
- Refined Phase 2.6 visual scale:
  - Changed the radius system to a balanced scale.
  - Reduced overly round button, input, card, navigation, and search surfaces.
  - Verified desktop and mobile radius values in the in-app browser.
- Refined Phase 2.6 glass and accent direction:
  - Moved the visual system toward Clear Glass + Warm Accent.
  - Reduced heavy hover shadows and kept card lift subtle.
  - Added soft amber, peach, sky-mint, and lilac-sage variety to the dashboard placeholder cards.
  - Made the `ดูภาพรวม` feature action more colorful while keeping it calm and readable.
- Refined the `ดูภาพรวม` feature button to use AntD as the base with a dotted-grid glass treatment.

- Refined Phase 2.6 Thai-first dashboard usability:
  - Replaced primary navigation and dashboard section labels with clear Thai wording.
  - Added a soft dashboard life visual anchor.
  - Added a mock `สิ่งที่ควรดูวันนี้` priority strip.
  - Cleaned visible placeholder copy on dashboard and login pages.

- Migrated responsive navigation shell rendering from CSS media-query visibility to `withBreakpoint`:
  - `MainLayout` keeps `FloatingTopNav` rendered as the top feature island across screen sizes.
  - `MainLayout` now renders `MobileBottomNav` below AntD `md`.
  - Removed structural nav show/hide CSS and the mobile nav debug log.
- Refined `withMainStore` typing and wrapper metadata so TypeScript and IDE navigation have clearer component information.
- Normalized the `ดูภาพรวม` CTA to use the base AntD button variant so local and production styling stay consistent.

- Strengthened the feature CTA glass treatment with production-safe gradient, highlight, and shadow layers.
- Refined the feature CTA into a cooler frosted glass pill while keeping AntD `Button` as the base.
- Added feature CTA browser compatibility fixes:
  - Defined fallback angle custom properties outside `@property`.
  - Changed the WebKit mask composite value from legacy `xor` to `destination-out`.
  - Added fallback border styling when conic gradients or mask compositing are unavailable.

- Made the workspace runtime portable across machines:
  - Added `--bun` to the root `dev`, `typecheck`, and `build` scripts so Vite and `tsc` run on the Bun runtime instead of the host `node`.
  - Fixed the `Cannot find module @rollup/rollup-darwin-x64` error that came from an x64 `node` running on an arm64 machine.
  - Added a `.bun-version` file (`1.3.14`) and an `engines.bun >= 1.3.0` field.
  - Added a `.gitattributes` file with `eol=lf` and binary entries for cross-platform consistency.
  - Verified `bun run dev:web` starts Vite without the Rollup native binary error.

- Added a single-command monorepo dev workflow:
  - Added a root `dev` script that runs `apps/web` and `apps/api` together with `bun --bun run --filter '@sabai/*' dev`.
  - Kept `dev:web` and `dev:api` for running a single app.
  - Switched `typecheck` and `build` to `bun --bun run --filter '@sabai/*' ...` so they cover the whole monorepo and scale to future workspaces.
  - Used the `@sabai/*` filter instead of `*` to avoid the root package matching itself.
  - Used Bun's native `--filter` runner so no extra dependency such as `concurrently` was added.
  - Verified `bun run typecheck`, `bun run lint`, and `bun run build` all pass.

- Fixed the FeatureCard `ดูภาพรวม` CTA glass border breaking in production but not in dev:
  - Root cause: the esbuild CSS minifier dropped the standard `mask-composite: exclude` and reordered `-webkit-mask-composite` before the `mask`/`-webkit-mask` shorthand, which reset the composite to `add` so the `::after` overlay covered the whole button.
  - Rewrote the border mask from `mask`/`-webkit-mask` shorthand to `mask-image` + `mask-clip` longhands so no shorthand can reset `mask-composite`.
  - Verified in the built `dist` CSS that `mask-composite: exclude` and `-webkit-mask-composite` now survive minification.
  - Kept the existing `@supports` fallbacks unchanged.
- Removed the drop shadow under the FeatureCard CTA:
  - Deleted the `sabai-feature-action-shadow` element and its base + hover CSS.
  - Kept the `sabai-feature-action-shell` wrapper for left-aligning the button.
- Added per-app convenience scripts `build:web` and `preview:web` for building and previewing only `apps/web` from the repo root.
- Verified `bun run typecheck`, `bun run lint`, and `bun run build:web` all pass.
- Converted the dense dashboard placeholder into a lighter Home feature hub:
  - `/home` is now the primary post-login URL.
  - `/` and the old `/dashboard` route redirect to `/home`.
  - The visible page now shows `หน้าหลัก`, `เรื่องสำคัญของฉัน`, one helper line, and the four feature cards.
  - Removed the dashboard hero, search pill, priority strip, add button, summary cards, empty state, and feature-card metrics.
  - Changed the feature CTA from `ดูภาพรวม` to `เข้าไปดู`.
  - Added simple placeholder destination pages for the four feature-card routes.

- Started Phase 4 MVP Modules with the first real module page:
  - Replaced `/tasks` placeholder with `งานที่ต้องทำ`.
  - Added mock-only CRUD + UX for adding, editing, deleting, marking done, changing priority, and filtering tasks.
  - Updated the Home feature card and navigation wording from `วางแผน` to `งานที่ต้องทำ`.
  - Added Thai module wording rules so visible module labels describe what users do.
- Clarified the page composition rule in `AGENTS.md` so feature pages should stay thin and use smaller module-local components when the JSX gets crowded.
- Bound the app navigation to real routes:
  - Added route paths to `MainStore` menu items so top and bottom nav share one source of truth.
  - Changed top nav and mobile bottom nav to React Router links.
  - Added active state from the current location.
  - Verified top nav and mobile bottom nav navigation for `/home`, `/vault`, `/finance`, `/reminders`, and `/tasks`.
- Renamed the frontend module folder from `apps/web/src/modules/dashboard/` to `apps/web/src/modules/home/`.
- Kept `/dashboard` as a temporary compatibility redirect to `/home`.
- Fixed the Thai text regression from mojibake in Home and placeholder module pages:
  - Restored Thai copy for `/home` feature cards.
  - Restored Thai copy for `/vault`, `/finance`, and `/reminders` placeholder pages.
  - Verified `/finance`, `/vault`, and `/home` in the in-app browser with no `เธ`, `เน€`, or `โ€` mojibake signatures in rendered text.

## Current Task

Phase 4: Refine `งานที่ต้องทำ` row action controls to use AntD layout.

## Files Created Or Updated In This Task

- `ROADMAP.md`
- `PROGRESS.md`
- `apps/web/src/modules/tasks/components/TaskItemRow.tsx`
- `apps/web/src/modules/tasks/components/TaskSummaryCards.tsx`
- `apps/web/src/modules/tasks/styles/index.css`

## Out Of Scope For This Task

- Docker Compose.
- Caddy.
- Database schema.
- Real auth implementation.
- API changes.
- Digital Vault feature implementation.
- Finance feature implementation.
- Reminder feature implementation.
- Task backend implementation.
- Task persistence.
- Per-component font overrides.
- Vercel backend deployment.

## Task Update

- Replaced task row action layout classes with AntD `Flex` and `Space`.
- Removed the unused task row action CSS classes and the mobile override that moved controls out of the right side of the card.
- Kept task row visual CSS for the card surface, status rail, text, and tags because it owns project-specific treatment.
- Tightened `TaskSummaryCards` config typing so workspace typecheck passes.
- Kept the task module mock-only; no backend, API, database, dependency, or deployment changes were added.

## Next Recommended Task

Design and implement the Task Management backend foundation after the frontend flow is stable:

- Drizzle schema for user-owned tasks.
- Zod validation for create, update, filter, and delete inputs.
- Hono routes split through `routes.ts`, `schema.ts`, `service.ts`, `repository.ts`, and `types.ts`.
- Frontend `tasks/api.ts` using the shared Hono RPC client.

Before starting that task, read:

1. `PROJECT.md`
2. `MVP.md`
3. `TECH_STACK.md`
4. `ARCHITECTURE.md`
5. `ROADMAP.md`
6. `PROGRESS.md`
7. `DECISIONS.md`

## External UI Library Policy Update

- Updated `AGENTS.md` with an external UI and visual library policy that supersedes the older "external UI as last choice" rule.
- Kept Ant Design as the default for app workflow surfaces such as forms, tables, modals, drawers, and standard controls.
- Allowed external UI, animation, visualization, image, icon, and effect libraries when they improve polish, especially on landing pages and visual showcases.
- Added selection and implementation rules for TypeScript support, bundle cost, responsive behavior, accessibility, Thai-first copy, and avoiding tracking-heavy or paid hosted libraries without approval.
- Fixed the existing lint issue in `apps/web/src/modules/tasks/components/task-options.ts` by changing `BaseType` to a type-only import.
- No package was installed and no runtime behavior was changed.
- Verified `bun run typecheck`, `bun run lint`, and `bun run build` pass. The build still reports the existing large chunk warning for the web bundle.

## Step-by-Step Landing Page Update

- Added a public `/landing` route without changing the existing protected `/` to `/home` app flow.
- Created a feature-based landing module under `apps/web/src/modules/landing/`.
- Added a generated hero bitmap asset and optimized it for the web at `apps/web/src/modules/landing/assets/day-journey-hero.jpg`.
- Implemented the selected "ชีวิตวันนี้แบบ Step-by-Step" concept with morning tasks, midday appointments, evening finance, and night document care.
- Used AntD layout and controls for structure, with feature CSS reserved for full-bleed hero, glass surfaces, timeline treatment, and responsive visual polish.
- Kept the task out of scope for backend, auth, database, and dependency changes.
- Verified `/landing` on desktop and mobile with Chrome automation: hero image loads, CTA goes to `/login`, the journey anchor scrolls, and no horizontal overflow appears.
- Verified `bun run typecheck`, `bun run lint`, and `bun run build` pass. The build still reports the existing large JS chunk warning.

## Landing Brand And Interactive Journey Update

- Added `framer-motion` to the web app for landing-page motion and hover polish.
- Lazy-loaded the public `/landing` route so landing motion code is separated from the primary app bundle.
- Replaced text-only landing branding with the real app logo from `apps/web/src/assets/logo.png` in the navbar and hero brand seal.
- Expanded the day journey cards with code-native mini product previews for tasks, appointments, finance, and documents.
- Added product clarity cards for what Sabai helps users understand on the first page.
- Added trust cards that explicitly stay within MVP scope and avoid claiming AI, payment, or team features.
- Adjusted motion so content is never hidden before scrolling; browser verification confirms desktop and mobile content remains visible.
- Verified the lazy `/landing` route after the router change: logo and hero load, CTA goes to `/login`, the journey anchor scrolls, and no horizontal overflow appears.

## Mobile Navigation Stabilization Update

- Investigated the mobile-only symptom where switching tabs after scrolling to the bottom of `/tasks` could require a second tap.
- Identified the likely frontend cause as nested interactive bottom-nav markup (`Link` wrapping an AntD `Button`) interacting poorly with mobile tap handling after scroll.
- Restored `MainLayout` so `FloatingTopNav` renders on mobile as the feature island navbar.
- Changed `MobileBottomNav` so each tab is a single React Router `Link` styled as the tap target, instead of an anchor wrapping a button.
- Refined `MobileBottomNav` glass styling with stronger surface layering, clearer active state, readable labels, and stable tap targets.
- Added explicit mobile tap target sizing, `touch-action: manipulation`, and iPhone safe-area spacing for the bottom nav while keeping top spacing for the feature island navbar.
- Verified `antd lint ./src --format json`, `bun run typecheck`, `bun run lint`, and `bun run build` pass.

## Demo Auth Gate And Shell Wiring Update

This update records app-shell changes made directly in code so the documents match the repository.

- Added a temporary frontend-only demo auth gate:
  - `apps/web/src/modules/auth/session.ts` stores a single `sabai_demo_auth` flag in `localStorage` and exposes `isAuthenticated`, `signInDemo`, and `signOutDemo`.
  - `apps/web/src/router/middleware.ts` enforces access with loaders: `protectedLoader` guards the main shell and `loginLoader` redirects signed-in users away from `/login`.
  - `apps/web/src/router/index.tsx` wires `protectedLoader` on the `/` shell and `loginLoader` on `/login`.
- Reworked the login route:
  - `/login` is its own route rendered inside `LoginLayout`.
  - The login page shows a disabled real form clearly labeled as not connected to real auth, plus a `ไปหน้าหลักตัวอย่าง` button that calls `signInDemo` and navigates to `/home`.
- Added a sign-out action:
  - `FloatingTopNav` now uses `withRouter` + `withMainStore` + `withBreakpoint` and shows an `ออกจากระบบ` button that calls `signOutDemo` and navigates to `/login`.
- Added a shared `GlassButton` effect in `apps/web/src/ui/effects/GlassButton.tsx` wrapping AntD `Button` with the `sabai-glass-button` treatment.
- Confirmed navigation source of truth:
  - `apps/web/src/store/MainStore.tsx` holds the `tabs` menu (`หน้าหลัก`, `เอกสาร`, `การเงิน`, `นัดหมาย`, `งาน`) shared by `FloatingTopNav` and `MobileBottomNav` via `withMainStore`.
  - `withRouter` exposes `location`, `navigate`, and `params` for class components.

This work stays frontend-only and mock-only: no real auth, backend, database, or dependency changes were added.

## CSS Modularization Update (Co-location)

Broke up the 833-line `apps/web/src/styles.css` monolith so CSS lives with its owning component or module, matching Clean Architecture co-location.

- Trimmed `styles.css` to global base only: font/Tailwind imports, `:root` tokens, `@property`, `body`/`#root`, shared `@keyframes` (`sabai-fade-up`, `sabai-card-rise`), and the shared `.sabai-kicker` atom.
- Co-located effect CSS and added a local import in each component:
  - `ui/effects/GradientBackground.css`, `GlowOrb.css`, `GlassCard.css`, `MotionCard.css`, `GlassButton.css`.
- Co-located layout CSS:
  - `ui/layout/PageContainer.css` for the page container.
  - Moved top-nav and mobile bottom-nav CSS into `ui/layout/index.css`, now imported by both `FloatingTopNav` and `MobileBottomNav`.
- Co-located `ui/components/FeatureCard.css`.
- Added feature module styles: `modules/home/styles/index.css` and `modules/auth/styles/index.css` (login `sabai-soft-button`), each imported by its page.
- Removed confirmed-dead CSS (`.sabai-nav-note`, `.sabai-life-hero`, `.sabai-hero-grid`, `.sabai-life-visual-*`, `.sabai-priority-*`, `.sabai-page-head`, `.sabai-section-divider`, `.sabai-empty-placeholder`).
- Fixed a pre-existing lint error in `modules/tasks/components/task-options.ts` (`import type` for `BaseType`).
- Verified `bun run typecheck`, `bun run lint`, and `bun run build:web` all pass, and confirmed the relocated classes plus the `mask-composite: exclude` glass-button fix survive in the built `dist` CSS.

No runtime, dependency, backend, or behavior changes were introduced; this is a CSS organization refactor only.

## CSS Folder Cleanup For Shared `ui/`

Moved the co-located CSS out of the `ui/` folder roots into a `styles/` subfolder per group so each root holds `.tsx` only.

- `ui/effects/styles/`: `GradientBackground.css`, `GlowOrb.css`, `GlassCard.css`, `MotionCard.css`, `GlassButton.css`.
- `ui/layout/styles/`: `PageContainer.css`, `FloatingTopNav.css`, `MobileBottomNav.css`, and shared `nav.css`.
- `ui/components/styles/`: `FeatureCard.css`.
- Split the former `ui/layout/index.css` into `FloatingTopNav.css` (brand/aurora + top nav), `MobileBottomNav.css` (bottom nav), and `nav.css` (shared `.sabai-nav-button` states), imported by the matching components.
- Updated every component import to `./styles/<File>.css` and deleted the old root-level CSS files.
- `modules/*` already used `styles/`, so they were left unchanged.
- Verified `bun run typecheck`, `bun run lint`, and `bun run build:web` all pass; the built CSS bundle stayed at ~28.8 kB.

## Landing Interactive Product Showcase Update

- Refined `/landing` from a story-only landing page into a more interactive product showcase.
- Rewrote visible landing copy to be Thai-first and removed confusing product-process words such as `MVP`, `Journey`, and `preview` from user-facing text.
- Replaced the tight hero headline with a shorter Thai headline and increased Thai line-height so vowels and tone marks have more breathing room.
- Added a code-native interactive showcase panel that previews tasks, appointments, finance, and documents without adding backend APIs or screenshot assets.
- Added a final call-to-action band that reuses the landing hero image as a contextual background.
- Kept AntD as the layout/control foundation, used `framer-motion` for visual motion, and kept CSS focused on landing-specific visuals.

## Landing Trust Copy And CTA Spacing Update

- Refined the `/landing` trust section so it explains clarity, safety, and simplicity without sounding like internal project wording.
- Updated trust cards to focus on what Sabai helps with, account-owned data, and keeping the system easy to maintain.
- Added landing-specific CTA action classes to create better breathing room around the hero and final call-to-action buttons.
- Kept the work frontend-only; no route, auth, backend, database, or dependency changes were added.
