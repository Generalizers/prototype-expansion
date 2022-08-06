import './index';

test('clamp 2', () => {
  expect(Number.clamp([1, 2], 3)).toBe(2);
});
