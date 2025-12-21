// Color Palette Configuration
export const colors = {
  // Primary Colors
  primary: {
    blue: "#a2cbe1",
    pink: "#eea09e",
    white: "#ffffff",
  },

  // Blue variations
  blue: {
    50: "#f0f6fb",
    100: "#e1edf6",
    200: "#c8ddef",
    300: "#a2cbe1", // Main blue
    400: "#7bb5d6",
    500: "#5a9fcb",
    600: "#4886b8",
    700: "#3c6d96",
    800: "#345a7a",
    900: "#2f4d65",
  },

  // Pink variations
  pink: {
    50: "#fdf7f6",
    100: "#fbefed",
    200: "#f7ddd9",
    300: "#f2c5bd",
    400: "#eea09e", // Main pink
    500: "#e67b7a",
    600: "#da5b5b",
    700: "#c44343",
    800: "#a33a3a",
    900: "#873535",
  },

  // Neutral colors (based on the palette)
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

// Tailwind CSS class templates
export const colorClasses = {
  // Background classes
  bg: {
    primary: {
      blue: "bg-[#a2cbe1]",
      pink: "bg-[#eea09e]",
      white: "bg-[#ffffff]",
    },
    blue: {
      50: "bg-[#f0f6fb]",
      100: "bg-[#e1edf6]",
      200: "bg-[#c8ddef]",
      300: "bg-[#a2cbe1]",
      400: "bg-[#7bb5d6]",
      500: "bg-[#5a9fcb]",
    },
    pink: {
      50: "bg-[#fdf7f6]",
      100: "bg-[#fbefed]",
      200: "bg-[#f7ddd9]",
      300: "bg-[#f2c5bd]",
      400: "bg-[#eea09e]",
      500: "bg-[#e67b7a]",
    },
  },

  // Text classes
  text: {
    primary: {
      blue: "text-[#a2cbe1]",
      pink: "text-[#eea09e]",
      white: "text-[#ffffff]",
    },
    blue: {
      300: "text-[#a2cbe1]",
      400: "text-[#7bb5d6]",
      500: "text-[#5a9fcb]",
      600: "text-[#4886b8]",
      700: "text-[#3c6d96]",
    },
    pink: {
      300: "text-[#f2c5bd]",
      400: "text-[#eea09e]",
      500: "text-[#e67b7a]",
      600: "text-[#da5b5b]",
      700: "text-[#c44343]",
    },
  },

  // Border classes
  border: {
    blue: {
      200: "border-[#c8ddef]",
      300: "border-[#a2cbe1]",
      400: "border-[#7bb5d6]",
    },
    pink: {
      200: "border-[#f7ddd9]",
      300: "border-[#f2c5bd]",
      400: "border-[#eea09e]",
    },
  },

  // Gradient classes
  gradient: {
    blueToPink: "bg-gradient-to-r from-[#a2cbe1] to-[#eea09e]",
    pinkToBlue: "bg-gradient-to-r from-[#eea09e] to-[#a2cbe1]",
    blueLight: "bg-gradient-to-br from-[#f0f6fb] to-[#e1edf6]",
    pinkLight: "bg-gradient-to-br from-[#fdf7f6] to-[#fbefed]",
    mixed: "bg-gradient-to-br from-[#fdf7f6] via-[#ffffff] to-[#f0f6fb]",
  },
};

export default { colors, colorClasses };
