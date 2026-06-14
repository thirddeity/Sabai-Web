# Decisions

## Decision Log

### 2026-06-12: Co-locate CSS with its owning component or module

Decision:

- Split the global `apps/web/src/styles.css` monolith so each visual component or feature owns its CSS file and imports it directly.
- Keep `styles.css` for global base only: font/Tailwind imports, `:root` tokens, `@property`, `body`/`#root`, shared `@keyframes`, and truly shared atoms used across pages (`.sabai-kicker`).
- Co-locate visual primitives in a `styles/` subfolder inside each shared `ui/` directory, one CSS file per component: `ui/effects/styles/{GradientBackground,GlowOrb,GlassCard,MotionCard,GlassButton}.css`, `ui/layout/styles/{PageContainer,FloatingTopNav,MobileBottomNav,nav}.css`, and `ui/components/styles/FeatureCard.css`.
- Keep the `.css` out of the `ui/` folder roots so each root holds `.tsx` only and stays easy to scan.
- App-shell nav CSS that is shared by both navs lives in `ui/layout/styles/nav.css` and is imported by both `FloatingTopNav` and `MobileBottomNav`; component-specific nav CSS lives in its own file.
- Keep feature CSS in its module: `modules/home/styles/index.css`, `modules/auth/styles/index.css`, `modules/tasks/styles/index.css`.
- Each split CSS file must be imported by the component or page that owns it so the styles load whenever that UI renders.
- Remove confirmed-dead CSS that no `.tsx` references.

Reason:

- An 833-line global stylesheet made UI review, ownership, and safe edits hard, and drifted away from the project rule that feature CSS lives inside its module.
- Co-location matches the Clean Architecture goal of keeping each unit's concerns together and makes future UI/UX review per screen far easier.

Impact:

- New visual components/modules should ship their own CSS file inside a `styles/` subfolder and import it locally, not append to `styles.css`.
- The `ui/` folder roots (`effects`, `layout`, `components`) should contain `.tsx` only; their CSS lives under `ui/<group>/styles/`.
- Only global tokens, shared keyframes, and shared atoms belong in `styles.css`.
- Shared `@keyframes` (`sabai-fade-up`, `sabai-card-rise`) and `@property` stay global because multiple co-located files depend on them.
- Removed dead classes: `.sabai-nav-note`, `.sabai-life-hero`, `.sabai-hero-grid`, `.sabai-life-visual-*`, `.sabai-priority-*`, `.sabai-page-head`, `.sabai-section-divider`, `.sabai-empty-placeholder`.

### 2026-06-12: Use a temporary localStorage demo auth gate before real auth

Decision:

- Add a temporary client-side demo auth gate in `apps/web/src/modules/auth/session.ts` using a single `localStorage` flag (`sabai_demo_auth`).
- Expose `isAuthenticated`, `signInDemo`, and `signOutDemo` helpers.
- Enforce access with React Router loaders: `protectedLoader` guards the main app and `loginLoader` keeps signed-in users out of `/login`.
- Render `/login` as its own route under `LoginLayout`, with a disabled real form and a `ไปหน้าหลักตัวอย่าง` button that calls `signInDemo` and navigates to `/home`.
- Add a sign-out action (`ออกจากระบบ`) in `FloatingTopNav` that calls `signOutDemo` and navigates back to `/login`.

Reason:

- The app shell needs a realistic login/logout flow and protected-route behavior to design pages against, without building Better Auth yet.
- A loader-based gate matches the project rule that route guards use loaders, not HOCs or `window.location`.
- A single flag keeps the demo gate trivial to remove when Better Auth lands.

Impact:

- This is a throwaway, frontend-only gate. It provides no real security and must be replaced by Better Auth before any real user data exists.
- The login form stays disabled and clearly labeled as not connected to real auth.
- When real auth is added, replace `session.ts` and the loaders with Better Auth session checks; the loader and `FloatingTopNav` sign-out wiring can stay.

### 2026-06-12: Add a shared GlassButton effect on top of AntD Button

Decision:

