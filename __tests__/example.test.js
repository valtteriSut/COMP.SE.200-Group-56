// __tests__/example.test.js
const { add } = require('../src/math');

test("adds numbers", () => {
  expect(add(2, 2)).toBe(4);
});
