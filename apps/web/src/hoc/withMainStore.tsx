import type { ComponentType } from 'react';
import type { MainStoreProps } from '@/store/MainStore';
import { useMainStore } from '@/store/MainStore';
import { useStore } from 'zustand';

export interface WithMainStoreProps {
  mainStore: MainStoreProps;
}

export function withMainStore<TProps extends WithMainStoreProps>(
  WrappedComponent: ComponentType<TProps>,
): ComponentType<Omit<TProps, keyof WithMainStoreProps>> {
  function WithMainStore(props: Omit<TProps, keyof WithMainStoreProps>) {
    const mainStore = useStore(useMainStore);

    return <WrappedComponent {...(props as TProps)} mainStore={mainStore} />;
  }

  const wrappedName = WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';
  WithMainStore.displayName = `withMainStore(${wrappedName})`;

  return WithMainStore;
}
