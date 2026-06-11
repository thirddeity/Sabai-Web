# Decisions

## Decision Log

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

### 2026-06-11: Use AntD `md` for app nav shell switching

Decision:

- Show `FloatingTopNav` when `screens.md` is true.
- Show `MobileBottomNav` when `screens.md` is false.

Reason:

- The desktop top nav includes the brand area plus five primary actions, so it should not be forced into small tablet or phone widths.
- Using AntD's built-in `md` breakpoint keeps shell behavior aligned with `withBreakpoint`.

Impact:

- CSS may still adjust spacing and visual details at small widths.
- CSS must not decide whether top or bottom navigation exists.

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
