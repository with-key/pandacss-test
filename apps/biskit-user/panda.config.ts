import { defineConfig } from "@pandacss/dev";
import { corePresets } from "@mold/user/presets";

export default defineConfig({
  presets: [corePresets],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@mold/user/src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  // The output directory for your css system
  importMap: "@biskit/styled-system",
  outdir: "../../styled-system",

  jsxFramework: "react",
});
