/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      darkMode: 'class', // or 'media' or 'class'
      theme: {
        extend: {
          colors: {
            dark: '#1a1a1a',
          },
        },
      },
      plugins: [],
    }
