import '../max';
import '../min';

if (Number.clamp) {
  Number.clamp = (nums, n) => {
    const max = Number.max(nums);
    const min = Number.min(nums);
    return n < max ? (n > min ? n : min) : max;
  };
}

export {};
