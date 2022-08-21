import { NumberArray } from '..';

test('mult', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.mult(2)).toStrictEqual(NumberArray.from([2, 10]));
});
