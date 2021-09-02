module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    ".*\\.(vue)$": "vue-jest",
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest"
  },
  testPathIgnorePatterns: ["/cypress/"]
}
