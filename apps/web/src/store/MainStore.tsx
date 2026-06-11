import {
  CreditCardOutlined,
  FileDoneOutlined,
  HomeOutlined,
  OrderedListOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { createStore } from "zustand/vanilla";

import { AppPath } from "@/router/paths";
import type { MenuItem } from "@/types/main-store-types";

export interface AppState {
  isReady: boolean;
  tabs: MenuItem[];
}

export interface AppActions {
  setReady: (isReady: boolean) => void;
  setTabs: (tabs: MenuItem[]) => void;
}

export type MainStoreProps = AppState & AppActions;

export const useMainStore = createStore<MainStoreProps>()((set) => ({
  isReady: false,
  tabs: [
    {
      color: "text-green-500",
      icon: <HomeOutlined twoToneColor="#52c41a" />,
      label: "หน้าหลัก",
      path: AppPath.home,
    },
    {
      color: "text-purple-500",
      icon: <FileDoneOutlined />,
      label: "เอกสาร",
      path: AppPath.vault,
    },
    {
      color: "text-orange-500",
      icon: <CreditCardOutlined />,
      label: "การเงิน",
      path: AppPath.finance,
    },
    {
      color: "text-blue-500",
      icon: <ScheduleOutlined />,
      label: "นัดหมาย",
      path: AppPath.reminders,
    },
    {
      color: "text-yellow-500",
      icon: <OrderedListOutlined />,
      label: "งานที่ต้องทำ",
      path: AppPath.tasks,
    },
  ],
  setReady: (isReady) => set({ isReady }),
  setTabs: (tabs) => set({ tabs }),
}));
