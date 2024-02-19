// jest.config.mjs
export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  testEnvironment: "jsdom",
};
