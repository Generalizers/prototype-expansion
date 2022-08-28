import { Rectangle } from '..';

test('h get', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.h).toEqual(5);
});

test('h set', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  rect.h = 2;
  expect(rect).toStrictEqual(Rectangle.from([1, 5], [5, 7]));
});