- Add `apps/web/src/ui/effects/GlassButton.tsx` as a thin wrapper over AntD `Button` that applies the `sabai-glass-button` treatment and defaults to `size="large"` and `type="text"`.

Reason:

- The demo login CTA and the top-nav sign-out button need a reusable glass button instead of repeating decorative classes per call site.
- Keeping AntD `Button` as the base preserves behavior and accessibility, consistent with the existing feature-CTA decision.

Impact:

- Reuse `GlassButton` for glass-styled actions instead of re-styling raw AntD buttons.
- The shared glass styling lives in CSS keyed by `sabai-glass-button`.

### 2026-06-14: Landing page uses logo branding and interactive motion

Decision:

- Use the real app logo from `apps/web/src/assets/logo.png` in the landing navbar and hero brand seal.
- Add `framer-motion` for landing-page motion, limited to soft reveal, hover lift, and interactive polish.
- Lazy-load the `/landing` route so `framer-motion` and landing-specific code do not inflate the initial app route bundle.
- Keep landing previews code-native instead of screenshot-based so they are easy to maintain.
- Add product clarity and trust sections that explain the MVP without claiming AI, payment, or team features.

Reason:

- The owner wanted the landing page to combine brand-forward polish, interactive day journey, and some trust/product clarity.
- The real logo gives the page a stronger product identity than text-only branding.
- `framer-motion` is justified by the updated external UI library rule because it improves landing-page polish without changing backend or app workflow surfaces.

Impact:

- Future landing animation should stay subtle and must not hide content before scroll.
- Landing-specific visual dependencies should stay route-scoped or lazy-loaded when practical.
- New landing content should keep Thai-first wording and avoid selling features outside MVP.
- The landing page remains public at `/landing`; `/` stays protected for now.

### 2026-06-14: Landing page uses a Step-by-Step day journey

Decision:

- Add a public landing page at `/landing`.
- Use the "ชีวิตวันนี้แบบ Step-by-Step" direction to explain Sabai through a day-in-the-life journey: morning tasks, midday appointments, evening finance, and night document care.
- Keep `/` protected and still redirecting to `/home` for now so the existing app flow is not changed unexpectedly.
- Use a generated bitmap hero image as the first-viewport visual anchor and keep visible copy Thai-first.

Reason:

- The owner chose the Step-by-Step landing concept because it explains the product through everyday life rather than abstract feature lists.
- A public `/landing` route lets the new page be reviewed without risking current app navigation or auth behavior.
- A real visual asset makes the page feel more attractive and emotionally grounded than a text-only layout.

Impact:

- Future landing work should continue the guided day-journey narrative unless a new design decision replaces it.
- Later, `/` can be moved from protected redirect to public landing once auth and product flow are ready.
- Landing visuals may use external libraries or generated assets when they improve polish.

### 2026-06-14: External UI and visual libraries are allowed for UX/UI polish

Decision:

- Allow external UI, animation, visualization, image, icon, and effect libraries when they clearly improve UX/UI quality, visual polish, interaction quality, or delivery speed.
- Keep Ant Design as the default foundation for app workflow surfaces such as forms, tables, drawers, modals, layout primitives, feedback states, and standard controls.
- Treat external libraries as first-class options for landing pages, hero sections, marketing surfaces, empty states, illustrations, advanced motion, charts, visual effects, and polished feature previews.
- Require new dependencies to be explained before installation, including purpose, why existing tools are not enough, bundle/backend impact, and maintenance risk.

Reason:

- The product needs a more attractive and emotionally engaging UI, especially for a future landing page.
- A strict "external UI library last" rule can slow down visual quality and make the app feel less polished than the owner wants.
- The project can stay MVP-sized while still using focused, well-chosen visual libraries.

Impact:

- Future landing-page and high-polish UI work may choose external libraries earlier in the design process.
- Existing AntD-based workflow screens do not need to be replaced wholesale.
- Reviews should evaluate whether a library improves user experience enough to justify its bundle and maintenance cost.

### 2026-06-12: Frontend UI work must choose AntD before Tailwind and CSS

