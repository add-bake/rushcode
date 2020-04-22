/**
 * @param {number[]} ratings
 * @return {number}
 */
let candy = (ratings) => {
  let left = ratings.reduce((ans, cell, index) => {
    if (ans.length && cell > ratings[index - 1]) {
      ans.push(ans[ans.length - 1] + 1)
    } else {
      ans.push(1);
    }
    return ans;
  }, []);
  let right = ratings.reverse().reduce((ans, cell, index) => {
    if (ans.length && cell > ratings[index - 1]) {
      ans.push(ans[ans.length - 1] + 1)
    } else {
      ans.push(1);
    }
    return ans;
  }, []);
  let ans = [];
  let len = ratings.length;
  for(let i = 0; i < len; i++) {
    ans.push(Math.max(left[i], right[len - i - 1]))
  }
  
  return ans.reduce((ans, cell) => ans + cell, 0);
};
