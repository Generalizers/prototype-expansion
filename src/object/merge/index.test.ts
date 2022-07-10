import './index';

test('merge replace empty string', () => {
  expect(Object.merge({ a: 5, b: '' }, { b: 6 })).toStrictEqual({ a: 5, b: 6 });
});

test('merge replaces value', () => {
  expect(Object.merge({ a: 5 }, { a: 10 })).toStrictEqual({ a: 10 });
});

test('merge with 1 object', () => {
  expect(Object.merge({ a: 1 })).toStrictEqual({ a: 1 });
});

test('merge with array', () => {
  expect(Object.merge([1, 5, 10], [1, 4, 10])).toStrictEqual([1, 4, 10]);
});

test('merge array with object inside', () => {
  expect(
    Object.merge([{ a: 5 }, { a: 10 }], [{ a: 9 }, { b: 5 }]),
  ).toStrictEqual([{ a: 9 }, { a: 10, b: 5 }]);
});

test('merge array with deep object inside', () => {
  expect(
    Object.merge([{ a: 5 }], [{ a: 9 }, { b: { a: 5 }, a: 10 }]),
  ).toStrictEqual([{ a: 9 }, { b: { a: 5 }, a: 10 }]);
});

test('merge array with deep object with array inside', () => {
  expect(
    Object.merge([{ a: 5, b: [{ c: 10 }] }], [{ a: { b: 0 }, b: [{ a: 5 }] }]),
  ).toStrictEqual([{ a: { b: 0 }, b: [{ c: 10, a: 5 }] }]);
});

test('merge array with deep object with array inside equals', () => {
  expect(
    Object.merge([{ a: 5, b: [{ c: 10 }] }], [{ a: { b: 0 }, b: [{ c: 5 }] }]),
  ).toStrictEqual([{ a: { b: 0 }, b: [{ c: 5 }] }]);
});

test('merge with object and array', () => {
  const f = () => {
    Object.merge({ a: 5 }, [10]);
  };

  expect(f).toThrow();
});
