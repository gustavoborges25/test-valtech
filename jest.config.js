module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/tests/unit/$1',
    'Support(.*)$': '<rootDir>/src/support/$1',
    'Domain(.*)$': '<rootDir>/src/domain/$1',
    'App(.*)$': '<rootDir>/src/app/$1',
    'Assets(.*)$': '<rootDir>/src/assets/$1',
    'Locales(.*)$': '<rootDir>/src/locales/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  collectCoverage: true,
  coverageReporters: [
    'text',
    'text-summary',
    'lcov',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/*/**.{js,jsx,vue}',
    '!**/node_modules/**',
    '!<rootDir>/src/main.js',
    '!<rootDir>/src/support/plugins/**.js',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testURL: 'http://localhost/',
  // testResultsProcessor: 'jest-sonar-reporter',
};
