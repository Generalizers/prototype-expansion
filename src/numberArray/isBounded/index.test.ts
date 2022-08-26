import { NumberArray } from '..';

test('is bounded', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.isBounded(3)).toEqual(true);
});

test('is not bounded', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.isBounded(0)).toEqual(false);
});

test('is bounded array', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.isBounded([2, 3])).toEqual(true);
});

test('is not bounded array', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.isBounded([2, 0])).toEqual(false);
});
