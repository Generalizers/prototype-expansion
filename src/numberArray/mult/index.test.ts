import { NumberArray } from '..';

test('mult', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.mult(2)).toStrictEqual(NumberArray.from([2, 10]));
});

test('mult multiple', () => {
  const arr = NumberArray.from([10, 20]);
  const arr2 = [50, 100];
  expect(arr.sum(arr2)).toStrictEqual(NumberArray.from([60, 120]));
});
