import '../number';
import { NumberArray } from '../numberArray';
import { Vector2 } from '../vector2';

type Vector2OrNumberArr = Vector2 | [number, number];

export class Rectangle {
  private readonly _v1: Vector2;
  private readonly _v2: Vector2;
  private lockedProportions: boolean = false;

  constructor(items: [[number, number], [number, number]], locked = false) {
    this._v1 = Vector2.from(items[0]);
    this._v2 = Vector2.from(items[1] ?? [0, 0]);
    this.lockProportions(locked);
  }

  static from(v?: Vector2, locked?: boolean): Rectangle;
  static from(v1?: Vector2, v2?: Vector2, locked?: boolean): Rectangle;
  static from(
    n?: [number, number],
    m?: [number, number],
    locked?: boolean,
  ): Rectangle;
  static from(
    n?: Vector2OrNumberArr,
    m?: Vector2OrNumberArr | boolean,
    locked = false,
  ) {
    if (typeof m == 'boolean')
      return new Rectangle(
        [n as unknown as [number, number], n as unknown as [number, number]],
        m,
      );
    return new Rectangle(
      [n as unknown as [number, number], m as unknown as [number, number]],
      locked,
    );
  }

  static contains(r1: Rectangle, r2: Rectangle) {
    const [r1x, r1y] = Vector2.seperate([r1._v1, r1._v2]);
    const [r2x, r2y] = Vector2.seperate([r2._v1, r2._v2]);
    return r1x.isBounded(r2x) && r1y.isBounded(r2y);
  }

  get w() {
    return Math.abs(this._v2.x - this._v1.x);
  }

  get h() {
    return Math.abs(this._v2.y - this._v1.y);
  }

  get hypotenuse() {
    return this._v1.distance(this._v2);
  }

  get area() {
    return this.w * this.h;
  }

  get perimeter() {
    return this.w * 2 + this.h * 2;
  }

  get asPosition() {
    return [
      Math.min(this._v1.x, this._v2.x),
      Math.min(this._v1.y, this._v2.y),
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
        this._v1.set([n[0], n[1]]);
        this._v2.set([n[2], n[3]]);
      } else if (n.length == 2) {
        this._v1.set([n[0], n[1]]);
        this._v2.set([n[0], n[1]]);
      }
    } else {
      this._v1.set([n, n]);
      this._v2.set([n, n]);
    }
    return this;
  }

  set v1(n: [number, number]) {
    if (this.lockedProportions)
      this._v2.set(NumberArray.sum([this.w, this.h], n) as [number, number]);
    this._v1.set(n);
  }

  get v1() {
    return this._v1 as unknown as [number, number];
  }

  set v2(n: [number, number]) {
    if (this.lockedProportions)
      this._v2.set(NumberArray.sum([...this._v1], n) as [number, number]);
    else this._v2.set(n);
  }

  get v2() {
    return this._v2 as unknown as [number, number];
  }

  get x1() {
    return this._v1.x;
  }

  get x2() {
    return this.x1 + this.w;
  }

  get y1() {
    return this._v1.y;
  }

  get y2() {
    return this.y1 + this.h;
  }

  lockProportions(locked = true) {
    this.lockedProportions = locked;
  }

  sum(n: [number, number, number, number] | [number, number] | number) {
    if (Array.isArray(n)) {
      if (n.length == 4) {
        this.set([
          this.x1 + n[0],
          this.y1 + n[1],
          this.x2 + n[2],
          this.y2 + n[3],
        ]);
      } else if (n.length == 2) {
        this.set([this.x1 + n[0], this.y1 + n[1], this.x2, this.y2]);
      }
    } else this.set([this.x1 + n, this.y1 + n, this.x2 + n, this.y2 + n]);
    return this;
  }

  minus(n: [number, number, number, number] | [number, number] | number) {
    if (Array.isArray(n)) return this.sum(n.map((n) => -n) as any);
    else return this.sum(-n);
  }
}
