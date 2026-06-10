import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const apiRoutes = new Hono()
  .get('/health', (c) =>
    c.json({
      ok: true,
      service: 'sabai-api',
    }),
  )
  .get('/status', (c) =>
    c.json({
      status: 'ready',
      auth: 'not-configured',
      database: 'not-configured',
    }),
  );

const app = new Hono()
  .use('*', logger())
  .use('/api/*', cors())
  .route('/api', apiRoutes);

export type ApiRoutes = typeof apiRoutes;
export type AppType = typeof app;

export default app;
