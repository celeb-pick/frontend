import type { Meta, StoryObj } from '@storybook/react';

import { useSearchParams } from 'react-router-dom';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import OutfitFilter from './index';

const meta = {
  component: OutfitFilter,
  decorators: [withRouter],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
    reactRouter: reactRouterParameters({
      routing: { path: '/' },
    }),
  },
} satisfies Meta<typeof OutfitFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: function Render() {
    const [searchParams] = useSearchParams();

    const gender = searchParams.get('gender');
    const celebrityCategory = searchParams.get('celebrityCategory');

    return (
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <div className="mt-10 flex flex-col items-center gap-y-4">
          <h1 className="text-xl font-bold">Query Parameters</h1>
          <div>celebrityCategory: {celebrityCategory}</div>
          <div>gender: {gender}</div>
          <br />
          <div className="w-full border border-solid p-4">
            <OutfitFilter />
          </div>
        </div>
      </QueryParamProvider>
    );
  },
};
