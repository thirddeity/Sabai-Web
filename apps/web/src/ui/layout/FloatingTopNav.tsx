import { Button, Flex, Typography } from 'antd';
import { Link } from 'react-router';
import logo from '@/assets/logo.png';
import { Component } from 'react';
import type { WithMainStoreProps } from '@/hoc/withMainStore';
import { withMainStore } from '@/hoc/withMainStore';
import './index.css';
import { withBreakpoint } from '@/hoc/withBreakpoint';
import type { BreakpointProps } from '@/hoc/withBreakpoint';

class FloatingTopNavComponent extends Component<WithMainStoreProps & BreakpointProps> {
  render() {
    const { mainStore: { tabs }, screens } = this.props;
    const isLg = !!screens.lg;
    return (
      <header className="sabai-floating-top-nav px-4">
        <Flex align="center" justify={isLg ? "space-between" : "center"}>
          <Link to="/dashboard" className="sabai-brand-link">
            <Flex align="center">
              <img
                src={logo}
                alt="sabai-logo"
                className='h-12 md:h-16.5'
              />
              <div className="sabai-aurora-content">
                <h1 className="sabai-aurora-title text-xl">สบาย - Sabai</h1>
              </div>
            </Flex>
          </Link>
          {isLg && (<>
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
          </>)}
        </Flex>
      </header>
    );
  }
}

const FloatingTopNav = withMainStore(withBreakpoint(FloatingTopNavComponent));
export { FloatingTopNav };
