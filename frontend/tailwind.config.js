/**
 * Tailwind CSS Configuration - READOVA Online Bookstore
 * Custom colors match the READOVA logo (blue #1e5a99, orange #c4883a)
 * 
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue color matching READOVA logo
        primary: {
          50: '#f0f5fa',
          100: '#dce8f4',
          200: '#b8d1e9',
          300: '#8bb5da',
          400: '#5a94c7',
          500: '#3a79b0',
          600: '#1e5a99', // Main logo blue
          700: '#1a4d82',
          800: '#17416d',
          900: '#14375b',
        },
        // Secondary orange/gold color matching READOVA logo
        secondary: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f4dbbf',
          300: '#ecc394',
          400: '#d9a05c',
          500: '#c4883a', // Main logo orange
          600: '#b07432',
          700: '#925d2a',
          800: '#774b26',
          900: '#623e22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
