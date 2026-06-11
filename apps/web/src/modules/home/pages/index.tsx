import { Col, Flex, Row, Typography } from "antd";
import { Component } from "react";

import { homeFeatures } from "@/modules/home/mock";
import { FeatureCard } from "@/ui/components/FeatureCard";

export class HomePage extends Component {
  render() {
    return (
      <div className="sabai-life-hub">
        <section>
          <Flex vertical gap={6} className="sabai-section-head">
            <Typography.Text className="sabai-kicker">หน้าหลัก</Typography.Text>
            <Typography.Title level={1}>เรื่องสำคัญของฉัน</Typography.Title>
            <Typography.Text type="secondary">
              เลือกหมวดที่ต้องการดู เพื่อเข้าไปจัดการเรื่องสำคัญในชีวิตประจำวัน
            </Typography.Text>
          </Flex>
          <Row gutter={[18, 18]} className="sabai-bento-grid">
            {homeFeatures.map((item, index) => (
              <Col key={item.title} xs={12} md={6}>
                <FeatureCard
                  cue={item.cue}
                  path={item.path}
                  title={item.title}
                  subtitle={item.subtitle}
                  tone={item.tone}
                  motionDelayMs={index * 70}
                />
              </Col>
            ))}
          </Row>
        </section>
      </div>
    );
  }
}
