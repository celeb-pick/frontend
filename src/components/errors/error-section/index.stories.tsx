import type { Meta, StoryObj } from '@storybook/react';

import tw from 'twin.macro';
import ErrorSection from './index';

const meta: Meta<typeof ErrorSection> = {
  component: ErrorSection,
  decorators: [
    (Story) => (
      <div css={[tw`border-solid border w-96 h-[600px]`]}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '잠시 연결이 늦어지고 있습니다.',
    subTittle: '조금 뒤 다시 시도해 주세요.',
    resetErrorBoundary: () => {},
  },
};

export const TitleOnly: Story = {
  args: {
    title: '에러가 발생 했습니다.',
    subTittle: '관리자에게 문의해 주세요.',
  },
};
