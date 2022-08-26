import { NumberArray } from '../numberArray';

export class Vector2 extends NumberArray {
  constructor(...items: [number, number]) {
    super(...items);
  }

  static from(arrayLike: [number, number]) {
    return new Vector2(...arrayLike);
  }

  static distance(v1: Vector2, v2: Vector2) {
    return Math.sqrt((v2.x - v1.x) ** 2 + (v2.y - v1.y) ** 2);
  }

  static contains(box: [Vector2, Vector2], v: Vector2) {
    const [v1, v2] = box;
    return (
      Vector2.from([v1.x, v2.x]).isBounded(v.x) &&
      Vector2.from([v1.y, v2.y]).isBounded(v.y)
    );
  }

  static seperate(v: Vector2[]) {
    return [
      NumberArray.from(v.map((v) => v.x)),
      NumberArray.from(v.map((v) => v.y)),
    ];
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  distance(v: Vector2) {
    return Vector2.distance(this, v);
  }
}
