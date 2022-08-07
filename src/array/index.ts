declare global {
  interface Array<T> {
    unique: () => Array<T>;
  }
}

export * from './unique';
