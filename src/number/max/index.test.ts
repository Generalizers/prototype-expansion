import './index';

test('max', () => {
  expect(Number.max([5, 1, 0, 10, 13, 11])).toBe(13);
});
