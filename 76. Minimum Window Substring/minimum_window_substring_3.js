/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let check = {}
    let count = 0
    for (let i = 0; i < t.length; i++) {
        count++
        if (check[t[i]]) check[t[i]]++
        else check[t[i]] = 1
    }

    let minStart = 0
    let minL = Infinity
    let end = 0
    let start = 0
    if (check[s[0]]) {
        check[s[0]]--
        count--
    }

    while (end < s.length) {
        if (count) {
            const w = s[++end]
            if (check[w] !== undefined && --check[w] >= 0) {
                count--
            }

        } else {
            if (end - start + 1 < minL) {
                minL = end - start + 1
                minStart = start
            }
            const w = s[start++]
            if (check[w] !== undefined && check[w]++ === 0) {
                count++
            }
        }
    }

    return minL === Infinity ? "" : s.slice(minStart, minStart + minL)
};