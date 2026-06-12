import type { PropsWithChildren } from 'react';

import { GlowOrb } from '@/ui/effects/GlowOrb';
import './styles/GradientBackground.css';

export function GradientBackground({ children }: PropsWithChildren) {
  return (
    <div className="sabai-gradient-background">
      <GlowOrb placement="top-left" />
      <GlowOrb placement="bottom-right" />
      <div className="sabai-gradient-background-content">{children}</div>
    </div>
  );
}
