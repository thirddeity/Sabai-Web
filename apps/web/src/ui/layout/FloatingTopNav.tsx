import { Button, Flex } from "antd";
import { Link } from "react-router";
import logo from "@/assets/logo.png";
import { Component } from "react";
import type { WithMainStoreProps } from "@/hoc/withMainStore";
import { withMainStore } from "@/hoc/withMainStore";
import "./index.css";
import { withBreakpoint } from "@/hoc/withBreakpoint";
import type { BreakpointProps } from "@/hoc/withBreakpoint";
import { signOutDemo } from "@/modules/auth/session";
import { withRouter, type WithRouterProps } from "@/hoc/withRouter";
import { LoginOutlined } from "@ant-design/icons";
import { GlassButton } from "../effects/GlassButton";

class FloatingTopNavComponent extends Component<
  WithMainStoreProps & BreakpointProps & WithRouterProps
> {
  handleSignOut = () => {
    signOutDemo();
    this.props.router.navigate("/login");
  };

  render() {
    const {
      mainStore: { tabs },
      screens,
    } = this.props;
    const isLg = !!screens.lg;
    return (
      <header className="sabai-floating-top-nav px-4">
        <Flex align="center" justify={"space-between"}>
          <Link to="/dashboard" className="sabai-brand-link">
            <Flex align="center">
              <img src={logo} alt="sabai-logo" className="h-12 md:h-16.5" />
              <div className="sabai-aurora-content">
                <h1 className="sabai-aurora-title text-xl">สบาย - Sabai</h1>
              </div>
            </Flex>
          </Link>
          {isLg && (
            <>
              <Flex
                component="nav"
                gap={8}
                align="center"
                className="sabai-nav-links rounded-2xl"
              >
                {tabs.map((item) => (
                  <Button
                    key={item.label}
                    type="text"
                    className="sabai-nav-button"
                  >
                    <Flex gap={8} align="center" className={item.color}>
                      <div>{item.icon}</div>
                      <div>{item.label}</div>
                    </Flex>
                  </Button>
                ))}
              </Flex>
            </>
          )}
          <GlassButton
            variant="solid"
            color="red"
            size={isLg ? "middle" : "small"}
            className="bg-red-500! h-11!"
            onClick={this.handleSignOut}
          >
            <>
              <Flex gap={8} align="center" className="text-red-50">
                <LoginOutlined />
                {isLg && (<span>ออกจากระบบ</span>)}
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
