/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E5F8C", // deep blue for water/dredging
          light: "#3C8BC1",
          dark: "#0F3A57",
        },
        secondary: {
          DEFAULT: "#8C6E4F", // earthy brown
          light: "#B09273",
          dark: "#5D4933",
        },
        neutral: {
          DEFAULT: "#F5F5F5", // light background
          dark: "#333333", // dark text
        },
        accent: {
          DEFAULT: "#E6B54A", // gold accent
          light: "#F2D089",
          dark: "#C99A2E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        'about-pattern': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
      },
    },
  },
  plugins: [],
};