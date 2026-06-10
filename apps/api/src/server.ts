import { serve } from '@hono/node-server';

import app from './app';

const port = Number(Bun.env.PORT ?? 3001);

serve({
  fetch: app.fetch,
  port,
});

console.log(`Sabai API listening on http://localhost:${port}`);
