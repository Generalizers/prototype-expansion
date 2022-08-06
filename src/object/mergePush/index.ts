import { deepMergeInner, mergeInit } from '../merge';

if (!Object.mergePush) {
  Object.mergePush = (...objects) => {
    const target = mergeInit(objects);

    let source: any;
    while ((source = objects.shift())) deepMergeInner(target, source, true);
    return target as any;
  };
}
