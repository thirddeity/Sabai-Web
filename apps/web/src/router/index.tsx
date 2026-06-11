import { RouterProvider, createBrowserRouter, redirect } from "react-router";

import { LoginLayout } from "@/layouts/login";
import { MainLayout } from "@/layouts/main";
import { LoginPage } from "@/modules/auth/pages";
import { HomePage } from "@/modules/home/pages";
import { ModulePlaceholderPage } from "@/modules/placeholder/pages";
import { TaskPage } from "@/modules/tasks/pages";
import { loginLoader, protectedLoader } from "@/router/middleware";
import { AppPath } from "@/router/paths";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: protectedLoader,
    children: [
      {
        index: true,
        loader: () => redirect(AppPath.home),
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        loader: () => redirect(AppPath.home),
      },
      {
        path: "vault",
        element: (
          <ModulePlaceholderPage
            title="เอกสารสำคัญ"
            description="หน้านี้จะใช้สำหรับเก็บและดูแลเอกสารสำคัญ เช่น บัตรประชาชน ทะเบียนบ้าน ประกัน และเอกสารที่ต้องไม่ลืม"
          />
        ),
      },
      {
        path: "finance",
        element: (
          <ModulePlaceholderPage
            title="การเงิน"
            description="หน้านี้จะใช้สำหรับดูรายรับ รายจ่าย และบิลที่ใกล้ถึงกำหนด เพื่อช่วยจัดการเงินประจำวันให้ง่ายขึ้น"
          />
        ),
      },
      {
        path: "reminders",
        element: (
          <ModulePlaceholderPage
            title="นัดหมายและเตือน"
            description="หน้านี้จะใช้สำหรับรวมนัดหมาย วันสำคัญ และการเตือนที่ต้องดูแลในชีวิตประจำวัน"
          />
        ),
      },
      {
        path: "tasks",
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "/login",
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
