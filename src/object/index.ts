declare global {
  interface ObjectConstructor {
    merge: <T = object, R extends T = T>(...objects: T[]) => R;
    mergePush: <T = object, R extends T = T>(...objects: T[]) => R;
    exclude: <T>(o: T, key: keyof T) => Omit<T, keyof T>;
  }
}

export * from './exclude';
export * from './merge';
export * from './mergePush';
