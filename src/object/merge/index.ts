import '../../array/unique';

const isObject = (obj: any) => obj && typeof obj === 'object';

export const arrayMerge = (
  target: any[],
  source: any[],
  push: boolean,
  memoizer: any[],
) => {
  if (push) return [...target, ...source];
  else return deepMergeInner(target, source, push, memoizer);
};

export const deepMergeInner = (
  target: any,
  source: any,
  push = false,
  memoizer: any[] = [],
) => {
  Object.keys(source).forEach((key: string) => {
    const k = Array.isArray(source) ? parseInt(key) : key;

    const targetValue = target[k];
    const sourceValue = source[k];

    if (!memoizer.includes(targetValue)) {
      if (typeof targetValue == 'object') memoizer.push(targetValue);

      if (Array.isArray(sourceValue)) {
        target[k] = arrayMerge(targetValue, sourceValue, push, memoizer);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[k] = deepMergeInner(
          Object.assign({}, targetValue),
          sourceValue,
          push,
          memoizer,
        );
      } else {
        target[k] = sourceValue;
      }
    }
  });

  return target;
};

export const mergeInit = <T>(objects: T[]) => {
  if (objects.length < 2) return objects[0];

  const containsArray = objects.some((object) => Array.isArray(object));
  if (
    objects.some((object) => !isObject(object)) ||
    (containsArray && objects.some((object) => !Array.isArray(object)))
  )
    throw new Error('Cannot merge 2 values of different types');
  if (containsArray) return [];
  return {};
};

Object.merge = (...objects) => {
  const target = mergeInit(objects);

  let source: any;
  while ((source = objects.shift())) deepMergeInner(target, source);
  return target as any;
};

export {};
