import type { Meta, StoryObj } from '@storybook/react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ComponentPropsWithoutRef } from 'react';

import { queryClient } from '../../../config/tanstack-query';
import mockOutfitFeed from '../../../mocks/datas/outfit-feed';
import { mockFetchAuthStatus } from '../../../mocks/handlers/auth';
import {
  mockScrapOutfitItem,
  mockScrapOutfitPost,
  mockUnscrapOutfitItem,
  mockUnscrapOutfitPost,
} from '../../../mocks/handlers/scrap';
import OutfitFeed from './index';

const meta = {
  component: OutfitFeed,
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof OutfitFeed>;

export default meta;

type Story = StoryObj<typeof meta>;

type QueryResult = ComponentPropsWithoutRef<
  typeof OutfitFeed
>['suspenseInfiniteQueryResult'];

const mockQueryResult = {
  data: mockOutfitFeed,
  isFetchingNextPage: false,
  fetchNextPage: () => {},
  hasNextPage: false,
} as QueryResult;

/**
 * API 호출이 모킹되어있어 스크랩 제거 기능은 스토리상에 미구현 되어있습니다.
 */
export const Default: Story = {
  args: {
    suspenseInfiniteQueryResult: mockQueryResult,
    style: {
      width: 400,
    },
  },
  render: function Render({ suspenseInfiniteQueryResult, style }) {
    return (
      <QueryClientProvider client={queryClient}>
        <OutfitFeed
          suspenseInfiniteQueryResult={suspenseInfiniteQueryResult}
          style={style}
        />
      </QueryClientProvider>
    );
  },
  parameters: {
    msw: {
      handlers: [
        mockFetchAuthStatus,
        mockScrapOutfitPost,
        mockUnscrapOutfitPost,
        mockScrapOutfitItem,
        mockUnscrapOutfitItem,
      ],
    },
  },
};
