import type { Meta, StoryObj } from '@storybook/react';

import { ComponentPropsWithoutRef } from 'react';
import item1Image from '../../../assets/storybook/outfit-feed/item-1.jpg';
import item2Image from '../../../assets/storybook/outfit-feed/item-2.webp';
import post1Image from '../../../assets/storybook/outfit-feed/post-1.png';
import post2Image from '../../../assets/storybook/outfit-feed/post-2.png';
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

const fakeData = {
  pageParams: [],
  pages: [
    {
      page: 1,
      next: null,
      previous: null,
      count: 2,
      results: [
        {
          id: 2,
          title: '장원영 사복 패션',
          createdAt: '2024-08-07T02:00:16.690393+09:00',
          gender: '여성',
          imageUrl: post1Image,
          scrapCount: 0,
          isScrapped: null,
          celebrity: {
            id: 4,
            name: '장원영',
          },
          creator: {
            id: 1,
            profileImageUrl: '',
            nickname: '셀럽픽',
          },
          items: [
            {
              id: 2,
              name: '와펜 장식 데님 자켓',
              purchaseLink:
                'https://shopping.naver.com/window-products/brandfashion/9834996725?NaPm=ct%3Dlziny4b4%7Cci%3D003a4ac2ecf3737068c895c28a187279e0dda1c6%7Ctr%3Dslct%7Csn%3D2965231%7Chk%3D1a775ba73e52d5f94819b9720607ea8339ca9b24',
              imageUrl: item1Image,
              scrapCount: 0,
              isScrapped: null,
              brand: {
                id: 2,
                name: '샤틴',
              },
            },
          ],
        },
        {
          id: 1,
          title: '피오 봄 코디',
          createdAt: '2024-07-29T14:05:12.561135+09:00',
          gender: '남성',
          imageUrl: post2Image,
          scrapCount: 0,
          isScrapped: null,
          celebrity: {
            id: 2,
            name: '피오',
          },
          creator: {
            id: 1,
            profileImageUrl: '',
            nickname: '셀럽픽',
          },
          items: [
            {
              id: 1,
              name: 'T.G.I.F 자카드 니트(SKY BLUE)',
              purchaseLink: 'https://29cm.onelink.me/1080201211/op3y8a1l',
              imageUrl: item2Image,
              scrapCount: 1,
              isScrapped: null,
              brand: {
                id: 1,
                name: '프라이',
              },
            },
          ],
        },
      ],
    },
  ],
} as QueryResult['data'];

const fakeQueryResult = {
  data: fakeData,
  isFetchingNextPage: false,
  fetchNextPage: () => {},
  hasNextPage: false,
} as QueryResult;

export const Default: Story = {
  args: {
    suspenseInfiniteQueryResult: fakeQueryResult,
    style: {
      width: 400,
    },
  },
};
