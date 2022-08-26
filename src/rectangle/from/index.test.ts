import { Rectangle } from '..';

test('from', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect).toStrictEqual(
    new Rectangle([
      [1, 5],
      [5, 10],
    ]),
  );
});
