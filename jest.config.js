// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Stop running tests after `n` failures
  // bail: 0,
  globals: {
    __PATH_PREFIX__: ``,
  },

  moduleDirectories: ['node_modules'],

  moduleFileExtensions: ['js'],

  moduleNameMapper: {
    '\\.scss$': '<rootDir>/__mocks__/styleMock.js',
  },

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  rootDir: '.',

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testURL: `http://localhost`,

  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // testURL: "http://localhost",

  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],

  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.js', '!**/node_modules/**'],

  verbose: true,
}
