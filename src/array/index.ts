declare global {
  interface ArrayConstructor {
    merge: <T = object, R extends T = T>(...objects: T[]) => R;
  }

  interface Array<T> {
    unique: () => Array<T>;
  }
}

export * from './unique';
