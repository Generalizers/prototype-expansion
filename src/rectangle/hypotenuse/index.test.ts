import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('hypotenuse', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.hypotenuse).toEqual(
    Vector2.from([1, 5]).distance(Vector2.from([5, 10])),
  );
});
