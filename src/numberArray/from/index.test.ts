import { NumberArray } from '..';

test('from', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr).toStrictEqual(NumberArray.from([1, 5]));
});
