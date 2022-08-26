import { Vector2 } from '..';

test('from default', () => {
  const v1 = Vector2.from();
  expect(v1).toEqual(Vector2.from([0, 0]));
});
