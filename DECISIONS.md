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

