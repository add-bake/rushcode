/**
 * author: 欧文
 * date: 2020-04-18
 * @param {number[]} g 孩子胃口
 * @param {number[]} s 饼干尺寸
 * @return {number}
 */
let findContentChildren = (g, s) => {
  let max = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  for (let i = 0; i < s.length; i++) {
    const index = g.findIndex(x => s[i] >= x)
    if (index > -1) {
      max++
      g.splice(index, 1)
    }
  }
  return max
}
