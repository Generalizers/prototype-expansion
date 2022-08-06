import './index';

test('px', () => {
  expect((5).px).toBe('5px');
});

test('px subtract', () => {
  expect((6 - 1).px).toBe('5px');
});

test('px variable', () => {
  const x = 5;
  expect(x.px).toBe('5px');
});
