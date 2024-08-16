import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Select from '.';
import { DropdownValueType } from '../dropdown/types';

const meta = {
  component: Select,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
      table: {
        type: {
          summary: 'string | null | undefined',
        },
      },
    },
    onChangeValue: {
      control: {
        disable: true,
      },
    },
    options: {
      control: {
        disable: true,
      },
    },
    placeholder: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 350,
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: null,
    onChangeValue: () => {},
    options: [{ value: '상의' }, { value: '하의' }, { value: '악세사리' }],
  },
  render: function Render(args) {
    const [value, setValue] = useState<DropdownValueType>(null);

    return (
      <Select
        {...args}
        className="mx-auto mt-10"
        value={value}
        onChangeValue={setValue}
      />
    );
  },
};

/**
 * `없음`을 선택할 수 있는 Optional Select 입니다.
 */
export const OptionalSelect: Story = {
  args: {
    ...Default.args,
    options: [{ value: null, label: '없음' }, ...Default.args.options],
  },
  render: Default.render,
};
