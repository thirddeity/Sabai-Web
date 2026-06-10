import type { WithMainStoreProps } from '@/hoc/withMainStore';
import { withMainStore } from '@/hoc/withMainStore';
import { Button, Flex } from 'antd';
import { Component } from 'react';


class MobileBottomNavComponent extends Component<WithMainStoreProps> {
  render() {
    const { mainStore: { tabs } } = this.props;

    return (
      <nav className="sabai-mobile-bottom-nav" aria-label="เมนูหลักบนมือถือ">
        {tabs.map((item, index) => (
          <Button key={index} type="text" className="sabai-nav-button">
            <Flex vertical align="center" className={item.color}>
              <div>{item.icon}</div>
              <div className="text-xs">{item.label}</div>
            </Flex>
          </Button>
        ))}
      </nav>
    );
  }
}

const MobileBottomNav = withMainStore(MobileBottomNavComponent);
export { MobileBottomNav };
