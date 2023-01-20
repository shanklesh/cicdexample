module.exports = {
  testEnvironment: "node",
  transform: {},
  rootDir: "./",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
  testTimeout: 30000,
  clearMocks: true,
  modulePathIgnorePatterns: ["main.ts", "axios-helper", "helloWorldController"],
};
