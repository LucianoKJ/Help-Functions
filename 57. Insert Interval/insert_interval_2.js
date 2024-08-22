/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let res = []
    let temp = newInterval

    for (let i = 0; i < intervals.length; i++) {
        const v = intervals[i]
        if (temp[0] > v[1] || v[0] > temp[1]) {
            res.push(v)
        } else {
            temp[0] = Math.min(temp[0], v[0])
            temp[1] = Math.max(temp[1], v[1])
        }
    }

    for (let i = 0; i < res.length; i++) {
        if (res[i][0] > temp[1]) {
            res = [...res.slice(0, i), temp, ...res.slice(i, res.length)]
            temp = null
            break
        }
    }

    if (temp) res.push(temp)

    return res
};
