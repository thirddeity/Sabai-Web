import type { HTMLAttributes } from 'react';

import './styles/GlowOrb.css';

type GlowOrbPlacement = 'top-left' | 'bottom-right';

export interface GlowOrbProps extends HTMLAttributes<HTMLDivElement> {
  placement?: GlowOrbPlacement;
}

export function GlowOrb({
  className,
  placement = 'top-left',
  ...props
}: GlowOrbProps) {
  const classes = [
    'sabai-glow-orb',
    `sabai-glow-orb-${placement}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div aria-hidden="true" className={classes} {...props} />;
}
