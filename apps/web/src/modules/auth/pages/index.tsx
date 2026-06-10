import { Button, Flex, Form, Input, Typography } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router';

import { GlassCard } from '@/ui/effects/GlassCard';

export class LoginPage extends Component {
  render() {
    return (
      <GlassCard
        liftOnHover={false}
        className="sabai-login-panel"
        styles={{ body: { padding: 34 } }}
      >
        <Flex vertical gap="middle">
          <div>
            <Typography.Text className="sabai-kicker">
              Sabai
            </Typography.Text>
            <Typography.Title level={2} className="!mb-2">
              กลับเข้าสู่พื้นที่จัดการชีวิตของคุณ
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              หน้านี้เป็นตัวอย่างสำหรับโครงสร้างการเข้าสู่ระบบในอนาคต
              ตอนนี้ยังไม่ได้เชื่อมต่อ auth จริง
            </Typography.Paragraph>
          </div>
        </Flex>
        <Form layout="vertical" disabled>
          <Form.Item label="อีเมล">
            <Input placeholder="user@example.com" />
          </Form.Item>
          <Form.Item label="รหัสผ่าน">
            <Input.Password placeholder="ยังไม่ได้เปิดใช้งาน" />
          </Form.Item>
          <Button type="primary" size="large" block className="sabai-soft-button">
            ยังไม่ได้เชื่อมต่อการเข้าสู่ระบบ
          </Button>
        </Form>
        <div className="mt-4 text-center">
          <Link to="/dashboard">ไปหน้าตัวอย่าง Dashboard</Link>
        </div>
      </GlassCard>
    );
  }
}
