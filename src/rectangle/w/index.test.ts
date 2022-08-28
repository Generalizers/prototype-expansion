import { Rectangle } from '..';

test('w get', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.w).toEqual(4);
});

test('w set', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  rect.w = 2;
  expect(rect).toStrictEqual(Rectangle.from([1, 5], [3, 10]));
});
