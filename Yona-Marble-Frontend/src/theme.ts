import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Dark theme to align with a black navbar
    primary: {
      main: "#3f51b5", // A rich blue tone for primary actions
      contrastText: "#000000", // White text for contrast
      light: "#f7f7f7", //
    },
    secondary: {
      main: "#d4af37", // A gold accent to reflect premium quality
      contrastText: "#000000",
    },
    background: {
      default: "#101010", // Dark background for the main page
      paper: "#1c1c1c", // Slightly lighter for cards, dialogs, etc.
    },
    text: {
      primary: "#e0e0e0", // Light text for readability
      secondary: "#a0a0a0", // Softer for subtitles or secondary text
    },
    error: {
      main: "#e53935", // Red for error states
    },
    success: {
      main: "#43a047", // Green for success states
    },
    warning: {
      main: "#ffb74d", // Orange for warnings
    },
    info: {
      main: "#29b6f6", // Light blue for informational highlights
    },
  },
  typography: {
    fontFamily: "'Heebo', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      color: "#ffffff", // White for primary headings
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      color: "#e0e0e0", // Light grey for secondary headings
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: "#e0e0e0",
    },
    body1: {
      fontSize: "1.1rem",
      color: "#181A20", // Softer grey for body text
    },
    body2: {
      fontSize: "0.875rem",
      color: "#a0a0a0", // Even softer for less important text
    },
    button: {
      textTransform: "uppercase", // Buttons in uppercase for emphasis
      fontWeight: 600,
    },
  },
});

export default theme;
