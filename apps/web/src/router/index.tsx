import { RouterProvider, createBrowserRouter } from 'react-router';

import { LoginLayout } from '@/layouts/login';
import { MainLayout } from '@/layouts/main';
import { loginLoader, protectedLoader } from '@/router/middleware';
import { LoginPage } from '@/modules/auth/pages';
import { DashboardPage } from '@/modules/dashboard/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginLayout />,
    loader: loginLoader,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
