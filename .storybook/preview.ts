import type { Preview } from '@storybook/react';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../src/index.css';

initializeMSW({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  loaders: [mswLoader],
};

export default preview;
