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
    originalImageUrl: {
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    croppedImageUrl: {
      table: {
        type: {
          summary: 'string',
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
    originalImageUrl: undefined,
    setOriginalImageUrl: () => {},
    croppedImageUrl: undefined,
    setCroppedImageUrl: () => {},
  },
  render: function Render() {
    const [image, setImage] = useState<File>();
    const [originalImageUrl, setOriginalImageUrl] = useState<string>();
    const [croppedImageUrl, setCroppedImageUrl] = useState<string>();

    return (
      <ImageUploader
        image={image}
        setImage={setImage}
        originalImageUrl={originalImageUrl}
        setOriginalImageUrl={setOriginalImageUrl}
        croppedImageUrl={croppedImageUrl}
        setCroppedImageUrl={setCroppedImageUrl}
      />
    );
  },
};
