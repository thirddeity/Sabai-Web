import { MainStoreProps, useMainStore } from "@/store/MainStore";
import { useStore } from "zustand";

export interface WithMainStoreProps {
    mainStore: MainStoreProps;
}

export function withMainStore<TProps extends WithMainStoreProps>(WrappedComponent: React.ComponentType<TProps>) {
    return function MainStoreComponent(props: Omit<TProps, keyof WithMainStoreProps>) {
        const mainStore = useStore(useMainStore);
        return <WrappedComponent {...(props as TProps)} mainStore={mainStore} />;
    };
}