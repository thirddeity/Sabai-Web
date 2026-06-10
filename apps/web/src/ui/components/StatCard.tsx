import { Flex, Typography } from 'antd';

import { MotionCard } from '@/ui/effects/MotionCard';

export interface StatCardProps {
  label: string;
  value: string;
  detail: string;
  motionDelayMs?: number;
}

export function StatCard({
  detail,
  label,
  motionDelayMs = 0,
  value,
}: StatCardProps) {
  return (
    <MotionCard
      className="sabai-stat-card"
      motionDelayMs={motionDelayMs}
      liftOnHover={false}
    >
      <Flex vertical gap={6}>
        <Typography.Text type="secondary">{label}</Typography.Text>
        <Typography.Title level={2}>{value}</Typography.Title>
        <Typography.Text>{detail}</Typography.Text>
      </Flex>
    </MotionCard>
  );
}
