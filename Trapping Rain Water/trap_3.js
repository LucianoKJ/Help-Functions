/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let heighest = 0
    let heighestIndex = 0
    let total = 0
    let current = 0
    for (let i = 0; i < height.length; i++) {
        if (height[i] < heighest) {
            current += heighest - height[i]
        } else {
            total += current
            current = 0
            heighestIndex = i
            heighest = height[i]
        }
    }
    if (heighestIndex !== height.length - 1) {
        let end = heighestIndex
        current = 0
        heighest = 0
        for (let i = height.length - 1; i >= end; i--) {
            if (height[i] < heighest) {
                current += heighest - height[i]
            } else {
                total += current
                current = 0
                heighestIndex = i
                heighest = height[i]
            }
        }
    }
    return total
};