import { Layout } from 'antd';
import { Component } from 'react';
import { Outlet } from 'react-router';

import { GradientBackground } from '@/ui/effects/GradientBackground';
import { PageContainer } from '@/ui/layout/PageContainer';

export class LoginLayout extends Component {
  render() {
    return (
      <GradientBackground>
        <Layout className="min-h-screen bg-transparent">
          <Layout.Content className="flex min-h-screen items-center justify-center">
            <PageContainer narrow>
              <Outlet />
            </PageContainer>
          </Layout.Content>
        </Layout>
      </GradientBackground>
    );
  }
}
