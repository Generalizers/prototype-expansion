import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('as position positive', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.asPosition).toStrictEqual([1, 5, 4, 5]);
});

test('as position negative', () => {
  const rect = Rectangle.from([300, 200], [100, 100]);
  expect(rect.asPosition).toStrictEqual([100, 100, 200, 100]);
});