Decision:

- Use Ant Design components and props first for frontend layout and standard UI surfaces.
- Use Tailwind only for small targeted utilities.
- Use feature CSS only for project-specific visual treatment or cases AntD/Tailwind do not express cleanly.
- Do not add CSS grid/flex layout classes when AntD `Row`, `Col`, `Flex`, `Space`, or responsive props can express the layout directly.
- Before adding a new CSS class, explain why AntD props or a small Tailwind utility are not the better fit.

Reason:

- The project uses Ant Design as the main UI system and Tailwind as a limited utility layer.
- Layout classes in feature CSS make future UI work drift away from the project rules and create avoidable review debt.
- A short decision order gives future AI/Codex runs a concrete checklist before writing UI code.

Impact:

- Future frontend UI tasks must summarize the AntD/Tailwind/CSS choice before editing.
- Review should reject CSS classes that only duplicate AntD layout behavior.
- CSS remains appropriate for glass, gradient, shadow, pseudo-element, animation, and repeated Sabai visual patterns.

### 2026-06-12: Mobile top island stays while bottom nav uses one interactive element per tab

Decision:

- Render each mobile bottom navigation tab as a single React Router `Link` tap target.
- Do not nest Ant Design `Button` inside `Link` for mobile shell navigation.
- Keep `FloatingTopNav` rendered on mobile as the feature island navbar.
- Give the mobile bottom nav explicit tap target height, `touch-action: manipulation`, safe-area-aware bottom spacing, and a clear glass active state.

Reason:

- Nested interactive markup can behave inconsistently on touch browsers, especially immediately after viewport scrolling or inertial scroll.
- Keeping each bottom tab as one link preserves route semantics and reduces tap ambiguity without removing the mobile top island.
- Safe-area-aware spacing keeps the tab bar away from iOS browser/home indicators.

Impact:

- Future mobile shell nav items should be links styled as buttons, not links wrapping buttons.
- `FloatingTopNav` is part of the mobile app shell and should not be removed when refining bottom navigation.
- AntD `Button` remains appropriate for real actions, but route navigation tabs should prefer a single link element.

### 2026-06-12: Task summary art uses separate transparent glass icons

Decision:

- Use four separate transparent PNG assets for task summary cards instead of one sprite sheet.
- Use a glass icon style for the summary art so it fits the Sabai glass UI direction.
- Keep labels, counts, and color coding as the primary way to communicate task state.

Reason:

- Separate files are easier to replace per card and avoid fragile sprite positioning.
- Transparent assets sit more naturally inside glass cards than the previous solid-background clay sprite.

Impact:

- `TaskSummaryCards` should import each summary icon directly.
- Future summary art changes can replace one PNG without touching the other cards.
- Generated images must be kept small enough for UI use and should not include text.

### 2026-06-11: Task priority uses two clear levels

Decision:

- Use only two task priority levels in the MVP UI: `medium` for `ปกติ` and `high` for `สำคัญมาก`.
- Show `ปกติ` with green and `สำคัญมาก` with red.
- Keep task status colors separate from priority colors so users can read workflow state and importance independently.

Reason:

- Three levels made `รอได้` ambiguous because it could mean either status or priority.
- Two priority levels are easier for Thai users of many ages to scan and choose quickly.

Impact:

- Task forms should only offer `ปกติ` and `สำคัญมาก`.
- `รอได้` must remain a task status, not a priority.
- Future backend task schema should not add a low-priority value unless there is a clear product need.

### 2026-06-11: Task status is separate from task priority

Decision:

- Use a dedicated `TaskStatus` value for task workflow state: `todo`, `waiting`, and `done`.
- Keep `TaskPriority` as a separate value for importance: `high` and `medium`.
- Let the task list filter by `ต้องทำ`, `รอได้`, `สำคัญ`, `ทำเสร็จแล้ว`, and `ทั้งหมด`.

Reason:

- `รอได้` is a workflow state users expect to filter directly, not only a priority hint.
- Separating status from priority keeps the task UI easier to understand and prepares the future backend schema for clearer data.

