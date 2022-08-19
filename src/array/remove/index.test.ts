import './index';

test('remove', () => {
  const arr = [1, 5, 10];
  arr.remove(5);
  expect(arr).toStrictEqual([1, 10]);
});
