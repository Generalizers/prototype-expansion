import { NumberArray } from '..';

test('isBounded', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.min).toStrictEqual(1);
});
