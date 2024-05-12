/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      bluish: '#052955',
      light: '#ffffff',
      darkish: '#000000',
      blukish: '#00FFFF',
      backcolor: '#f0f9ff',
      gray: '#737373',
      graywhite: '#e5e7eb',
      bluen: '#bfdbfe',
      cyan: '#0891b2',
      cyan2: '#22d3ee',
      transparent: 'transparent',
      red: '#dc2626',
      green: '#16a34a',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
    },
  },
  plugins: [],
};
