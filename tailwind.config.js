/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0a192f", // navy muy oscuro
          800: "#1a2a6c", // navy clásico
          600: "#273c75", // navy medio
        },
      },
    },
  },
  plugins: [],
};
