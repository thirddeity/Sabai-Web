import { Button, Col, Flex, Input, Row, Typography } from 'antd';
import { Component } from 'react';

import sabaiLifeVisual from '@/assets/sabai-life-visual.svg';
import { EmptyState } from '@/ui/components/EmptyState';
import { FeatureCard } from '@/ui/components/FeatureCard';
import { StatCard } from '@/ui/components/StatCard';
import { GlassCard } from '@/ui/effects/GlassCard';
import {
  dashboardFeatures,
  priorityItems,
  todaySummaries,
} from '@/modules/dashboard/mock';

export class DashboardPage extends Component {
  render() {
    return (
      <div className="sabai-life-hub">
        <GlassCard liftOnHover={false} className="sabai-life-hero">
          <Row gutter={[28, 24]} align="middle" className="sabai-hero-grid">
            <Col xs={24} lg={14}>
              <Flex vertical gap="large">
                <div>
                  <Typography.Text className="sabai-kicker">
                    ศูนย์รวมชีวิต
                  </Typography.Text>
                  <Typography.Title level={1}>
                    วันนี้มีอะไรสำคัญบ้าง
                  </Typography.Title>
                  <Typography.Paragraph type="secondary" className="max-w-2xl">
                    ดูเอกสาร การเงิน นัดหมาย และงานที่ต้องจัดการในที่เดียว
                    หน้านี้ยังเป็นตัวอย่าง UI และใช้ข้อมูลจำลองเท่านั้น
                  </Typography.Paragraph>
                </div>
                <Input
                  className="sabai-search-pill"
                  size="large"
                  placeholder="ค้นหาเอกสาร งาน บิล หรือนัดหมาย"
                />
              </Flex>
            </Col>
            <Col xs={24} lg={10}>
              <div className="sabai-life-visual-card">
                <img
                  src={sabaiLifeVisual}
                  alt="ภาพรวมเอกสาร การเงิน นัดหมาย และงานที่ต้องดูแล"
                  className="sabai-life-visual-image"
                />
              </div>
            </Col>
          </Row>
        </GlassCard>

        <div className="sabai-priority-strip shadow-lg" aria-label="สิ่งที่ควรดูวันนี้">
          <Typography.Text className="sabai-priority-title">
            สิ่งที่ควรดูวันนี้
          </Typography.Text>
          <Row gutter={[12, 12]}>
            {priorityItems.map((item) => (
              <Col key={item.label} xs={24} md={8}>
                <div className={`sabai-priority-item sabai-priority-item-${item.tone}`}>
                  <Typography.Text strong>{item.label}</Typography.Text>
                  <Typography.Text type="secondary">{item.detail}</Typography.Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <section>
          <Flex align="center" justify="space-between" className="sabai-section-head">
            <div>
              <Typography.Title level={2}>เรื่องสำคัญของฉัน</Typography.Title>
              <Typography.Text type="secondary">
                เลือกดูหมวดหลักที่ช่วยจัดการชีวิตประจำวัน
              </Typography.Text>
            </div>
            <Button type="primary" size="large" className="sabai-soft-button">
              เพิ่มรายการ
            </Button>
          </Flex>
          <Row gutter={[18, 18]} className="sabai-bento-grid">
            {dashboardFeatures.map((item, index) => (
              <Col key={item.title} xs={24} md={6}>
                <FeatureCard
                  cue={item.cue}
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
          <Typography.Title level={2}>สรุปวันนี้</Typography.Title>
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
          description="หน้านี้ใช้ข้อมูลจำลองเพื่อวางหน้าตา Dashboard เท่านั้น ยังไม่ได้เชื่อมต่อ backend และยังไม่มีการทำรายการจริง"
        />
      </div>
    );
  }
}
