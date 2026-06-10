import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';
import logo from '@/assets/logo.png';

const navItems = ['หน้าแรก', 'เอกสาร', 'การเงิน', 'นัดหมาย', "วางแผน"];

export function FloatingTopNav() {
  return (
    <header className="sabai-floating-top-nav px-4">
      <Link to="/dashboard" className="sabai-brand-link">
        <img
          src={logo}
          alt="sabai-logo"
          className='h-12 md:h-16.5'
        />
      </Link>
      <Flex component="nav" gap={8} align="center" className="sabai-nav-links rounded-2xl">
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
