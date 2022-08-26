import { Rectangle } from '..';
import { Vector2 } from '../../vector2';

test('as position positive', () => {
  const rect = Rectangle.from([1, 5], [5, 10]);
  expect(rect.asPositionString).toStrictEqual(
    'left:1px;top:5px;width:4px;height:5px',
  );
});

test('as position negative', () => {
  const rect = Rectangle.from([300, 200], [100, 100]);
  expect(rect.asPositionString).toStrictEqual(
    'left:100px;top:100px;width:200px;height:100px',
  );
});
