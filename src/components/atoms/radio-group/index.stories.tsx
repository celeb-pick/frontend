import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import RadioGroup from './index';

const meta = {
  component: RadioGroup,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
      table: {
        type: {
          summary: 'string | number',
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: '(event) => void',
        },
      },
      control: {
        disable: true,
      },
    },
    className: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    label: '성별',
    options: [{ value: '남성' }, { value: '여성' }],
  },
  render: function Render(args) {
    const [value, setValue] = useState('남성');
    return (
      <div className="w-60">
        <RadioGroup
          {...args}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    );
  },
};
