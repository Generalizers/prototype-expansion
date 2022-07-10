import './index';

test('capitalize first word', () => {
  expect('i am good'.capitalize()).toBe('I am good');
});

test('capitalize all words of sentence', () => {
  expect('i am good'.capitalize(true)).toBe('I Am Good');
});
