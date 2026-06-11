import { hc } from 'hono/client';

import { webConfig } from '@/config';
import type { AppType } from '@sabai/api';

export const apiClient = hc<AppType>(webConfig.apiBaseUrl);
