import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';
import logo from '@/assets/logo.png';
import { Component } from 'react';
import { withMainStore, WithMainStoreProps } from '@/hoc/withMainStore';
import './index.css';

class FloatingTopNavComponent extends Component<WithMainStoreProps> {
  render() {
    const { mainStore: { tabs } } = this.props;
    return (
      <header className="sabai-floating-top-nav px-4">
        <Link to="/dashboard" className="sabai-brand-link">
          <Flex align="center">
            <img
              src={logo}
              alt="sabai-logo"
              className='h-12 md:h-16.5'
            />
            {/* <Typography.Title level={3} className="m-0! text-green-500!">
            สบาย - Sabai
          </Typography.Title> */}
            <div className="sabai-aurora-content">
              <h1 className="sabai-aurora-title text-xl">สบาย - Sabai</h1>
            </div>
          </Flex>
        </Link>
        <Flex component="nav" gap={8} align="center" className="sabai-nav-links rounded-2xl">
          {tabs.map((item) => (
            <Button key={item.label} type="text" className="sabai-nav-button">
              <Flex gap={8} align="center" className={item.color}>
                <div>{item.icon}</div>
                <div>{item.label}</div>
              </Flex>

            </Button>
          ))}
        </Flex>
        <Typography.Text type="secondary" className="sabai-nav-note">
          ศูนย์รวมชีวิต
        </Typography.Text>
      </header>
    );
  }
}

const FloatingTopNav = withMainStore(FloatingTopNavComponent);
export { FloatingTopNav };
