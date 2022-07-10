String.prototype.capitalize = function () {
  return this.split(' ')
    .map(
      (v) => v.substring(0, 1).toLocaleUpperCase() + v.substring(1, v.length),
    )
    .reduce((p, c) => `${p} ${c}`, '');
};
