const plugin = require('tailwindcss/plugin');

const baseStyle = {
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
}

const lineClamp = plugin(function ({ addUtilities }) {
  addUtilities({
    '.line-clamp-1': {
      ...baseStyle,
      '-webkit-line-clamp': 1,
    },
    '.line-clamp-2': {
      ...baseStyle,
      '-webkit-line-clamp': 2,
    },
    '.line-clamp-3': {
      ...baseStyle,
      '-webkit-line-clamp': 3,
    },
    '.line-clamp-4': {
      ...baseStyle,
      '-webkit-line-clamp': 4,
    },
    '.line-clamp-5': {
      ...baseStyle,
      '-webkit-line-clamp': 5,
    },
    '.line-clamp-6': {
      ...baseStyle,
      '-webkit-line-clamp': 6,
    },
    '.line-clamp-none': {
      overflow: 'visible',
      display: 'block',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 1,
    },
  });
});

module.exports = lineClamp;
