/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#ff6b4a',
          light: '#ff8566',
          dark: '#e85d3a',
          soft: 'rgba(255, 107, 74, 0.12)',
          muted: 'rgba(255, 107, 74, 0.08)',
        },
        surface: {
          DEFAULT: '#ffffff',
          elevated: '#fafafa',
          muted: '#f4f4f5',
        },
        dark: {
          DEFAULT: '#0a0a0b',
          elevated: '#141416',
          muted: '#18181b',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 10px 40px -15px rgb(0 0 0 / 0.15), 0 4px 20px -8px rgb(255 107 74 / 0.2)',
        'card-dark': '0 1px 3px 0 rgb(0 0 0 / 0.3)',
        'card-hover-dark': '0 25px 50px -12px rgb(0 0 0 / 0.5)',
        'glow': '0 0 60px -15px rgba(255, 107, 74, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(255,107,74,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,107,74,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(255,107,74,0.04) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(255,107,74,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(255,107,74,0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
