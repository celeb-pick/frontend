import type { Meta, StoryObj } from '@storybook/react';

import exampleProfileImage from '../../../assets/storybook/avatar/example-profile.jpg';
import Avatar from './Avatar';

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 150,
  },
};

export const ImageAvatar: Story = {
  args: {
    ...Default.args,
    src: exampleProfileImage,
  },
};

/**
 * 이미지를 로딩할 때 나타나는 UI 입니다.
 */
export const FallbackImageAvatar: Story = {
  args: {
    ...Default.args,
    src: ' ',
  },
};
