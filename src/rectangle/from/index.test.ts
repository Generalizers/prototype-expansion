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

test('from default', () => {
  const rect = Rectangle.from();
  expect(rect).toStrictEqual(
    new Rectangle([
      [0, 0],
      [0, 0],
    ]),
  );
});

test('from default', () => {
  const rect = Rectangle.from();
  expect(Rectangle.from(rect)).toStrictEqual(rect);
});
