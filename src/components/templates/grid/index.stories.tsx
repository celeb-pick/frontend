import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from '../../atoms/skeleton';
import Grid from './index';

const meta: Meta<typeof Grid> = {
  component: Grid,
  decorators: [
    (Story) => (
      <div className="w-60 border border-solid border-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 10 }).map((_, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Skeleton key={i} height="100%" />
    )),
  },
};

export const FourColumn: Story = {
  args: {
    ...Default.args,
    col: 4,
  },
};
