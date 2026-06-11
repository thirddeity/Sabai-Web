import { LoginOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { Component } from "react";
import { Link } from "react-router";

import logo from "@/assets/logo.png";
import type { BreakpointProps } from "@/hoc/withBreakpoint";
import { withBreakpoint } from "@/hoc/withBreakpoint";
import type { WithMainStoreProps } from "@/hoc/withMainStore";
import { withMainStore } from "@/hoc/withMainStore";
import { withRouter, type WithRouterProps } from "@/hoc/withRouter";
import { signOutDemo } from "@/modules/auth/session";
import { AppPath } from "@/router/paths";
import { GlassButton } from "../effects/GlassButton";
import "./index.css";

class FloatingTopNavComponent extends Component<
  WithMainStoreProps & BreakpointProps & WithRouterProps
> {
  handleSignOut = () => {
    signOutDemo();
    this.props.router.navigate(AppPath.login);
  };

  isActivePath = (path: string) => {
    const { pathname } = this.props.router.location;

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  render() {
    const {
      mainStore: { tabs },
      screens,
    } = this.props;
    const isLg = !!screens.lg;

    return (
      <header className="sabai-floating-top-nav px-4">
        <Flex align="center" justify="space-between">
          <Link to={AppPath.home} className="sabai-brand-link">
            <Flex align="center">
              <img src={logo} alt="sabai-logo" className="h-12 md:h-16.5" />
              <div className="sabai-aurora-content">
                <h1 className="sabai-aurora-title text-xl">สบาย - Sabai</h1>
              </div>
            </Flex>
          </Link>
          {isLg && (
            <Flex
              component="nav"
              gap={8}
              align="center"
              className="sabai-nav-links rounded-2xl p-1! bg-green-50!"
            >
              {tabs.map((item) => {
                const isActive = this.isActivePath(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className="sabai-nav-link"
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
                      <Flex gap={8} align="center" className={item.color}>
                        <div>{item.icon}</div>
                        <div>{item.label}</div>
                      </Flex>
                    </Button>
                  </Link>
                );
              })}
            </Flex>
          )}
          <GlassButton
            variant="solid"
            color="red"
            size={isLg ? "middle" : "small"}
            className="bg-red-500! h-8! w-10! lg:h-10! lg:w-auto!"
            onClick={this.handleSignOut}
          >
            <>
              <Flex gap={8} align="center" className="text-red-50">
                <LoginOutlined />
                {isLg && <span>ออกจากระบบ</span>}
              </Flex>
            </>
          </GlassButton>
        </Flex>
      </header>
    );
  }
}

const FloatingTopNav = withMainStore(
  withBreakpoint(withRouter(FloatingTopNavComponent)),
);
export { FloatingTopNav };
