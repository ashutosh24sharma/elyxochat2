/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mb':'350px',
      'tb': '640px',
      // => @media (min-width: 640px) { ... }

      'lp': '1024px',
      // => @media (min-width: 1024px) { ... }

      'dk': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      
    },
  },
  plugins: [],
}