import type { Meta, StoryObj } from '@storybook/react';

import { tailwindColors } from '../../../constants/tailwind';
import Button from './index';

const meta: Meta<typeof Button> = {
  component: Button,
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
    size: {
      table: {
        type: {
          summary: 'small | medium | large',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-60 flex-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '회원가입',
    color: 'blue',
    size: 'medium',
    fullWidth: false,
    isLoading: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
