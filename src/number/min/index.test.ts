import './index';

test('min', () => {
  expect(Number.min([5, 1, 0, 10, 13, 11])).toBe(0);
});
