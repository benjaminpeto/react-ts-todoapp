module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  //transform config just tells jest to use ts-jest for ts / tsx files
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
}