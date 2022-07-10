import './index';

test('merge array with deep object with array inside equals', () => {
  expect(
    Object.mergePush(
      [{ a: 5, b: [{ c: 10 }] }],
      [{ a: { b: 0 }, b: [{ c: 5 }] }],
    ),
  ).toStrictEqual([{ a: { b: 0 }, b: [{ c: 10 }, { c: 5 }] }]);
});
