import type { MenuItem } from '@/types/main-store-types';
import { HomeOutlined, FileDoneOutlined, CreditCardOutlined, ScheduleOutlined, OrderedListOutlined } from '@ant-design/icons';
import { createStore } from 'zustand/vanilla';

export interface AppState {
  isReady: boolean;
  tabs: MenuItem[]; // Placeholder for future tab management state
}

export interface AppActions {
  setReady: (isReady: boolean) => void;
  setTabs: (tabs: MenuItem[]) => void;
}

export type MainStoreProps = AppState & AppActions;

export const useMainStore = createStore<MainStoreProps>()((set) => ({
  isReady: false,
  tabs: [
  { icon: <HomeOutlined twoToneColor="#52c41a"/>, label: 'หน้าแรก', color: "text-green-500" },
  { icon: <FileDoneOutlined  />, label: 'เอกสาร', color: "text-purple-500" },
  { icon: <CreditCardOutlined />, label: 'การเงิน', color: "text-orange-500" },
  { icon: <ScheduleOutlined />, label: 'นัดหมาย', color: "text-blue-500" },
  { icon: <OrderedListOutlined />, label: 'วางแผน', color: "text-yellow-500" },
],
  setReady: (isReady) => set({ isReady }),
  setTabs: (tabs) => set({ tabs }),
}));
