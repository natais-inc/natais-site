import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandTeal: 'var(--teal)',
        brandIndigo: 'var(--indigo)',
        brandCoral: 'var(--coral)',
        brandGold: 'var(--gold)',
        brandLeaf: 'var(--leaf)',
      },
      fontFamily: {
        display: ['var(--display)'],
        body: ['var(--body)'],
      },
    },
  },
  plugins: [],
};
export default config;
