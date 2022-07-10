Object.exclude = <T = any>(object: T, key: string) => {
  delete (object as any)[key];
  return object;
};

export {};
