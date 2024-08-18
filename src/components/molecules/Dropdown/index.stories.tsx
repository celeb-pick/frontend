import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Dropdown from '.';
import { DropdownValueType } from './types';

const meta = {
  component: Dropdown,
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
    children: {
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
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: null,
    onChangeValue: () => {},
    children: null,
  },
  render: function Render(args) {
    const [value, setValue] = useState<DropdownValueType>(null);
    return (
      <Dropdown
        className="mx-auto mt-10"
        {...args}
        value={value}
        onChangeValue={setValue}
      >
        <Dropdown.Trigger
          as={
            <button
              className="rounded border border-solid border-gray-300 p-4"
              type="button"
            >
              {value ?? '선택'}
            </button>
          }
        />
        <Dropdown.Menu>
          <Dropdown.Item value="상의" />
          <Dropdown.Item value="하의" />
          <Dropdown.Item value="악세서리" />
          <Dropdown.Item value="신발" />
          <Dropdown.Item value="기타" />
        </Dropdown.Menu>
      </Dropdown>
    );
  },
};
