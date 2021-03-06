const expect = require('expect');
const truncateString = require('./truncateString.js');

test('truncateString is a Function', () => {
  expect(truncateString).toBeInstanceOf(Function);
});
test('Truncates a "boomerang" up to a specified length.', () => {
  expect(truncateString('boomerang', 7)).toBe('boom...');
});
