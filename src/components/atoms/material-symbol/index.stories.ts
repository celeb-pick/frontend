import type { Meta, StoryObj } from '@storybook/react';

import MaterialSymbol from './material-symbol';

const meta = {
  component: MaterialSymbol,
  argTypes: {
    name: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof MaterialSymbol>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'home',
    size: 100,
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    wght: 700,
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    fill: true,
  },
};
