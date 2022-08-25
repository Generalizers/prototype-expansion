export class NumberArray extends Array<number> {
  constructor(...items: number[]) {
    super(...items);
  }

  static from(arrayLike: number[]) {
    return new NumberArray(...arrayLike);
  }

  static sum(n: number[], m: number | number[]) {
    if (Array.isArray(m)) n.forEach((v, k) => (n[k] += m[k]));
    else n.forEach((v, k) => (n[k] += m));
    return n;
  }

  static minus(n: number[], m: number | number[]) {
    if (Array.isArray(m))
      NumberArray.sum(
        n,
        m.map((m) => -m),
      );
    else NumberArray.sum(n, -m);
    return n;
  }

  static mult(n: number[], m: number | number[]) {
    if (Array.isArray(m)) n.forEach((_, k) => (n[k] *= m[k]));
    else n.forEach((v, k) => (n[k] *= m));
    return n;
  }

  static dot(N: number[], M: number[]) {
    if (N.length != M.length)
      throw new Error(
        `NumberArray lengths are not the same N=${N.length}, M=${M.length}`,
      );
    return N.map((n, i) => n * M[i]).reduce((p, c) => p + c, 0);
  }

  sum(n: number | number[]) {
    NumberArray.sum(this, n);
    return this;
  }

  minus(n: number | number[]) {
    NumberArray.minus(this, n);
    return this;
  }

  mult(n: number | number[]) {
    NumberArray.mult(this, n);
    return this;
  }

  dot(M: number[]) {
    return NumberArray.dot(this, M);
  }
}
