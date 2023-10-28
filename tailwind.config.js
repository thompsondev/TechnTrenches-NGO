module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fafc",
          100: "#f6f6f6",
          500: "#a6a6a6",
          600: "#797979",
          700: "#696969",
          900: "#412e15",
          "100_a5": "#f6f6f6a5",
          "900_00": "#16161600",
          "100_7a": "#f6f6f67a",
          "100_01": "#f2f5f8",
          "500_19": "#a1a1a119",
        },
        blue: {
          100: "#bbd4fc",
          900: "#103f8a",
          A200: "#3a86ff",
          A200_01: "#4285f4",
        },
        red: { 500: "#ea4335" },
        green: { 600: "#34a853" },
        black: {
          900: "#000000",
          "900_87": "#00000087",
          "900_01": "#0c0d10",
          "900_33": "#00000033",
        },
        blue_gray: { 400: "#81838a" },
        amber: { 500: "#fbbc04" },
        indigo: { 50: "#e5eaf1" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        clashdisplay: "Clash Display",
        grifter: "GRIFTER",
        neuehaasgroteskdisplaypro: "Neue Haas Grotesk Display Pro",
        plusjakartasans: "Plus Jakarta Sans",
      },
      boxShadow: {
        bs: "48px 48px  100px 0px #00000033",
        bs1: "-13.01px 13.01px  104px 0px #a1a1a119",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
