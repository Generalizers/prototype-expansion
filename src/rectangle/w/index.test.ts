import { Rectangle } from '..';

test('w', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.w).toEqual(4);
});
