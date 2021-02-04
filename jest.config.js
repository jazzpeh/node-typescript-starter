module.exports = {
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json'
    }
  },
  testMatch: [
    '**/**.test.+(ts|tsx|js)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!node-formatter)'
  ],
  moduleNameMapper: {
    'node-formatter': '<rootDir>/node_modules/node-formatter'
  }
};