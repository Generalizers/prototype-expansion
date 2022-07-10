declare global {
  interface String {
    capitalize(all?: boolean): string;
    count(s: string): number;
  }
}

export * from './capitalize';
export * from './count';
