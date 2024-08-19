/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = []
    let temp = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length; i++) {
        if (!temp.length) {
            temp = [...intervals[i]]
        } else {
            temp[1] = Math.max(temp[1], intervals[i][1])
        }

        if (!(intervals[i + 1] && intervals[i + 1][0] <= temp[1])) {
            res.push(temp)
            temp = []
        }
    }
    return res
};