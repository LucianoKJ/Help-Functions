/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
    let total = ratings.length
    let peak = 0
    let valley = 0
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] === ratings[i - 1]) {
            peak = 0
            valley = 0
        } else if (ratings[i] > ratings[i - 1]) {
            peak++
            total += peak
        } else if (ratings[i] < ratings[i - 1]) {
            valley++
            total += valley
            if (ratings[i + 1] >= ratings[i] || i === ratings.length - 1) {
                total -= Math.min(peak, valley)
                peak = 0
                valley = 0
            }
        }
    }
    return total
}; 