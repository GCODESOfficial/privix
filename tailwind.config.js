// tailwind.config.js
export const content = ['./src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
    extend: {
        transform: ['group-hover'],
  perspective: {
    DEFAULT: '1000px',
  },
  rotate: {
    'y-180': 'rotateY(180deg)',
  },
  backfaceVisibility: ['responsive'],
    },
};
export const plugins = [];
  