import type { PropsWithChildren } from 'react';

export interface PageContainerProps extends PropsWithChildren {
  narrow?: boolean;
  className?: string;
}

export function PageContainer({
  children,
  className,
  narrow = false,
}: PageContainerProps) {
  const classes = [
    'sabai-page-container',
    narrow ? 'sabai-page-container-narrow' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <main className={classes}>{children}</main>;
}
