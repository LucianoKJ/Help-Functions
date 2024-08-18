/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let res = []
    const count = words.length
    const wordLength = words[0].length
    let dict = {}

    for (let i = 0; i < count; i++) {
        const v = words[i]
        if (dict[v]) {
            dict[v]++
        } else {
            dict[v] = 1
        }
    }

    for (let i = 0; i <= s.length - count * wordLength; i++) {
        const _dict = { ...dict }
        let _s = s.slice(i, i + count * wordLength)
        if (func(_dict, _s, wordLength)) {
            res.push(i)
        }
    }
    return res
};

function func(dict, s, l) {
    while (s) {
        const v = s.slice(0, l)
        if (dict[v]) {
            dict[v]--
        } else {
            return false
        }
        s = s.slice(l)
    }
    return true
}