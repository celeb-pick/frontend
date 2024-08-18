import type { Meta, StoryObj } from '@storybook/react';

import { tailwindColors } from '../../../constants/tailwind';
import Chip from './Chip';

const meta = {
  component: Chip,
  argTypes: {
    color: {
      options: Object.keys(tailwindColors),
      control: { type: 'select' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: 'label',
    color: 'gray',
  },
};

export const OutlinedColor: Story = {
  args: {
    ...Outlined.args,
    color: 'purple',
  },
};

export const Filled: Story = {
  args: {
    ...Outlined.args,
    variant: 'filled',
  },
};

export const FilledColor: Story = {
  args: {
    ...Filled.args,
    color: 'purple',
  },
};
