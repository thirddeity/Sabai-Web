import { Flex, Typography } from "antd";

import type { LandingPreview } from "./landing-content";

export interface MiniPreviewCardProps {
  preview: LandingPreview;
}

export function MiniPreviewCard({ preview }: MiniPreviewCardProps) {
  return (
    <div className="sabai-landing-mini-preview">
      <Flex vertical gap={8}>
        <Typography.Text className="sabai-landing-mini-eyebrow">
          {preview.eyebrow}
        </Typography.Text>
        <Typography.Text strong className="sabai-landing-mini-title">
          {preview.title}
        </Typography.Text>
        <Flex vertical gap={6}>
          {preview.items.map((item) => (
            <Flex
              key={`${item.label}-${item.value}`}
              align="center"
              justify="space-between"
              gap={12}
              className="sabai-landing-mini-row"
            >
              <Typography.Text>{item.label}</Typography.Text>
              <Typography.Text strong>{item.value}</Typography.Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