Impact:

- Task rows should render and update `status` directly.
- The checkbox toggles between `done` and `todo`.
- The `สำคัญ` filter should continue to mean high-priority unfinished work.

### 2026-06-11: Use `home` as the frontend home module name

Decision:

- Rename the frontend `dashboard` module folder to `home`.
- Use `/home` as the primary app home route.
- Keep `/dashboard` as a temporary redirect to `/home`.

Reason:

- The current page is a lightweight personal home hub, not an enterprise-style dashboard.
- Keeping the old route as a redirect avoids breaking existing links during the rename.

Impact:

- Frontend imports should use `@/modules/home/...`.
- Primary navigation should point to `AppPath.home`.
- Remove the `/dashboard` redirect only after old links no longer matter.

### 2026-06-10: Create project control documents before app code

Decision:

- Start the project by creating documentation that controls scope, stack, architecture, roadmap, progress, and project decisions.

Reason:

- The project starts from zero and needs repository files to become the source of truth before implementation begins.

Impact:

- No app scaffold or feature code should be written before these documents exist.
- Future tasks must read these documents before implementation.

### 2026-06-10: MVP has no AI

Decision:

- Do not include AI features in the MVP.

Reason:

- The MVP must stay simple, low budget, and personally usable first.

Impact:

- Any AI assistant, AI search, summarization, chat, extraction, or automation feature is out of scope until after MVP stability.

### 2026-06-10: Use managed low-cost infrastructure

Decision:

- Use managed services such as Supabase Free or Neon Free for PostgreSQL and Cloudflare Pages / Workers for deployment.

Reason:

- The project owner should not need to maintain backend infrastructure early.

Impact:

- No VPS, Docker Compose, Caddy, Redis, queues, microservices, or Kubernetes in the MVP.

### 2026-06-10: Frontend prefers React Class Component

Decision:

- Use React Class Component as the main frontend component style.

Reason:

- The project prioritizes readable flow and maintainability for the owner.

Impact:

- Hooks should be isolated in HOCs or small wrappers when needed.

### 2026-06-10: Backend modules must be split by responsibility

Decision:

- Each backend feature must separate `routes.ts`, `schema.ts`, `service.ts`, `repository.ts`, and `types.ts`.

Reason:

- This keeps backend code clear and easier to learn.

Impact:

- Route handlers should not contain large database query logic or hidden business rules.

### 2026-06-10: Use LINE Seed Sans TH for Thai-first UI typography

Decision:

- Use LINE Seed Sans TH as the primary web UI font, with Noto Sans Thai, Inter, system-ui, and sans-serif as fallbacks.

Reason:

- The product is for Thai users and needs a clean, friendly, readable, soft interface that does not feel too corporate.

Impact:

- Font family should be applied globally through Ant Design theme tokens and base CSS.
- Feature components should not repeat `font-family` declarations unless there is a clear future exception.

### 2026-06-10: Use Clear Glass + Warm Accent for Sabai Life Console

Decision:

- Use clear glass surfaces with soft emerald as the base and warm amber/peach as a supporting accent.

Reason:

- The UI should feel more like a personal life hub than a green-only admin dashboard, while staying calm and readable for all ages.

Impact:

- Glass cards should use translucent white surfaces, subtle border highlights, and restrained shadows.
- Feature cards may mix emerald, amber, sky-mint, and soft lilac-sage tints.
- Important placeholder actions can use a warm filled treatment instead of a plain ghost button.

### 2026-06-10: Use AntD as the base for decorative feature actions

Decision:

- Keep feature CTA buttons built on Ant Design `Button` and layer decorative glass styling on top instead of resetting to a raw custom button.

Reason:

- This preserves AntD behavior, accessibility, and sizing while still allowing the Sabai visual language to feel distinctive.

Impact:

- Future feature CTA buttons should start from AntD `Button` and add local wrappers or pseudo-elements for gloss, border light, and dotted-grid decoration.
- Avoid `all: unset` on AntD buttons for this pattern unless there is a very specific reason.

