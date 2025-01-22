import { defineConfig } from "@pandacss/dev";
import { corePresets } from "./src/presets";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  presets: [corePresets],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  // The output directory for your css system
  importMap: "@biskit/styled-system",
  outdir: "../../styled-system",

  jsxFramework: "react",
});
