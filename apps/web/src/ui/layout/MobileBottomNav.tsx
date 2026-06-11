import { Button, Flex } from "antd";
import { Component } from "react";
import { Link } from "react-router";

import type { WithMainStoreProps } from "@/hoc/withMainStore";
import { withMainStore } from "@/hoc/withMainStore";
import { withRouter, type WithRouterProps } from "@/hoc/withRouter";

class MobileBottomNavComponent extends Component<
  WithMainStoreProps & WithRouterProps
> {
  isActivePath = (path: string) => {
    const { pathname } = this.props.router.location;

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  render() {
    const {
      mainStore: { tabs },
    } = this.props;

    return (
      <nav
        className="sabai-mobile-bottom-nav"
        aria-label="เมนูหลักบนมือถือ"
      >
        {tabs.map((item) => {
          const isActive = this.isActivePath(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive ? "page" : undefined}
              className="sabai-mobile-nav-link"
            >
              <Button
                type="text"
                className={[
                  "sabai-nav-button",
                  isActive ? "sabai-nav-button-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Flex vertical align="center" className={item.color}>
                  <div>{item.icon}</div>
                  <div className="text-xs">{item.label}</div>
                </Flex>
              </Button>
            </Link>
          );
        })}
      </nav>
    );
  }
}

const MobileBottomNav = withMainStore(withRouter(MobileBottomNavComponent));
export { MobileBottomNav };
