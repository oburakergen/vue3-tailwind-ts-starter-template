/* eslint-disable @typescript-eslint/no-require-imports */
const forms = require('@tailwindcss/forms')
  /** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        button: {
          primary: '#fca311',
          secondary: '#e5e5e5',
        },
        navbar: {
          primary: '#14213d',
        }
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    forms,
  ],
}

