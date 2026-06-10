import { Button } from 'antd';

const mobileItems = ['หน้าแรก', 'ค้นหา', 'วันนี้', 'เมนู'];

export function MobileBottomNav() {
  return (
    <nav className="sabai-mobile-bottom-nav" aria-label="เมนูหลักบนมือถือ">
      {mobileItems.map((item) => (
        <Button key={item} type="text" className="sabai-nav-button">
          {item}
        </Button>
      ))}
    </nav>
  );
}
