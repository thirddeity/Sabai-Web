import { Button, Col, Flex, Input, Row, Typography } from 'antd';
import { Component } from 'react';

import { EmptyState } from '@/ui/components/EmptyState';
import { FeatureCard } from '@/ui/components/FeatureCard';
import { StatCard } from '@/ui/components/StatCard';
import { GlassCard } from '@/ui/effects/GlassCard';
import { dashboardFeatures, todaySummaries } from '@/modules/dashboard/mock';

export class DashboardPage extends Component {
  render() {
    return (
      <div className="sabai-life-hub">
        <GlassCard liftOnHover={false} className="sabai-life-hero">
          <Flex vertical gap="large">
            <div>
              <Typography.Text className="sabai-kicker">
                Sabai Life Console
              </Typography.Text>
              <Typography.Title level={1}>
                วันนี้มีอะไรสำคัญบ้าง
              </Typography.Title>
              <Typography.Paragraph type="secondary" className="max-w-2xl">
                Life Hub สำหรับดูเอกสาร เงิน นัดหมาย และงานสำคัญในที่เดียว
                ตอนนี้ยังเป็น mock UI เท่านั้น
              </Typography.Paragraph>
            </div>
            <Input
              className="sabai-search-pill"
              size="large"
              placeholder="ค้นหาเอกสาร งาน บิล หรือนัดหมาย"
              readOnly
            />
          </Flex>
        </GlassCard>

        <section>
          <Flex align="center" justify="space-between" className="sabai-section-head">
            <div>
              <Typography.Title level={2}>Life Modules</Typography.Title>
              <Typography.Text type="secondary">
                การ์ดหลักสำหรับ 4 เรื่องสำคัญของชีวิต
              </Typography.Text>
            </div>
            <Button type="primary" size="large" className="sabai-soft-button">
              เพิ่มรายการ
            </Button>
          </Flex>
          <Row gutter={[18, 18]} className="sabai-bento-grid">
            {dashboardFeatures.map((item, index) => (
              <Col key={item.title} xs={24} md={12}>
                <FeatureCard
                  title={item.title}
                  subtitle={item.subtitle}
                  metric={item.metric}
                  tone={item.tone}
                  motionDelayMs={index * 70}
                />
              </Col>
            ))}
          </Row>
        </section>

        <section>
          <Typography.Title level={2}>Today Summary</Typography.Title>
          <Row gutter={[18, 18]}>
            {todaySummaries.map((item, index) => (
              <Col key={item.label} xs={24} sm={12} lg={6}>
                <StatCard
                  label={item.label}
                  value={item.value}
                  detail={item.detail}
                  motionDelayMs={index * 60}
                />
              </Col>
            ))}
          </Row>
        </section>

        <EmptyState
          title="ยังไม่มีข้อมูลจริง"
          description="หน้านี้ใช้ mock data เพื่อวางทิศทาง Sabai Life Console ยังไม่มีการต่อ backend หรือทำ feature CRUD"
        />
      </div>
    );
  }
}
