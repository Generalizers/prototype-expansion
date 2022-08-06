declare global {
  interface NumberConstructor {
    max: (nums: number[]) => number;
    min: (nums: number[]) => number;
    avg: (nums: number[]) => number;
    clamp: (nums: number[], n: number) => number;
  }

  interface Number {
    px: string;
  }
}

export * from './avg';
export * from './min';
export * from './max';
export * from './clamp';
