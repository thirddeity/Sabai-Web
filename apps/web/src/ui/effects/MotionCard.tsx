import type { CSSProperties } from 'react';

import { GlassCard } from '@/ui/effects/GlassCard';
import type { GlassCardProps } from '@/ui/effects/GlassCard';

export interface MotionCardProps extends GlassCardProps {
  motionDelayMs?: number;
}

export function MotionCard({
  className,
  motionDelayMs = 0,
  style,
  ...props
}: MotionCardProps) {
  const classes = ['sabai-motion-card', className].filter(Boolean).join(' ');
  const motionStyle: CSSProperties = {
    ...style,
    animationDelay: `${motionDelayMs}ms`,
  };

  return <GlassCard className={classes} style={motionStyle} {...props} />;
}
