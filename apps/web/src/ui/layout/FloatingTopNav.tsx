import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';

const navItems = ['หน้าแรก', 'ค้นหา', 'วันนี้', 'เมนู'];

export function FloatingTopNav() {
  return (
    <header className="sabai-floating-top-nav">
      <Link to="/dashboard" className="sabai-brand-link">
        Sabai
      </Link>
      <Flex component="nav" gap={8} align="center" className="sabai-nav-links">
        {navItems.map((item) => (
          <Button key={item} type="text" className="sabai-nav-button">
            {item}
          </Button>
        ))}
      </Flex>
      <Typography.Text type="secondary" className="sabai-nav-note">
        ศูนย์รวมชีวิต
      </Typography.Text>
    </header>
  );
}
