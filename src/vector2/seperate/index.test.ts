import { Vector2 } from '..';
import { NumberArray } from '../../numberArray';

test('seperate', () => {
  const [nx, ny] = Vector2.seperate([
    Vector2.from([2, 3]),
    Vector2.from([3, 4]),
    Vector2.from([-5, 9]),
  ]);
  expect(nx).toStrictEqual(NumberArray.from([2, 3, -5]));
  expect(ny).toStrictEqual(NumberArray.from([3, 4, 9]));
});