### 2026-06-10: Use clear Thai labels for primary UI

Decision:

- Use clear Thai wording as the default for primary navigation, dashboard headings, and important placeholder labels.

Reason:

- Sabai is intended for Thai users of many ages, so important labels should be understandable without knowing product or dashboard terminology.

Impact:

- Keep `Sabai` as the brand name, but avoid primary labels such as `Life Hub`, `Modules`, `Today Summary`, `Hub`, and `More`.
- Dashboard labels should use concrete Thai words such as `หน้าหลัก`, `ค้นหา`, `วันนี้`, `เมนู`, `เรื่องสำคัญของฉัน`, and `สรุปวันนี้`.
- Placeholder copy should clearly say when data is mocked or when auth/backend is not connected.

### 2026-06-11: Responsive layout decisions must use `withBreakpoint`

Decision:

- Treat `withBreakpoint` as the default mechanism for responsive layout decisions in the web app.
- Keep `Grid.useBreakpoint()` inside the shared HOC only.
- Allow CSS media queries only for minor visual tweaks, not for deciding whether layout shells render.

Reason:

- The layout shell must stay predictable and should not drift into ad hoc media-query behavior that hides or swaps structural components.

Impact:

- Components under `apps/web/src/ui/layout/` should use breakpoint state from `withBreakpoint` when they need mobile/desktop differences.
- `FloatingTopNav`, `MobileBottomNav`, `PageContainer`, and similar shells should not rely on `styles.css` to control structural visibility.

### 2026-06-11: Use AntD breakpoints for app nav shell behavior

Decision:

- Keep `FloatingTopNav` rendered as the top feature island across screen sizes.
- Show `MobileBottomNav` when `screens.md` is false.
- Keep the full top navigation links inside `FloatingTopNav` gated by the component's existing larger-screen logic.

Reason:

- The full desktop top nav links include five primary actions, so they should not be forced into small tablet or phone widths.
- The mobile top island still provides brand and account actions, while the bottom nav carries primary route switching.
- Using AntD breakpoints keeps shell behavior aligned with `withBreakpoint`.

Impact:

- CSS may still adjust spacing and visual details at small widths.
- CSS must not decide whether bottom navigation exists.

### 2026-06-11: Use the base AntD button variant for the FeatureCard CTA

Decision:

- Render the `ดูภาพรวม` CTA with the base AntD `Button` variant instead of `primary`.

Reason:

- The `primary` variant can pick up theme/runtime styling differences between local dev and production builds.

Impact:

- `FeatureCard` CTA styling should come from the local decorative CSS shell rather than AntD primary color behavior.
- Keep state styling explicit for hover, active, focus-visible, and disabled states.

### 2026-06-11: Avoid fragile mask-based glass borders on the FeatureCard CTA

Decision:

- Use layered gradients, inset highlights, and simple pseudo-element borders for the `เธ”เธนเธ เธฒเธเธฃเธงเธก` CTA glass treatment.

Reason:

- The previous mask-composite border effect could render too subtly or inconsistently in production.

Impact:

- Future CTA glass refinements should prefer production-safe background, shadow, and border layers over mask-composite effects.

### 2026-06-11: FeatureCard CTA uses a frosted raised pill style

### 2026-06-11: Task rows use explicit status tags instead of a confirm dialog

Decision:

- Show task completion state with visible Thai status tags such as `ยังไม่เสร็จ` and `เสร็จแล้ว`.
- Keep the checkbox as the direct action for toggling task completion.
- Do not add a confirm dialog for marking a task done or undoing it in the MVP UI.

Reason:

- The task list should stay quick to scan and quick to use.
- A confirm step would slow down one of the most common actions in the module.

Impact:

- `renderTaskItem` should include a status tag alongside the priority tag.
- Completed tasks can still use subtle muted styling, but the status must remain obvious at a glance.

Decision:

- Style the `เธ”เธนเธ เธฒเธเธฃเธงเธก` CTA as a cool frosted glass pill while keeping AntD `Button` as the underlying component.

Reason:

