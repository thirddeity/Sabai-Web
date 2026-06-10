import { Layout, Typography } from 'antd';
import { Component } from 'react';
import { Link, Outlet } from 'react-router';

import { GradientBackground } from '@/ui/effects/GradientBackground';
import { PageContainer } from '@/ui/layout/PageContainer';

export class MainLayout extends Component {
  render() {
    return (
      <GradientBackground>
        <Layout className="min-h-screen bg-transparent">
          <Layout.Header className="sabai-topbar">
          <Link to="/dashboard" className="sabai-brand-link">
            Sabai Web
          </Link>
          <Typography.Text type="secondary">MVP Scaffold</Typography.Text>
        </Layout.Header>
          <Layout.Content>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </Layout.Content>
        </Layout>
      </GradientBackground>
    );
  }
}
