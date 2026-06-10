import { createStore } from 'zustand/vanilla';

export interface AppState {
  isReady: boolean;
}

export interface AppActions {
  setReady: (isReady: boolean) => void;
}

export type AppStore = AppState & AppActions;

export const appStore = createStore<AppStore>()((set) => ({
  isReady: false,
  setReady: (isReady) => set({ isReady }),
}));
