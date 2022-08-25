import { NumberArray } from '..';

test('dot', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.dot([2, 10])).toEqual(52);
});
