# Progress

## Current Status

Phase 2.6 Frontend UI Prototype is in progress with the Sabai Life Console direction.
Documentation maintenance is in progress to lock down responsive layout rules for `withBreakpoint`.

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
  - `MainLayout` now renders `FloatingTopNav` at AntD `md` and above.
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

## Current Task

Phase 2.6: Frontend UI Prototype for Sabai Life Console placeholder pages.

## Files Created Or Updated In This Task

- `ROADMAP.md`
- `PROGRESS.md`
- `DECISIONS.md`
- `UI_GUIDE.md`
- `apps/web/src/main.tsx`
- `apps/web/src/assets/sabai-life-visual.svg`
- `apps/web/src/hoc/withMainStore.tsx`
- `apps/web/src/modules/auth/pages/index.tsx`
- `apps/web/src/modules/dashboard/pages/index.tsx`
- `apps/web/src/modules/dashboard/mock.ts`
- `apps/web/src/layouts/main.tsx`
- `apps/web/src/store/MainStore.tsx`
- `apps/web/src/ui/components/FeatureCard.tsx`
- `apps/web/src/ui/layout/FloatingTopNav.tsx`
- `apps/web/src/ui/layout/MobileBottomNav.tsx`
- `apps/web/src/styles.css`
- `package.json`
- `AGENTS.md`

## Out Of Scope For This Task

- Docker Compose.
- Caddy.
- Database schema.
- Real auth implementation.
- API changes.
- Digital Vault feature implementation.
- Finance feature implementation.
- Reminder feature implementation.
- Task feature implementation.
- Per-component font overrides.

## Next Recommended Task

Finish the remaining Phase 2.6 visual states and responsive QA before starting Phase 3 backend foundation.

Before starting that task, read:

1. `PROJECT.md`
2. `MVP.md`
3. `TECH_STACK.md`
4. `ARCHITECTURE.md`
5. `ROADMAP.md`
6. `PROGRESS.md`
7. `DECISIONS.md`
