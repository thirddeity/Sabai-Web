import { Layout } from 'antd';
import { Component } from 'react';
import { Outlet } from 'react-router';

import type { BreakpointProps } from '@/hoc/withBreakpoint';
import { withBreakpoint } from '@/hoc/withBreakpoint';
import { GradientBackground } from '@/ui/effects/GradientBackground';
import { FloatingTopNav } from '@/ui/layout/FloatingTopNav';
import { MobileBottomNav } from '@/ui/layout/MobileBottomNav';
import { PageContainer } from '@/ui/layout/PageContainer';

class MainLayoutComponent extends Component<BreakpointProps> {
  render() {
    const { screens } = this.props;

    return (
      <GradientBackground>
        <Layout className="min-h-dvh bg-transparent">
          <FloatingTopNav />
          <Layout.Content>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Layout.Content>
          {!screens.md && (<MobileBottomNav />)}
        </Layout>
      </GradientBackground>
    );
  }
}

const MainLayout = withBreakpoint(MainLayoutComponent);
export { MainLayout };
