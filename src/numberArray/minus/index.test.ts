import { NumberArray } from '..';

test('minus', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.minus(10)).toStrictEqual(NumberArray.from([-9, -5]));
});
