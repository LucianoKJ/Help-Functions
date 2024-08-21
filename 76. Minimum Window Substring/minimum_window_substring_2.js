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
        if (check[t[i]]) {
            check[t[i]]++
        } else {
            check[t[i]] = 1
        }
    }

    let res = ""
    let end = 0
    let start = 0
    let dict = { [s[0]]: 1 }
    if (check[s[0]]) {
        count--
    }

    while (end < s.length) {
        if (count) {
            const w = s[++end]

            if (dict[w]) dict[w]++
            else dict[w] = 1

            if (dict[w] <= check[w]) count--
        } else {
            if (!res || end - start + 1 < res.length) {
                res = s.slice(start, end + 1)
            }

            const w = s[start++]
            if (--dict[w] < check[w]) count++
        }
    }

    return res
};