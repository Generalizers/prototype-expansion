import { Rectangle } from '..';

test('h', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.h).toEqual(5);
});
