const path = require('path');

const config = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  rootDir: __dirname,
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js',
    '<rootDir>/src/**/?(*.)+(test).js'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/index.js',
    '<rootDir>/src/**/?(*.)+(test).js'
  ],
  coverageDirectory: path.resolve(__dirname, 'coverage'),
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': `${path.resolve(
      __dirname,
      'mock'
    )}/fileMock.js`,
    '\\.(css|less)$': `${path.resolve(__dirname, 'mock')}/styleMock.js`,
    '^utils(.*)$': '<rootDir>/src/utils$1'
  }
};
module.exports = config;
