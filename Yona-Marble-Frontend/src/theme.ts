import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    accessibility: {
      fontSizes: {
        default: number;
        small: number;
        large: number;
      };
      filters: {
        grayscale: string;
        highContrast: string;
      };
      backgrounds: {
        highContrast: string;
      };
    };
  }
  interface ThemeOptions {
    accessibility?: {
      fontSizes?: {
        default?: number;
        small?: number;
        large?: number;
      };
      filters?: {
        grayscale?: string;
        highContrast?: string;
      };
      backgrounds?: {
        highContrast?: string;
      };
    };
  }
}

const theme = createTheme({
  accessibility: {
    fontSizes: {
      default: 16,
      small: 12,
      large: 20,
    },
    filters: {
      grayscale: "grayscale(1)",
      highContrast: "invert(1)",
    },
    backgrounds: {
      highContrast: "#000",
    },
  },
});

export default theme;
