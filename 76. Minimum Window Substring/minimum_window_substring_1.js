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
    let head = 0
    let str = s[0]
    let dict = { [str]: 1 }
    if (check[str]) {
        count--
    }

    while (head < s.length) {
        if (count) {
            const w = s[++head]
            str += w

            if (dict[w]) dict[w]++
            else dict[w] = 1

            if (dict[w] <= check[w]) count--
        } else {
            res = (!res || str.length < res.length) ? str : res

            const w = str[0]
            if (--dict[w] < check[w]) count++

            str = str.slice(1)
        }
    }

    return res
};