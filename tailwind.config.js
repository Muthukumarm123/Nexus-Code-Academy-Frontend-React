/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 50:'#f6f7f9',100:'#eceef2',200:'#d4d8e0',300:'#aab1c0',400:'#7d8599',500:'#5a6378',600:'#434b5d',700:'#353c4b',800:'#2a3040',900:'#1a1f2e',950:'#111521' },
        brand: { 50:'#eef6ff',100:'#d9ecff',200:'#b5d8ff',300:'#84beff',400:'#4b9bff',500:'#1e7ae6',600:'#0b62cc',700:'#0a4fa3',800:'#0d4485',900:'#0f3a6e',950:'#0a2547' },
        accent: { 50:'#fffbeb',100:'#fef3c7',200:'#fde68a',300:'#fcd34d',400:'#fbbf24',500:'#f59e0b',600:'#d97706',700:'#b45309',800:'#92400e',900:'#78350f' },
      },
      fontFamily: { sans:['Inter','sans-serif'], serif:['Lora','serif'], mono:['JetBrains Mono','monospace'] },
      keyframes: {
        fadeIn: { '0%': { opacity:'0' }, '100%': { opacity:'1' } },
        slideUp: { '0%': { opacity:'0', transform:'translateY(16px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        slideIn: { '0%': { transform:'translateX(-100%)' }, '100%': { transform:'translateX(0)' } },
      },
      animation: { 'fade-in':'fadeIn .4s ease-out', 'slide-up':'slideUp .5s ease-out', 'slide-in':'slideIn .4s ease-out' },
    },
  },
  plugins: [],
};
