import { Rectangle } from '..';

test('wh get', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.wh).toStrictEqual([4, 5]);
});

test('wh set', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  rect.wh = [10, 11];
  expect(rect).toStrictEqual(Rectangle.from([1, 5], [11, 16]));
});
