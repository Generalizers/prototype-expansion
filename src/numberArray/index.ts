export class NumberArray extends Array<number> {
  constructor(...items: number[]) {
    super(...items);
  }

  static from(arrayLike: number[]) {
    return new NumberArray(...arrayLike);
  }

  sum(n: number | number[]) {
    if (Array.isArray(n)) this.forEach((v, k) => (this[k] += n[k]));
    else this.forEach((v, k) => (this[k] += n));
    return this;
  }

  minus(n: number | number[]) {
    if (Array.isArray(n)) return this.sum(n.map((n) => -n));
    return this.sum(-n);
  }

  mult(n: number | number[]) {
    if (Array.isArray(n)) this.forEach((v, k) => (this[k] *= n[k]));
    else this.forEach((v, k) => (this[k] *= n));
    return this;
  }
}
