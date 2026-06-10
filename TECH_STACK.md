# Tech Stack

## Runtime And Tooling

- Bun
- TypeScript
- Vite

## Frontend

- React
- React Router v7
- Ant Design v6 or newer
- Tailwind CSS v4
- TanStack Query
- Zustand Vanilla Store
- Ant Design Form

## Frontend Rules

- Use React Class Component as the default for pages, stateful components, behavior-heavy components, forms, dashboard cards, and list/detail screens.
- Use Function Component only for small presentational pieces, wrappers that need hooks, HOCs, or library APIs that require hooks.
- Use Ant Design as the main UI system.
- Use Tailwind only for small targeted styling that Ant Design does not handle conveniently.
- Keep routes centralized in `apps/web/src/router/index.tsx`.
- Use `createBrowserRouter` and `<RouterProvider router={router} />`.
- Use route loaders for route guards.

## Backend

- Bun
- Hono
- TypeScript
- Zod
- Drizzle ORM
- Better Auth

## Backend Rules

Each backend feature must use this structure:

```txt
apps/api/src/modules/[feature]/
  routes.ts
  schema.ts
  service.ts
  repository.ts
  types.ts
```

File responsibilities:

- `routes.ts`: Hono endpoints only.
- `schema.ts`: Zod validation.
- `service.ts`: business logic.
- `repository.ts`: Drizzle database queries.
- `types.ts`: shared feature types when needed.

## Database

- PostgreSQL through Supabase Free or Neon Free.
- Drizzle ORM for database access.
- `drizzle-kit` for migrations.

## Storage

- Cloudflare R2 only when implementing Digital Vault file upload.
- Do not set up R2 before the upload task.

## Deployment

- Cloudflare Pages / Workers.

## Not In MVP Stack

- Docker Compose
- Caddy
- VPS
- Redis
- Background queue
- Microservices
- Kubernetes

