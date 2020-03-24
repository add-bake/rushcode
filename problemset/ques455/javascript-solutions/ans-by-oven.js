/**
 * author: 欧文
 * date: 2020-03-23
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干尺寸
 * @return {number}
 */
let findContentChildren = (g, s) => {
  let g1 = g.sort((a, b) => b - a);
  let s1 = s.sort((a, b) => b - a);
  let count = 0;
  g1.map(g => {
    if (g <= s1[0]) {
      s1.shift();
      count++;
    }
  });
  return count;
};
