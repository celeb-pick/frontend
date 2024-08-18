import type { Meta, StoryObj } from '@storybook/react';

import Skeleton from './index';

const meta = {
  component: Skeleton,
  argTypes: {
    width: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    height: {
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    variant: {
      table: {
        type: {
          summary: 'rectangular | circular',
        },
      },
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: 200 },
};

export const Box: Story = {
  args: { width: 200, height: 100 },
};

export const Circle: Story = {
  args: { width: 40, height: 40, variant: 'circular' },
};
