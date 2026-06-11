import { Flex, Typography } from "antd";
import { Component } from "react";

import { GlassCard } from "@/ui/effects/GlassCard";

export interface ModulePlaceholderPageProps {
  title: string;
  description: string;
}

export class ModulePlaceholderPage extends Component<ModulePlaceholderPageProps> {
  render() {
    const { description, title } = this.props;

    return (
      <GlassCard liftOnHover={false}>
        <Flex vertical gap={8}>
          <Typography.Text className="sabai-kicker">กำลังเตรียมหน้า</Typography.Text>
          <Typography.Title level={1}>{title}</Typography.Title>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </Flex>
      </GlassCard>
    );
  }
}
