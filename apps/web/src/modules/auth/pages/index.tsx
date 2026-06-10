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
              Sabai Life Console
            </Typography.Text>
            <Typography.Title level={2} className="!mb-2">
              กลับเข้าสู่พื้นที่ชีวิตของคุณ
            </Typography.Title>
            <Typography.Paragraph type="secondary">
              Placeholder สำหรับโครง auth ในอนาคต ยังไม่มีการเข้าสู่ระบบจริง
            </Typography.Paragraph>
          </div>
        </Flex>
        <Form layout="vertical" disabled>
          <Form.Item label="อีเมล">
            <Input placeholder="user@example.com" />
          </Form.Item>
          <Form.Item label="รหัสผ่าน">
            <Input.Password placeholder="ยังไม่เปิดใช้งาน" />
          </Form.Item>
          <Button type="primary" size="large" block>
            ยังไม่เชื่อม auth
          </Button>
        </Form>
        <div className="mt-4 text-center">
          <Link to="/dashboard">ไปหน้า dashboard placeholder</Link>
        </div>
      </GlassCard>
    );
  }
}
