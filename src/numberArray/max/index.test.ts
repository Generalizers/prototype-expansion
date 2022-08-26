import { NumberArray } from '..';

test('max', () => {
  const arr = NumberArray.from([1, 5, 10]);
  expect(arr.max).toStrictEqual(10);
});
