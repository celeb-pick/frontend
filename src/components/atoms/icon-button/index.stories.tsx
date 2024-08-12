import type { Meta, StoryObj } from '@storybook/react';

import MaterialSymbol from '../material-symbol';
import IconButton from './index';

const meta = {
  component: IconButton,
  argTypes: {
    icon: {
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <MaterialSymbol name="bookmark" />,
  },
};
