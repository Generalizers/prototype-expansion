import './index';

test('count', () => {
  expect('hello I really love the way you roll over my load'.count('lo')).toBe(
    3,
  );
});
