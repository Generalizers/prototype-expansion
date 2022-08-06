if (!Number.prototype.px) {
  Object.defineProperty(Number.prototype, 'px', {
    get: function () {
      return `${this}px`;
    },
  });
}

export {};
