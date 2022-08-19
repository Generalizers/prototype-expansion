import './index';

test('removeAll', () => {
  const arr = [1, 10, 21, 50];
  arr.removeAll([10, 21]);
  expect(arr).toStrictEqual([1, 50]);
});
