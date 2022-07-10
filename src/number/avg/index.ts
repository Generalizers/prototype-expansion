Number.avg = (nums) => {
  return nums.reduce((c, p) => p + c, 0) / nums.length;
};

export {};
