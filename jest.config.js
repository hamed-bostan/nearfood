const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    // Absolute imports
    "^@/(.*)$": "<rootDir>/src/$1",

    // Swiper (ESM + CSS)
    "^swiper/react$": "<rootDir>/__mocks__/swiper/react.tsx",
    "^swiper/modules$": "<rootDir>/__mocks__/swiper/modules.ts",
    "^swiper/css$": "identity-obj-proxy",
    "^swiper/css/.*$": "identity-obj-proxy",

    // Styles
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Static assets
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
    "\\.cy\\.(ts|tsx|js|jsx)$",
  ],
};

module.exports = createJestConfig(customJestConfig);
