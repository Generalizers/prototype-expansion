String.prototype.capitalize = function (all = false) {
  if (all)
    return this.split(' ')
      .map(
        (v) => v.substring(0, 1).toLocaleUpperCase() + v.substring(1, v.length),
      )
      .reduce((p, c) => (p == '' ? c : `${p} ${c}`), '');
  const [f, ...r] = this.split(' ');
  return (
    f.substring(0, 1).toLocaleUpperCase() +
    f.substring(1, f.length) +
    r.reduce((p, c) => `${p} ${c}`, '')
  );
};

export {};
