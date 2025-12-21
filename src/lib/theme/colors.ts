export const primary = {
  50: "#E5F2E9", // Tint-1 (lightest)
  100: "#CAE4D3", // Tint-2
  200: "#B0D7BD", // Tint-3
  300: "#96C9A7", // Tint-4
  400: "#7CBC91", // Tint-5
  500: "#417F56", // Primary (base)
  600: "#396F4B", // Shade-1
  700: "#315F41", // Shade-2
  800: "#294F36", // Shade-3
  900: "#21402B", // Shade-4
  950: "#183020", // Shade-5 (darkest)
  // Optional: Add if needed
  // 960: '#102016',  // Shade-6
  // 970: '#08100B',  // Shade-7
} as const;

export const gray = {
  50: "#FFFFFF", // White (lightest)
  100: "#F9F9F9", // Gray-1
  200: "#EDEDED", // Gray-3
  300: "#E1E1E1", // Gray-2
  400: "#CBCBCB", // Gray-4
  500: "#ADADAD", // Gray-5
  600: "#757575", // Gray-6
  700: "#717171", // Gray-7
  800: "#353535", // Gray-8
  900: "#0C0C0C", // Black (darkest)
} as const;

export const error = {
  50: "#FFF2F2", // extraLight
  300: "#ED2E2E", // light
  500: "#C30000", // main (base)
} as const;

export const success = {
  50: "#F3FDFA", // extraLight
  300: "#00BA88", // light
  500: "#00966D", // main (base)
} as const;

export const warning = {
  50: "#FFF8E1", // extraLight
  300: "#F4B740", // light
  500: "#A9791C", // main (base)
} as const;

// For convenience (optional: remove if not used)
export const statusColors = { error, success, warning };

export type PrimaryShade = keyof typeof primary;
export type GrayShade = keyof typeof gray;
export type ErrorShade = keyof typeof error;
export type SuccessShade = keyof typeof success;
export type WarningShade = keyof typeof warning;
