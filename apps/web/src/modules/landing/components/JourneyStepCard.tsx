import { Card, Flex, Typography } from "antd";
import { motion } from "framer-motion";

import { MiniPreviewCard } from "./MiniPreviewCard";
import type { LandingJourneyStep } from "./landing-content";

export interface JourneyStepCardProps {
  step: LandingJourneyStep;
}

export function JourneyStepCard({ step }: JourneyStepCardProps) {
  return (
    <motion.div
      initial={{ y: 18 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.32 }}
      whileHover={{ y: -6 }}
      whileInView={{ y: 0 }}
    >
      <Card className={`sabai-landing-step sabai-landing-step-${step.accent}`}>
        <Flex vertical gap={16}>
          <Flex align="center" justify="space-between" gap={12}>
            <Flex align="center" gap={10} className="sabai-landing-step-meta">
              <span className="sabai-landing-step-icon">{step.icon}</span>
              <Typography.Text strong>{step.label}</Typography.Text>
            </Flex>
            <Typography.Text className="sabai-landing-step-time">
              {step.time}
            </Typography.Text>
          </Flex>
          <Flex vertical gap={6}>
            <Typography.Title level={3}>{step.title}</Typography.Title>
            <Typography.Paragraph>{step.description}</Typography.Paragraph>
          </Flex>
          <MiniPreviewCard preview={step.preview} />
        </Flex>
      </Card>
    </motion.div>
  );
}
