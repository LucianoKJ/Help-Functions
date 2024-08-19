/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    let res = []
    let temp = [...intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval[0] > temp[1]) {
            res.push(temp)
            temp = [...interval]
        } else {
            temp[1] = Math.max(interval[1], temp[1])
        }
    }
    res.push(temp)
    return res
};