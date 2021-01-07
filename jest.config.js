module.exports = {
  setupFiles: ['./tests/setEnvironment.js'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
    '^@bettingAPI/(.*)$': '<rootDir>/src/bettingAPI/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@tests/(.*)$': '<rootDir>/tests/$1',
  },
};
