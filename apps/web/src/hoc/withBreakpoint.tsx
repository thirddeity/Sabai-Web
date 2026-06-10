import { Grid } from 'antd';
import type { ComponentType } from 'react';

export interface BreakpointProps {
  screens: ReturnType<typeof Grid.useBreakpoint>;
}

export function withBreakpoint<TProps extends BreakpointProps>(
  WrappedComponent: ComponentType<TProps>,
) {
  return function WithBreakpoint(props: Omit<TProps, keyof BreakpointProps>) {
    const screens = Grid.useBreakpoint();

    return <WrappedComponent {...(props as TProps)} screens={screens} />;
  };
}
