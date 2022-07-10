import './index';

test('exclude', () => {
  expect(Object.exclude({ a: 5, b: 10 }, 'a')).toStrictEqual({ b: 10 });
});
