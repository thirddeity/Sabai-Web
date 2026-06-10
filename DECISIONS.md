# Decisions

## Decision Log

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
- Dashboard labels should use concrete Thai words such as `หน้าแรก`, `ค้นหา`, `วันนี้`, `เมนู`, `เรื่องสำคัญของฉัน`, and `สรุปวันนี้`.
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
