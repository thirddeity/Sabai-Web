import { Col, Row, Typography } from 'antd';
import { Component } from 'react';

import { EmptyState } from '@/ui/components/EmptyState';
import { MotionCard } from '@/ui/effects/MotionCard';

const placeholders = [
  {
    title: 'Digital Vault',
    description: 'ยังไม่ทำ feature จริง',
  },
  {
    title: 'Finance',
    description: 'ยังไม่ทำ feature จริง',
  },
  {
    title: 'Reminder',
    description: 'ยังไม่ทำ feature จริง',
  },
  {
    title: 'Task',
    description: 'ยังไม่ทำ feature จริง',
  },
];

export class DashboardPage extends Component {
  render() {
    return (
      <div className="space-y-6">
        <div>
          <Typography.Title level={1} className="!mb-2">
            Dashboard
          </Typography.Title>
          <Typography.Paragraph type="secondary" className="max-w-2xl">
            หน้า placeholder สำหรับ Sabai Web MVP scaffold
          </Typography.Paragraph>
        </div>
        <Row gutter={[16, 16]}>
          {placeholders.map((item, index) => (
            <Col key={item.title} xs={24} md={12} lg={6}>
              <MotionCard motionDelayMs={index * 70}>
                <Typography.Title level={4}>{item.title}</Typography.Title>
                <Typography.Text type="secondary">
                  {item.description}
                </Typography.Text>
              </MotionCard>
            </Col>
          ))}
        </Row>
        <EmptyState
          title="พื้นที่ข้อมูลยังว่าง"
          description="ส่วนนี้เป็นตัวอย่าง visual foundation เท่านั้น ยังไม่มี feature จริงหรือ backend integration"
        />
      </div>
    );
  }
}
