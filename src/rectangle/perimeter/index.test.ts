import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('perimeter', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.perimeter).toEqual(18);
});
