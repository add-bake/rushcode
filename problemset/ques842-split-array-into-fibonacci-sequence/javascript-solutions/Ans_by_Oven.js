/**
 * author: 欧文
 * date: 2020-04-04
 * @param {string} S 待验证字符串
 * @return {number[]} 成功时返回分割的菲波那切数列；失败时返回空数组
 */
let splitIntoFibonacci = (S) => {
  let len = S.length;
  let isLegalNumber = (num, len) => {
    return String(num).length === len && num < 2 ** 31;
  }
  let backtracking = (num, seq) => {
    let iLen = 1;
    let kLen = 1;

    for (; iLen + kLen <= seq.length;) {
      let a = Number(seq.slice(0, iLen));
      let b = Number(seq.slice(iLen, iLen + kLen));
      let inumMaxLen = Math.max(iLen, String(num).length);

      if (!isLegalNumber(a, iLen)) {
        return [];
      } else if (!isLegalNumber(b, kLen)) {
        iLen++;
        kLen = inumMaxLen;
        continue;
      }

      if (Number(num) + a === b) {
        if (iLen + kLen === seq.length) {
          return [a, b];
        }

        const tail = backtracking(a, seq.slice(iLen, len));

        if (tail.length) {
          return [a].concat(tail);
        }

        iLen++;
        kLen = inumMaxLen;
      } else if (num + a < b) {
        iLen++;
        kLen = inumMaxLen;
      } else {
        kLen = kLen < inumMaxLen ? inumMaxLen : kLen + 1;
      }
    }

    return [];
  }

  let ans = [];
  for (let i = 1; i < S.length / 2; i++) {
    const num = Number(S.slice(0, i));

    if (!isLegalNumber(num, i)) break;

    ans = backtracking(num, S.slice(i, S.length));
    if (ans.length) {
      ans.unshift(num);
      return ans;
    }
  }

  return [];
};
