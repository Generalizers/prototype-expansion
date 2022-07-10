Object.exclude = (object, key) => {
  delete (object as any)[key];
  return object;
};

export {};
