import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('set 4', () => {
  const rect = Rectangle.from([1, 5], [5, 50]);
  rect.set([5, 10, 15, 20]);
  expect(rect).toStrictEqual(Rectangle.from([5, 10], [15, 20]));
});

test('set 2', () => {
  const rect = Rectangle.from([1, 5], [-10, 30]);
  rect.set([5, 10]);
  expect(rect).toStrictEqual(Rectangle.from([5, 10], [5, 10]));
});

test('set 1', () => {
  const rect = Rectangle.from([1, 5], [-10, 30]);
  rect.set(-10);
  expect(rect).toStrictEqual(Rectangle.from([-10, -10], [-10, -10]));
});
