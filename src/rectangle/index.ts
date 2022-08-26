import '../number';
import { NumberArray } from '../numberArray';
import { Vector2 } from '../vector2';

type Vector2OrNumberArr = Vector2 | [number, number];

export class Rectangle {
  private readonly v1: Vector2;
  private readonly v2: Vector2;
  private lockedProportions: boolean = false;

  constructor(items: [[number, number], [number, number]], locked = false) {
    this.v1 = Vector2.from(items[0]);
    this.v2 = Vector2.from(items[1] ?? [...items[0]]);
    this.lockProportions(locked);
  }

  static from(v1?: Vector2, v2?: Vector2, locked?: boolean): Rectangle;
  static from(
    n?: [number, number],
    m?: [number, number],
    locked?: boolean,
  ): Rectangle;
  static from(n?: Vector2OrNumberArr, m?: Vector2OrNumberArr, locked = false) {
    return new Rectangle(
      [n as unknown as [number, number], m as unknown as [number, number]],
      locked,
    );
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

  set(n: [number, number, number, number] | [number, number] | number) {
    if (Array.isArray(n)) {
      if (n.length == 4) {
        this.v1.set([n[0], n[1]]);
        this.v2.set([n[2], n[3]]);
      } else if (n.length == 2) {
        this.v1.set([n[0], n[1]]);
        this.v2.set([n[0], n[1]]);
      }
    } else {
      this.v1.set([n, n]);
      this.v2.set([n, n]);
    }
    return this;
  }

  setV1(n: [number, number]) {
    if (this.lockedProportions)
      this.v2.set(NumberArray.sum([this.w, this.h], n) as [number, number]);
    this.v1.set(n);
    return this;
  }

  get getV1() {
    return this.v1;
  }

  setV2(n: [number, number]) {
    if (this.lockedProportions)
      this.v2.set(NumberArray.sum([...this.v1], n) as [number, number]);
    else this.v2.set(n);
    return this;
  }

  get getV2() {
    return this.v2;
  }

  lockProportions(locked = true) {
    this.lockedProportions = locked;
  }
}
