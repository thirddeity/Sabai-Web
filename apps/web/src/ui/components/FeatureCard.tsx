import { Button, Flex, Typography } from 'antd';

import { MotionCard } from '@/ui/effects/MotionCard';

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  metric: string;
  tone?: 'emerald' | 'mint' | 'sage' | 'leaf';
  motionDelayMs?: number;
}

export function FeatureCard({
  metric,
  motionDelayMs = 0,
  subtitle,
  title,
  tone = 'emerald',
}: FeatureCardProps) {
  return (
    <MotionCard
      className={`sabai-feature-card sabai-feature-card-${tone}`}
      motionDelayMs={motionDelayMs}
    >
      <Flex vertical gap="large">
        <div>
          <Typography.Text className="sabai-feature-metric">
            {metric}
          </Typography.Text>
          <Typography.Title level={3}>{title}</Typography.Title>
          <Typography.Paragraph type="secondary">{subtitle}</Typography.Paragraph>
        </div>
        <Button type="primary" size="large" ghost>
          ดูภาพรวม
        </Button>
      </Flex>
    </MotionCard>
  );
}
