const plugin = require('tailwindcss/plugin');

const flexCenter = plugin(function ({ addUtilities }) {
  addUtilities({
    '.flex-center': {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    },
    '.flex-x-center': {
      display: 'flex',
      'justify-content': 'center',
    },
    '.flex-y-center': {
      display: 'flex',
      'align-items': 'center',
    },
  });
});

module.exports = flexCenter;
