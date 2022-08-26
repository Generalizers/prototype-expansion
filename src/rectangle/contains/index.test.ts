import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('contains', () => {
  const r1 = Rectangle.from([1, 5], [5, 10]);
  const r2 = Rectangle.from([2, 6], [4, 9]);
  expect(r1.contains(r2)).toEqual(true);
});

test("doesn't contain", () => {
  const r1 = Rectangle.from([1, 5], [5, 10]);
  const r2 = Rectangle.from([2, 4], [4, 9]);
  expect(r1.contains(r2)).toEqual(false);
});