- The desired reference is a raised gray-blue glass pill, not the warmer amber glass treatment used previously.

Impact:

- Avoid `all: unset` and keep AntD button behavior.
- Keep amber tint out of this CTA and use subtle gray-blue translucency, bevel, and lower shadow instead.

### 2026-06-11: FeatureCard CTA needs explicit browser fallbacks

Decision:

- Keep the frosted CTA border effect, but provide CSS fallbacks for environments without reliable `@property`, `conic-gradient`, or mask-composite support.
- Use `-webkit-mask-composite: destination-out` instead of the legacy `xor` value for the CTA border mask.

Reason:

- Some production-like browser environments can ignore `@property` initial values or render mask composition differently, which can remove or flatten the glass border effect.

Impact:

- The CTA can keep its glass style in capable browsers while falling back to a simpler visible border in less capable environments.
- Future decorative CSS should define normal custom-property defaults when using `@property`-registered values.

### 2026-06-11: Use mask longhands for the FeatureCard CTA glass border

Decision:

- Build the `ดูภาพรวม` CTA `::after` glass border with `mask-image` + `mask-clip` longhands plus `mask-composite` / `-webkit-mask-composite`, instead of the `mask` / `-webkit-mask` shorthand.

Reason:

- The production build looked broken while dev looked correct. Inspecting the built `dist` CSS showed the esbuild CSS minifier dropped the standard `mask-composite: exclude` and moved `-webkit-mask-composite` before the `mask`/`-webkit-mask` shorthand. Because the shorthand resets `mask-composite` to `add`, the cutout failed and the dark conic-gradient `::after` covered the whole button.
- Using longhands removes the shorthand that resets `mask-composite`, so the effect survives minification regardless of declaration order.

Impact:

- This supersedes the earlier direction to avoid mask-based glass borders; the mask border is acceptable when written with longhands.
- Future decorative borders that rely on `mask-composite` must avoid the `mask`/`-webkit-mask` shorthand and verify the built CSS, not only dev.
- Keep the `@supports` fallbacks for browsers without conic-gradient or mask-composite support.

### 2026-06-11: Remove the drop shadow under the FeatureCard CTA

Decision:

- Remove the `sabai-feature-action-shadow` element and its CSS, keeping the `sabai-feature-action-shell` wrapper.

Reason:

- The owner wanted a cleaner CTA without the heavy cast shadow under the button.

Impact:

- The shell wrapper stays only to left-align the button; it no longer positions a shadow layer.
- The glass surface, conic-gradient border, and hover motion remain unchanged.

### 2026-06-11: Run all workspace scripts through the Bun runtime

Decision:

- Add `--bun` to the root `dev`, `typecheck`, and `build` scripts so Vite, `tsc`, and other CLIs run on the Bun runtime instead of whatever `node` is found in `PATH`.
- Pin the Bun version with a `.bun-version` file (`1.3.14`) alongside the existing `packageManager` field, and declare `engines.bun >= 1.3.0`.
- Add a `.gitattributes` file with `eol=lf` and explicit binary entries.

Reason:

- A machine had an Intel (x64) `node` installed through nvm while the CPU was Apple Silicon (arm64). Vite ran under that x64 `node` and tried to load `@rollup/rollup-darwin-x64`, but Bun had correctly installed the arm64 Rollup native binary, causing `Cannot find module @rollup/rollup-darwin-x64`.
- Forcing scripts through Bun removes the dependency on the host `node` architecture and keeps behavior consistent across Mac (Intel/ARM) and Windows.

Impact:

- Contributors must install dependencies with `bun install` on each machine and must never copy `node_modules` across machines, because native binaries are tied to OS and CPU.
- The project standardizes on Bun only; mixing npm, yarn, or pnpm is not allowed to avoid conflicting lockfiles.
- Host `node` may still be the wrong architecture for direct `node` calls; installing an architecture-matched `node` is recommended but no longer required to run the app.

### 2026-06-11: Start MVP modules with `งานที่ต้องทำ`

Decision:

