import { Card, Flex, Typography } from "antd";
import type { ReactNode } from "react";

export interface InfoCardProps {
  description: string;
  icon: ReactNode;
  title: string;
}

export function InfoCard({ description, icon, title }: InfoCardProps) {
  return (
    <Card className="sabai-landing-info-card">
      <Flex vertical gap={10}>
        <span className="sabai-landing-info-icon">{icon}</span>
        <Typography.Title level={3}>{title}</Typography.Title>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </Flex>
    </Card>
  );
}
