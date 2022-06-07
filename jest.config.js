const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: __dirname
})

module.exports = createJestConfig({
    testEnvironment: 'jsdom'
})