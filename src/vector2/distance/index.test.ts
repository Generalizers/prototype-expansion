import { Vector2 } from '..';

test('distance', () => {
  const arr = Vector2.from([2, 3]);
  expect(arr.distance(Vector2.from([3, 4]))).toEqual(Math.sqrt(2));
});
