module.exports = {
  setupFiles: ["./someModuleForTest"],
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  // additional prop from a github issue: https://github.com/zeit/next.js/issues/8663
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  // default testRegex
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  // only test with folder in __tests__
  testRegex: "/__tests__/(.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules", "src/theme"],
  coverageReporters: ["json", "lcov", "text"],
  globals: {
    window: {},
  },
};
