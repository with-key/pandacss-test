import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  presets: [],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          blue: {
            100: { value: "#EBF8FF" },
            200: { value: "#BEE3F8" },
            300: { value: "#90CDF4" },
            400: { value: "#63B3ED" },
            500: { value: "#4299E1" },
            600: { value: "#3182CE" },
            700: { value: "#2B6CB0" },
            800: { value: "#2C5282" },
            900: { value: "#2A4365" },
            950: { value: "#1A365D" },
          },
          red: {
            100: { value: "#FFF5F5" },
            200: { value: "#FED7D7" },
            300: { value: "#FEB2B2" },
            400: { value: "#FC8181" },
            500: { value: "#F56565" },
            600: { value: "#E53E3E" },
            700: { value: "#C53030" },
            800: { value: "#9B2C2C" },
            900: { value: "#742A2A" },
            950: { value: "#5C1F1F" },
          },
          green: {
            100: { value: "#F0FFF4" },
            200: { value: "#C6F6D5" },
            300: { value: "#9AE6B4" },
            400: { value: "#68D391" },
            500: { value: "#48BB78" },
            600: { value: "#38A169" },
            700: { value: "#2F855A" },
            800: { value: "#276749" },
            900: { value: "#22543D" },
            950: { value: "#1C4532" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  importMap: "@biskit/styled-system",
  outdir: "../../styled-system",

  jsxFramework: "react",
});
