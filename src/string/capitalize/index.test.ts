import './index';

test('capitalize first word', () => {
  expect('i am good'.capitalize()).toBe('I am good');
});

test('capitalize all words of sentence', () => {
  expect('i am good'.capitalize(true)).toBe('I Am Good');
});

test('capitalize with split', () => {
  expect(
    'capitalize with split'
      .split(' ')
      .map((d, i) => (i != 0 ? d.capitalize() : d))
      .join(''),
  ).toBe('capitalizeWithSplit');
});

test('empty string', () => {
  expect(''.capitalize()).toBe('');
});

test('special char', () => {
  expect('\\'.capitalize()).toBe('\\');
});

test('already capitalized', () => {
  expect('Already'.capitalize()).toBe('Already');
});

test('Multi spaced capitalize first', () => {
  expect('i have  a  lot      of     spaces'.capitalize()).toBe(
    'I have  a  lot      of     spaces',
  );
});

test('Multi spaced capitalize all', () => {
  expect('i have  a  lot      of     spaces'.capitalize(true)).toBe(
    'I Have  A  Lot      Of     Spaces',
  );
});
