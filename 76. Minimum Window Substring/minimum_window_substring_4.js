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

    let start = 0
    let minStart = start
    let minL = Infinity

    for (let end = 0; end < s.length; end++) {
        const w = s[end]
        if (check[w] !== undefined && --check[w] >= 0) {
            count--
        }

        while (!count) {
            if (end - start + 1 < minL) {
                minL = end - start + 1
                minStart = start
            }
            const last = s[start++]
            if (check[last] !== undefined && check[last]++ === 0) {
                count++
            }
        }
    }

    return minL === Infinity ? "" : s.slice(minStart, minStart + minL)
};