import '../number';
import { Vector2 } from '../vector2';

type Vector2OrNumberArr = Vector2 | [number, number];

export class Rectangle {
  readonly v1: Vector2;
  readonly v2: Vector2;

  constructor(items: [[number, number], [number, number]]) {
    this.v1 = Vector2.from(items[0]);
    this.v2 = Vector2.from(items[1]);
  }

  static from(v1?: Vector2, v2?: Vector2): Rectangle;
  static from(n?: [number, number], m?: [number, number]): Rectangle;
  static from(n?: Vector2OrNumberArr, m?: Vector2OrNumberArr) {
    return new Rectangle([
      n as unknown as [number, number],
      m as unknown as [number, number],
    ]);
  }

  static contains(r1: Rectangle, r2: Rectangle) {
    const [r1x, r1y] = Vector2.seperate([r1.v1, r1.v2]);
    const [r2x, r2y] = Vector2.seperate([r2.v1, r2.v2]);
    return r1x.isBounded(r2x) && r1y.isBounded(r2y);
  }

  get w() {
    return Math.abs(this.v2.x - this.v1.x);
  }

  get h() {
    return Math.abs(this.v2.y - this.v1.y);
  }

  get hypotenuse() {
    return this.v1.distance(this.v2);
  }

  get area() {
    return this.w * this.h;
  }

  get perimeter() {
    return this.w * 2 + this.h * 2;
  }

  get asPosition() {
    return [
      Math.min(this.v1.x, this.v2.x),
      Math.min(this.v1.y, this.v2.y),
      this.w,
      this.h,
    ];
  }

  get asPositionString() {
    const pos = this.asPosition;
    return ['left', 'top', 'width', 'height']
      .map((p, i) => `${p}:${pos[i].px}`)
      .join(';');
  }

  contains(r: Rectangle) {
    return Rectangle.contains(this, r);
  }
}
