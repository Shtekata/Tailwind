// console.log('TAILWIND CONFIG IS LOADED')
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        180: 'var(--spacing-180)',
      },
    },
  },
}
