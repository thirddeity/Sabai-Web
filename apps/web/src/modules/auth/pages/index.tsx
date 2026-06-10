import { Button, Form, Input, Typography } from 'antd';
import { Component } from 'react';
import { Link } from 'react-router';

import { GlassCard } from '@/ui/effects/GlassCard';

export class LoginPage extends Component {
  render() {
    return (
      <GlassCard liftOnHover={false} styles={{ body: { padding: 32 } }}>
        <Typography.Title level={2} className="!mb-2">
          เข้าสู่ระบบ
        </Typography.Title>
        <Typography.Paragraph type="secondary">
          Placeholder สำหรับโครง auth ในอนาคต
        </Typography.Paragraph>
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
