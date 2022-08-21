import { NumberArray } from '..';

test('sum', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.sum(5)).toStrictEqual(NumberArray.from([6, 10]));
});
