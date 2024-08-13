/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s

    let arr = new Array(numRows).fill('')
    let k = 0
    let operator = '+'

    for (let i = 0; i < s.length; i++) {
        arr[k] += s[i]
        if (k === 0) {
            operator = '+'
        } else if (k === numRows - 1) {
            operator = '-'
        }

        operator === '+' ? k++ : k--
    }

    return arr.reduce((acc, cur) => acc + cur, '')
};ƒ