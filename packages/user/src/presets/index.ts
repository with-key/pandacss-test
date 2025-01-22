import { definePreset, defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    display: "flex",
  },
  variants: {
    visual: {
      funky: { bg: "red.200", color: "white" },
      edgy: { border: "3px solid token(colors.purple.500)" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "40px" },
    },
    shape: {
      square: { borderRadius: "0" },
      circle: { borderRadius: "full" },
    },
  },
  defaultVariants: {
    visual: "funky",
    size: "sm",
    shape: "circle",
  },
});

export const corePresets = definePreset({
  name: "corePresets",
  theme: {
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
    recipes: {
      button: buttonRecipe,
    },
  },
});
