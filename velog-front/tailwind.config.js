/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard', 'Noto Sans KR', 'Inter', 'Montserrat',
          'ui-sans-serif', 'system-ui', 'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
