import { CreditCardOutlined, FileDoneOutlined, HomeOutlined, OrderedListOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const navItems = [
  { icon: <HomeOutlined twoToneColor="#52c41a"/>, label: 'หน้าแรก', color: "text-green-500" },
  { icon: <FileDoneOutlined  />, label: 'เอกสาร', color: "text-purple-500" },
  { icon: <CreditCardOutlined />, label: 'การเงิน', color: "text-orange-500" },
  { icon: <ScheduleOutlined />, label: 'นัดหมาย', color: "text-blue-500" },
  { icon: <OrderedListOutlined />, label: 'วางแผน', color: "text-yellow-500" },
]

export function MobileBottomNav() {
  return (
    <nav className="sabai-mobile-bottom-nav" aria-label="เมนูหลักบนมือถือ">
      {navItems.map((item, index) => (
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
