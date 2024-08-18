import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import TextField from './index';

const meta = {
  component: TextField,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: '(event) => {}',
        },
      },
      control: {
        disable: true,
      },
    },
    type: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    label: '닉네임',
    autoFocus: false,
    disabled: false,
    hasError: false,
    errorMessages: [],
    type: 'text',
  },
  render: function Render(args) {
    const [value, setValue] = useState<string>('셀럽픽');

    return (
      <TextField
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    );
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    label: '비밀번호',
    type: 'password',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  render: Default.render,
};

export const HasError: Story = {
  args: {
    ...Default.args,
    errorMessages: ['이미 존재하는 닉네임 입니다.', '그 외 에러 메세지'],
  },
  render: Default.render,
};
