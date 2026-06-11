# Architecture

## Architecture Goal

The architecture must stay simple, readable, and beginner-friendly. The project should use managed services and avoid infrastructure that requires heavy maintenance.

## High-level Shape

```txt
User
  -> Web app on Cloudflare Pages
  -> API on Cloudflare Workers with Hono
  -> PostgreSQL on Supabase Free or Neon Free
  -> Cloudflare R2 for Digital Vault files only when upload exists
```

## Frontend Structure

Use a feature-based structure:

```txt
apps/web/src/
  main.tsx
  config.ts
  router/
    index.tsx
    middleware.ts
  layouts/
    login.tsx
    main.tsx
  configs/
    theme.ts
  hoc/
    withForm.tsx
    withRouter.tsx
    withBreakpoint.tsx
  modules/
    auth/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
    home/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
    vault/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
        detail.tsx
  ui/
    components/
  utils/
```

## Backend Structure

Each backend module must stay separated by responsibility:

```txt
apps/api/src/modules/[feature]/
  routes.ts
  schema.ts
  service.ts
  repository.ts
  types.ts
```

Expected data flow:

```txt
routes.ts
  -> schema.ts validation
  -> service.ts business logic
  -> repository.ts database query
  -> JSON response
```

## Data Ownership

- Every user-owned table must include `id`, `userId`, `createdAt`, and `updatedAt` when needed.
- API endpoints must only access data owned by the current user.
- Request body, params, and query values must be validated with Zod.

## Auth

- Use Better Auth.
- Start with simple auth.
- Do not create a custom auth system from scratch.
- Line Login and phone OTP are future product goals after the basic auth foundation is stable.

## Security

- Do not store secrets as plain text.
- Vault data needs special care.
- Future sensitive vault fields should use encryption before storage.
- Future high-risk vault access may use a second verification layer such as PIN.

## Complexity Limits

- Do not add background queues in the MVP.
- Do not add self-hosted deployment in the MVP.
- Do not split into microservices.
- Do not add infrastructure before the feature needs it.
