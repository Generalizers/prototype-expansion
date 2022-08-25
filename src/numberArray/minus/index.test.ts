import { NumberArray } from '..';

test('minus', () => {
  const arr = NumberArray.from([1, 5]);
  expect(arr.minus(10)).toStrictEqual(NumberArray.from([-9, -5]));
});

test('minus multiple', () => {
  const arr = NumberArray.from([10, 20]);
  const arr2 = [50, 100];
  expect(arr.minus(arr2)).toStrictEqual(NumberArray.from([-40, -80]));
});
