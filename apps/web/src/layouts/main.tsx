import { Layout } from 'antd';
import { Component } from 'react';
import { Outlet } from 'react-router';

import { GradientBackground } from '@/ui/effects/GradientBackground';
import { FloatingTopNav } from '@/ui/layout/FloatingTopNav';
import { MobileBottomNav } from '@/ui/layout/MobileBottomNav';
import { PageContainer } from '@/ui/layout/PageContainer';

export class MainLayout extends Component {
  render() {
    return (
      <GradientBackground>
        <Layout className="min-h-screen bg-transparent">
          <FloatingTopNav />
          <Layout.Content>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Layout.Content>
          <MobileBottomNav />
        </Layout>
      </GradientBackground>
    );
  }
}
