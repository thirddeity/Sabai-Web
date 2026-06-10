import { createRoot } from 'react-dom/client';

import { AppProviders } from '@/providers/AppProviders';
import { AppRouter } from '@/router';
import './styles.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element was not found.');
}

createRoot(rootElement).render(
  <AppProviders>
    <AppRouter />
  </AppProviders>
);
