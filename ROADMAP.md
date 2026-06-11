# Roadmap

## Current Phase

Phase 4: MVP Modules.

Status: In progress.

## Phase 0: Project Control

- [x] Create `PROJECT.md`.
- [x] Create `MVP.md`.
- [x] Create `TECH_STACK.md`.
- [x] Create `ARCHITECTURE.md`.
- [x] Create `ROADMAP.md`.
- [x] Create `PROGRESS.md`.
- [x] Create `DECISIONS.md`.
- [x] Recommend next implementation task.

## Phase 1: App Scaffold

- [x] Create minimal repository scaffold.
- [x] Add Bun workspace setup if needed.
- [x] Create React + Vite web app.
- [x] Create Hono API app.
- [x] Add TypeScript configuration.
- [x] Add basic lint, typecheck, and build commands.

## Phase 2: Frontend Foundation

- [x] Add Ant Design setup.
- [x] Add Tailwind CSS v4 setup for limited utility use.
- [x] Add `theme.ts` and `ConfigProvider`.
- [x] Add React Router v7 router structure.
- [x] Add base layouts.
- [x] Add shared HOCs for router, form, and breakpoint needs.

## Phase 2.5: UI Visual Foundation

- [x] Improve Ant Design theme tokens.
- [x] Add shared `PageContainer`.
- [x] Add shared `GlassCard`.
- [x] Add shared `MotionCard`.
- [x] Add shared `GradientBackground`.
- [x] Add shared `GlowOrb`.
- [x] Add shared `EmptyState`.
- [x] Add visual rules for AntD + Tailwind + motion.
- [x] Apply visual foundation to login placeholder.
- [x] Apply visual foundation to dashboard placeholder.

## Phase 2.6: Frontend UI Prototype

- [x] Improve login UI mock.
- [x] Improve dashboard UI mock.
- [x] Add feature cards for 4 core modules.
- [x] Add mock dashboard summary.
- [x] Add shared StatCard.
- [x] Add shared FeatureCard.
- [x] Add responsive app navigation.
- [x] Bind top and bottom navigation to real app routes with active state.
- [x] Fix Thai text regression in Home and placeholder module pages after route rename.
- [x] Move responsive navigation shell visibility to `withBreakpoint`.
- [x] Add subtle motion and hover effects.
- [x] Apply Thai-first global typography with LINE Seed Sans TH.
- [x] Refine glassmorphism, warm accents, and hover shadows.
- [ ] Add loading and empty state visuals.
- [x] Verify mobile and desktop layout.
- [x] Refine the "ดูภาพรวม" CTA into an AntD-based glossy button shell.
- [x] Refine Thai primary labels and add a dashboard life visual anchor.
- [x] Clarify responsive layout policy in `AGENTS.md` so layout shell decisions must use `withBreakpoint`.

- [x] Normalize the `ดูภาพรวม` CTA to use the base AntD button variant for stable production styling.

- [x] Strengthen the feature CTA glass treatment for production rendering.
- [x] Refine the feature CTA into a frosted glass pill based on the reference style.
- [x] Add browser compatibility fallbacks for the feature CTA mask and conic-gradient border.
- [x] Convert the dense dashboard mock into a lighter `/home` feature hub.
- [x] Rename the frontend `dashboard` module to `home` while keeping `/dashboard` as a temporary redirect.

## Phase 3: Backend Foundation

- [x] Add Hono app entry.
- [x] Add health endpoint.
- [ ] Add Zod validation pattern.
- [ ] Add Drizzle setup.
- [ ] Choose Supabase Free or Neon Free.
- [ ] Add Better Auth foundation.

## Phase 4: MVP Modules

- [x] Home shell.
- [x] Task Management frontend mock: `งานที่ต้องทำ` with CRUD + UX before backend.
- [ ] Task Management backend schema and API.
- [ ] Schedule & Reminder.
- [ ] Finance Tracker.
- [ ] Digital Vault metadata.
- [ ] Digital Vault upload with Cloudflare R2.
- [ ] Simple Search.
- [ ] Simple In-app Reminder.

## Phase 5: Stabilize MVP

- [ ] Improve mobile usability.
- [ ] Improve empty states and error messages.
- [x] Add Vercel SPA rewrite plus app-level not-found fallback.
- [ ] Review security rules for user-owned data.
- [ ] Run typecheck, lint, and build.
- [ ] Prepare simple deployment path on Cloudflare Pages / Workers.
