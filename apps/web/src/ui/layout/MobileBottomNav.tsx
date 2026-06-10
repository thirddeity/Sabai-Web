import { Button } from 'antd';

const mobileItems = ['Hub', 'Search', 'Today', 'More'];

export function MobileBottomNav() {
  return (
    <nav className="sabai-mobile-bottom-nav" aria-label="Mobile navigation">
      {mobileItems.map((item) => (
        <Button key={item} type="text" shape="round">
          {item}
        </Button>
      ))}
    </nav>
  );
}
