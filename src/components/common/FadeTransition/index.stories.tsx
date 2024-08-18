import type { Meta, StoryObj } from '@storybook/react';

import Index from './index';

const meta = {
  component: Index,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    in: true,
    children: (
      <span>
        <strong>in</strong> 값이 변경되면 Fade 트랜지션이 적용 됩니다.
      </span>
    ),
  },
};
