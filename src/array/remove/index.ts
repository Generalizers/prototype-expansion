if (!Array.prototype.remove) {
  Array.prototype.remove = function (element) {
    const i = this.indexOf(element);
    return i > -1 ? (this.splice(this.indexOf(element), 1), true) : false;
  };
}

export {};
