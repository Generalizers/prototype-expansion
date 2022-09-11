declare global {
  interface Array<T> {
    unique: () => Array<T>;
    removeAll: (arr: T[]) => T[];
    remove: (element: T) => boolean;
  }
}

export * from './unique';
export * from './remove';
export * from './removeAll';
