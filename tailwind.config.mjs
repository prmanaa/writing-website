/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          'bg-light':      '#FAF6F1',
          'bg-dark':       '#1C1410',
          'text-light':    '#2C1F14',
          'text-dark':     '#EDE0D0',
          'accent-light':  '#A67B5B',
          'accent-dark':   '#C49A78',
          'surface-light': '#F0E6D8',
          'surface-dark':  '#261C14',
          'border-light':  '#E0D4C4',
          'border-dark':   '#3A2C22',
        },
      },
      fontFamily: {
        lora:  ['Lora', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        article: '680px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: '17px',
            lineHeight: '1.75',
            color: theme('colors.brand.text-light'),
            maxWidth: '680px',
            a: {
              color: theme('colors.brand.accent-light'),
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': { color: theme('colors.brand.text-light') },
            },
            h1: { fontFamily: theme('fontFamily.lora').join(', ') },
            h2: { fontFamily: theme('fontFamily.lora').join(', ') },
            h3: { fontFamily: theme('fontFamily.lora').join(', ') },
            h4: { fontFamily: theme('fontFamily.lora').join(', ') },
            code: {
              backgroundColor: theme('colors.brand.surface-light'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.9em',
            },
            'code::before': { content: 'none' },
            'code::after':  { content: 'none' },
            blockquote: {
              borderLeftColor: theme('colors.brand.accent-light'),
              color: theme('colors.brand.text-light'),
              fontStyle: 'normal',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.brand.text-dark'),
            a: {
              color: theme('colors.brand.accent-dark'),
              '&:hover': { color: theme('colors.brand.text-dark') },
            },
            code: { backgroundColor: theme('colors.brand.surface-dark') },
            blockquote: {
              borderLeftColor: theme('colors.brand.accent-dark'),
              color: theme('colors.brand.text-dark'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
