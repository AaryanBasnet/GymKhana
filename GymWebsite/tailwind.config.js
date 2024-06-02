/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-indigo-200',
    'bg-gray-200',
    'bg-green-200',
    'bg-red-200',
    'bg-yellow-200',
    'bg-blue-200',
    'bg-indigo-500',
    'bg-gray-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-blue-500',
  ],
}