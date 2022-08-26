import { NumberArray } from '..';

test('min', () => {
  const arr = NumberArray.from([1, 5, 10]);
  expect(arr.min).toStrictEqual(1);
});
