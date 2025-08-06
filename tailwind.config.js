/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dots: "radial-gradient(#FFF8E8 1px, transparent 0.5px)",
      },
      backgroundSize: {
        dots: "10px 10px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
