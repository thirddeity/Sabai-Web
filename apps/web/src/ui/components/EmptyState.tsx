import { Typography } from 'antd';
import type { ReactNode } from 'react';

import { GlassCard } from '@/ui/effects/GlassCard';

export interface EmptyStateProps {
  title: string;
  description: ReactNode;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <GlassCard liftOnHover={false}>
      <div className="sabai-empty-state">
        <div>
          <div className="sabai-empty-state-mark" />
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </div>
      </div>
    </GlassCard>
  );
}
