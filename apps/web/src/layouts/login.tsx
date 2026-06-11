import { Layout } from 'antd';
import { Component } from 'react';
import { Outlet } from 'react-router';

import { GradientBackground } from '@/ui/effects/GradientBackground';
import { PageContainer } from '@/ui/layout/PageContainer';

export class LoginLayout extends Component {
  render() {
    return (
      <GradientBackground>
        <Layout className="min-h-dvh bg-transparent">
          <Layout.Content className="flex min-h-dvh items-center justify-center">
            <PageContainer narrow>
              <Outlet />
            </PageContainer>
          </Layout.Content>
        </Layout>
      </GradientBackground>
    );
  }
}
