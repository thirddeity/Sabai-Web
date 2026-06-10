import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import thTH from 'antd/locale/th_TH';
import type { PropsWithChildren } from 'react';

import { theme } from '@/configs/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ConfigProvider locale={thTH} theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
}