- Make Task Management the first real MVP module page.
- Use the visible Thai module name `งานที่ต้องทำ`.
- Build the frontend to `CRUD + UX` quality before designing the backend schema and API.

Reason:

- Task Management can become useful without database, auth, storage, or external services.
- A working frontend flow will reveal the minimum fields and actions needed for the backend.
- The Thai label `งานที่ต้องทำ` is clearer for everyday users than `Task Management` or the broad label `วางแผน`.

Impact:

- `/tasks` should show a usable mock-only task page, not a placeholder.
- The home feature card and navigation should use `งานที่ต้องทำ`.
- Backend work for tasks should follow after the frontend flow is stable.

### 2026-06-11: Module UI wording must describe user intent

Decision:

- Visible module wording must use clear Thai words that describe what the user can do on that screen.
- Internal route and code names may stay English when useful, but visible labels should favor Thai.

Reason:

- Sabai is for Thai users of many ages, so module names and actions must be understandable without product or technical vocabulary.

Impact:

- Future modules must align wording across home cards, navigation, page titles, buttons, empty states, and documentation.
- Broad labels should be replaced when a more concrete Thai action label exists.

### 2026-06-11: Feature pages should stay thin and compose local components

Decision:

- Keep feature pages as thin shells.
- Split crowded, repetitive, or hard-to-scan JSX into smaller module-local components inside `components/`.
- Prefer named subcomponents for repeated UI, distinct sections, and complex conditional blocks.

Reason:

- Large one-file pages become harder to review, maintain, and extend.
- Smaller components keep the render flow readable and make future refactors safer.

Impact:

- Page files should focus on orchestration, not every piece of markup.
- When a page starts to feel cramped, extract local components before the file turns into a monolith.

### 2026-06-11: Vercel SPA deploys need a rewrite to `index.html`

Decision:

- Add a repo-level `vercel.json` that rewrites SPA deep links to `/index.html`.
- Keep a React Router `*` fallback route so unknown paths still render an in-app message after the SPA boots.

Reason:

- Vercel's static deployment path will return its own `NOT_FOUND` when a browser requests a client-side route such as `/home` or `/tasks` directly and the project has no rewrite.
- This repo uses `createBrowserRouter`, so deep links must be handled by the app after the initial HTML is served.

Impact:

- Direct visits and refreshes on app routes now land in the SPA instead of showing a raw Vercel 404.
- Unknown routes become easier to understand because the app can render a Thai fallback screen.

### 2026-06-14: Landing copy should be Thai-first and product-led

Decision:

- The `/landing` page should explain Sabai through a visible product showcase, not through planning or implementation language.
- User-facing landing copy should avoid process words such as `MVP`, `Journey`, and `preview` when a clear Thai phrase can explain the same idea.
- Motion on the landing page should stay behind local components and use `framer-motion` for polished but readable interaction.

Reason:

- Sabai targets Thai users of many ages, so mixed English product vocabulary makes the first impression less clear.
- Showing a compact product surface helps users understand the app faster than long explanatory sections.
- The landing page can be visually richer than app workflow screens while still keeping the core app maintainable.

Impact:

- Future landing sections should use Thai-first headings, CTAs, and descriptions.
- Interactive visual sections can use external visual libraries when they improve clarity, but should not replace AntD for app workflow UI.
- Product screenshots are not required yet; code-native previews remain easier to maintain while the app surface is still evolving.

### 2026-06-14: Landing trust copy should explain user confidence

Decision:

- Trust copy on `/landing` should focus on clarity, account-owned data, and keeping the system simple enough to use and maintain.
- Avoid trust headlines that sound like internal implementation constraints when the section is meant for users.
- CTA spacing can use landing-specific CSS classes when AntD spacing props are not enough for polished visual breathing room.

Reason:

- The owner found the previous trust headline too generic and not compelling enough for a product landing page.
- Browser review showed the CTA groups needed slightly more breathing room, especially on mobile.

Impact:

- Future landing trust sections should explain why a user can feel safe and oriented, not just that the app is minimal.
- CTA refinements should stay local to landing CSS unless the pattern becomes shared across multiple pages.
