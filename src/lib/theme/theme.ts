"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import { primary, gray, error, success, warning } from "./colors";

const theme: ThemeOptions = createTheme({
  direction: "rtl", // Enables RTL globally
  typography: {
    fontFamily: "var(--font-custom)", // Use the CSS variable from global.css
  },
  palette: {
    primary: {
      ...primary, // Full scale available as primary[50], etc.
      main: primary[500],
      light: primary[300], // Example; adjust per design (e.g., for hover)
      dark: primary[700],
      contrastText: gray[50], // White
    },
    text: {
      primary: gray[900],
      secondary: gray[600],
      disabled: gray[400],
    },
    background: {
      default: gray[50], // White
      paper: gray[100], // Light gray (Gray-1)
    },
    divider: gray[300],
    error: {
      ...error,
      main: error[500],
      light: error[300],
      // No 'dark' by default; add if needed, e.g., dark: error[700]
    },
    success: {
      ...success,
      main: success[500],
      light: success[300],
    },
    warning: {
      ...warning,
      main: warning[500],
      light: warning[300],
    },
  },
});

export default theme;
