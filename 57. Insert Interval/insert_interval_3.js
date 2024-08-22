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
        if (!temp) {
            res.push(v)
        } else if (temp[0] > v[1]) {
            res.push(v)
        } else if (v[0] > temp[1]) {
            res.push(temp)
            res.push(v)
            temp = null
        } else {
            temp[0] = Math.min(temp[0], v[0])
            temp[1] = Math.max(temp[1], v[1])
        }
    }

    if (temp) res.push(temp)

    return res
};
