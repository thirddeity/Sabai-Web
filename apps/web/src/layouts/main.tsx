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
    console.log('Current breakpoints:', screens);

    return (
      <GradientBackground>
        <Layout className="min-h-screen bg-transparent">
          <FloatingTopNav />
          <Layout.Content>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Layout.Content>
          {!screens.lg && (<MobileBottomNav />)}
        </Layout>
      </GradientBackground>
    );
  }
}

const MainLayout = withBreakpoint(MainLayoutComponent);
export { MainLayout };
