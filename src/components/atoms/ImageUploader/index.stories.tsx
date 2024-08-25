import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import ImageUploader from './index';

const meta = {
  component: ImageUploader,
  argTypes: {
    image: {
      table: {
        type: {
          summary: 'File',
        },
      },
    },
  },
} satisfies Meta<typeof ImageUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: undefined,
    setImage: () => {},
  },
  render: function Render() {
    const [image, setImage] = useState<File>();
    return <ImageUploader image={image} setImage={setImage} />;
  },
};
