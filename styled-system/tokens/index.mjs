const tokens = {
  "colors.blue.100": {
    "value": "#EBF8FF",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#BEE3F8",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#90CDF4",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#63B3ED",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#4299E1",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#3182CE",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#2B6CB0",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#2C5282",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#2A4365",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#1A365D",
    "variable": "var(--colors-blue-950)"
  },
  "colors.red.100": {
    "value": "#FFF5F5",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#FED7D7",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#FEB2B2",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#FC8181",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#F56565",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#E53E3E",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#C53030",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#9B2C2C",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#742A2A",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.950": {
    "value": "#5C1F1F",
    "variable": "var(--colors-red-950)"
  },
  "colors.green.100": {
    "value": "#F0FFF4",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#C6F6D5",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#9AE6B4",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#68D391",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#48BB78",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#38A169",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#2F855A",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#276749",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#22543D",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.950": {
    "value": "#1C4532",
    "variable": "var(--colors-green-950)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar