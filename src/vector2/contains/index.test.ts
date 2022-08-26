import { Vector2 } from '..';

test('contains positive', () => {
  const v1 = Vector2.from([2, 3]);
  const v2 = Vector2.from([4, 10]);
  expect(Vector2.contains([v1, v2], Vector2.from([3, 9]))).toEqual(true);
});

test('contains negative', () => {
  const v1 = Vector2.from([2, 3]);
  const v2 = Vector2.from([4, 10]);
  expect(Vector2.contains([v2, v1], Vector2.from([3, 9]))).toEqual(true);
});

test("doesn't contain", () => {
  const v1 = Vector2.from([2, 3]);
  const v2 = Vector2.from([4, 10]);
  expect(Vector2.contains([v1, v2], Vector2.from([1, 20]))).toEqual(false);
});
