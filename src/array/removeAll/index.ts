import '../remove';

if (!Array.prototype.removeAll) {
  Array.prototype.removeAll = function <T>(arr: T[]) {
    const removed: T[] = [];
    arr.forEach((e) => (this.remove(e), removed.push(e)));
    return removed;
  };
}

export {};
