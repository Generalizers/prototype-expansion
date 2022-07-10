declare global {
  interface NumberConstructor {
    max: (nums: number[]) => number;
    min: (nums: number[]) => number;
    avg: (nums: number[]) => number;
  }
}

export * from './avg';
export * from './min';
export * from './max';
