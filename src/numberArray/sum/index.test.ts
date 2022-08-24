import { NumberArray } from '..';

test('sum', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.sum(5)).toStrictEqual(NumberArray.from([6, 10]));
});

test('sum multiple', () => {
  const arr = NumberArray.from([10, 20]);
  const arr2 = [50, 100];
  expect(arr.sum(arr2)).toStrictEqual(NumberArray.from([60, 120]));
});
