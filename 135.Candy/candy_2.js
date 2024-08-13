/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
    let seperate = [0]
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] === ratings[i - 1]) {
            seperate.push(i)
        }
    }
    seperate.push(ratings.length)
    let arr = []
    for (let i = 0; i < seperate.length - 1; i++) {
        arr.push(ratings.slice(seperate[i], seperate[i + 1]))
    }

    let res = []
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i]
        let seq = []

        if (check.length === 1) {
            res.push(1)
        } else {
            for (let j = 0; j < check.length; j++) {
                if (
                    check[j] < check[j + 1] && check[j] < check[j - 1]
                    || j === 0 && check[j] < check[j + 1]
                    || j === check.length - 1 && check[j] < check[j - 1]
                ) {
                    seq[j] = 1
                } else if (check[j] < check[j + 1]) {
                    seq[j] = seq[j - 1] + 1
                }
            }
            for (let j = check.length - 1; j >= 0; j--) {
                if (
                    check[j] > check[j + 1] && check[j] > check[j - 1]
                    || j === check.length - 1 && check[j] > check[j - 1]
                ) {
                    seq[j] = Math.max(seq[j + 1] || 0, seq[j - 1] || 0) + 1
                } else if (!seq[j]) {
                    seq[j] = seq[j + 1] + 1
                }
            }
            res.push(...seq)
        }
    }
    return res.reduce((acc, cur) => acc + cur, 0)
};