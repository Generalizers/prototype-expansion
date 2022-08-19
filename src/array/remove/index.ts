if (!Array.prototype.remove) {
  Array.prototype.remove = function (element) {
    this.splice(this.indexOf(element), 1);
    return true;
  };
}

export {};
