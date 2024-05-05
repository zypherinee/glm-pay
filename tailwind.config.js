module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        teal: { 400: "#28a197" },
        blue_gray: { 200: "#b1b5bb" },
        gray: { 200: "#e5e7eb" },
        teal_500: "#1c8e84",
      },
      boxShadow: { xs: "0px 8px 24px -4px #ffffff14" },
      fontFamily: { inter: "Inter", opensans: "Open Sans", roboto: "Roboto", raleway: "Raleway" },
      backgroundImage: { gradient: "linear-gradient(180deg, #28a19707,#0e3b3707)" },
      textShadow: { ts: "0px 4px 12px #1ed76019" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
