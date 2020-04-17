/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return nums[1] > nums[0] ? nums[1] : nums[0];
  }

  let ans = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    const t1 = ans[(i + 2) % 2] + nums[i];
    const t2 = ans[(i + 1) % 2];
    ans[i % 2] = Math.max(t1, t2);
  }

  return Math.max(ans[0], ans[1]);
};
