/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/pattern.svg')",
        grainy: "url('/grainy.png')",
      },
    },
  },
  plugins: [],
};
