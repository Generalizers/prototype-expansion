import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('lockProportions', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  rect.lockProportions();
  expect(rect.setV1([2, 6])).toStrictEqual(
    Rectangle.from([2, 6], [6, 11], true),
  );
});
