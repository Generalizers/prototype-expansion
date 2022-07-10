String.prototype.count = function (s: string) {
  return (this.match(new RegExp(`${s}`, 'g')) || []).length;
};

export {};
