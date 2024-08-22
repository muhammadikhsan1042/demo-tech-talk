module.exports = {
  content: [
    "./public/index.html",
    "./src/*.tsx",
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      basic: {
        black: "rgba(0, 0, 0, var(--tw-bg-opacity))",
        white: "rgba(255, 255, 255, var(--tw-bg-opacity))",
        transparent: "rgba(255, 255, 255, 0)",
      },
      orange: {
        10: "rgba(255, 240, 223, var(--tw-bg-opacity))",
        50: "rgba(248, 224, 197, var(--tw-bg-opacity))",
        100: "rgba(255, 229, 184, var(--tw-bg-opacity))",
        200: "rgba(248, 143, 67, var(--tw-bg-opacity))",
        300: "rgba(246, 89, 0, var(--tw-bg-opacity))",
        400: "rgba(210, 76, 0, var(--tw-bg-opacity))",
        500: "rgba(149, 54, 0, var(--tw-bg-opacity))",
      },
      red: {
        10: "rgba(255, 237, 237, var(--tw-bg-opacity))",
        50: "rgba(247, 213, 213, var(--tw-bg-opacity))",
        100: "rgba(255, 184, 184, var(--tw-bg-opacity))",
        200: "rgba(253, 81, 81, var(--tw-bg-opacity))",
        300: "rgba(220, 0, 0, var(--tw-bg-opacity))",
        400: "rgba(182, 0, 0, var(--tw-bg-opacity))",
        500: "rgba(149, 14, 14, var(--tw-bg-opacity))",
      },
      gray: {
        10: "rgba(237, 237, 237, var(--tw-bg-opacity))",
        50: "rgba(226, 226, 226, var(--tw-bg-opacity))",
        100: "rgba(214, 214, 214, var(--tw-bg-opacity))",
        200: "rgba(179, 179, 179, var(--tw-bg-opacity))",
        300: "rgba(134, 134, 134, var(--tw-bg-opacity))",
        400: "rgba(95, 95, 95, var(--tw-bg-opacity))",
        500: "rgba(53, 53, 53, var(--tw-bg-opacity))",
      },
      green: {
        10: "rgba(229, 255, 233, var(--tw-bg-opacity))",
        50: "rgba(199, 243, 206, var(--tw-bg-opacity))",
        100: "rgba(184, 255, 218, var(--tw-bg-opacity))",
        200: "rgba(52, 209, 77, var(--tw-bg-opacity))",
        300: "rgba(26, 174, 58, var(--tw-bg-opacity))",
        400: "rgba(4, 138, 17, var(--tw-bg-opacity))",
        500: "rgba(2, 90, 11, var(--tw-bg-opacity))",
      },
      blue: {
        10: "rgba(231, 243, 255, var(--tw-bg-opacity))",
        50: "rgba(208, 227, 248, var(--tw-bg-opacity))",
        100: "rgba(184, 216, 255, var(--tw-bg-opacity))",
        200: "rgba(52, 125, 209, var(--tw-bg-opacity))",
        300: "rgba(16, 100, 198, var(--tw-bg-opacity))",
        400: "rgba(4, 66, 138, var(--tw-bg-opacity))",
        500: "rgba(2, 43, 90, var(--tw-bg-opacity))",
      },
    },
    fontFamily: {
      petrona: ["Petrona", "serif"],
      grenze: ["Grenze", "serif"],
    },
  },
  plugins: [],
};
