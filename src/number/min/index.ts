Number.min = (nums) => {
  let m = nums[0];
  nums.forEach((n) => {
    if (n < m) m = n;
  });
  return m;
};

export {};
