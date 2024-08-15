import type { Meta, StoryObj } from '@storybook/react';

import { QueryClientProvider } from '@tanstack/react-query';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { queryClient } from '../../../config/tanstack-query';
import { mockFetchAuthStatus } from '../../../mocks/handlers/auth';
import Layout from './index';

const meta = {
  component: Layout,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * `<Layout.LogoAppBar />`와 `<Layout.BottomTabBar />`로 이루어진
 * 기본 레이아웃 구성 입니다.
 */
export const Default: Story = {
  args: {
    children: '',
  },
  render: function Render() {
    return (
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <div className="h-screen w-screen">
            <Layout>
              <Layout.LogoAppBar />
              <h1>페이지 내부 컨텐츠</h1>
              <Layout.BottomTabBar />
            </Layout>
          </div>
        </QueryParamProvider>
      </QueryClientProvider>
    );
  },
  parameters: {
    msw: {
      handlers: [mockFetchAuthStatus],
    },
  },
};

/**
 * `<Layout.TitleWithBackAppBar />`가 포함된 뒤로가기 액션이 가능한 레이아웃 입니다.
 */
export const WithBackButton: Story = {
  args: {
    children: '',
  },
  render: function Render() {
    return (
      <QueryClientProvider client={queryClient}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <div className="h-screen w-screen">
            <Layout>
              <Layout.TitleWithBackAppBar title="회원가입" navigateTo="" />
              <h1>페이지 내부 컨텐츠</h1>
            </Layout>
          </div>
        </QueryParamProvider>
      </QueryClientProvider>
    );
  },
  parameters: {
    msw: {
      handlers: [mockFetchAuthStatus],
    },
  },
};
