export class NumberArray extends Array<number> {
  constructor(...items: number[]) {
    super(...items);
  }

  static from(arrayLike: number[]) {
    return new NumberArray(...arrayLike);
  }

  sum(n: number) {
    this.forEach((v, k) => (this[k] += n));
    return this;
  }

  minus(n: number) {
    return this.sum(-n);
  }

  mult(n: number) {
    this.forEach((v, k) => (this[k] *= n));
    return this;
  }
}
