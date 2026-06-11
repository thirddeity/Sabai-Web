import { Flex, Typography } from "antd";

import { GlassButton } from "@/ui/effects/GlassButton";
import { MotionCard } from "@/ui/effects/MotionCard";

export interface FeatureCardProps {
  title: string;
  subtitle: string;
  metric: string;
  cue: string;
  tone?: "emerald" | "amber" | "sky" | "lilac";
  motionDelayMs?: number;
}

export function FeatureCard({
  cue,
  metric,
  motionDelayMs = 0,
  subtitle,
  title,
  tone = "emerald",
}: FeatureCardProps) {
  return (
    <MotionCard
      className={`sabai-feature-card sabai-feature-card-${tone}`}
      motionDelayMs={motionDelayMs}
      styles={{ body: { height: "100%" } }}
    >
      <Flex
        vertical
        gap="large"
        justify="space-between"
        style={{ height: "100%" }}
      >
        <div>
          <Flex
            align="center"
            gap={10}
            wrap="wrap"
            className="sabai-feature-topline"
          >
            <Typography.Text className="sabai-feature-cue">
              {cue}
            </Typography.Text>
            <Typography.Text className="sabai-feature-metric">
              {metric}
            </Typography.Text>
          </Flex>
          <Typography.Title level={3}>{title}</Typography.Title>
          <Typography.Paragraph type="secondary">
            {subtitle}
          </Typography.Paragraph>
        </div>
        <Flex align="center" justify="center">
          <GlassButton className="w-full!">ดูภาพรวม</GlassButton>
        </Flex>
      </Flex>
    </MotionCard>
  );
}
