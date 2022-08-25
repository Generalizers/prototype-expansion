export class NumberArray extends Array<number> {
  constructor(...items: number[]) {
    super(...items);
  }

  static from(arrayLike: number[]) {
    return new NumberArray(...arrayLike);
  }

  static dot(N: number[], M: number[]) {
    if (N.length != M.length)
      throw new Error(
        `NumberArray lengths are not the same N=${N.length}, M=${M.length}`,
      );
    return N.map((n, i) => n * M[i]).reduce((p, c) => p + c, 0);
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

  dot(M: number[]) {
    return NumberArray.dot(this, M);
  }
}
