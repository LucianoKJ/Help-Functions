/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
    let left = 0
    let right = height.length - 1
    let leftMaxHeight = height[0]
    let rightMaxHeight = height[height.length - 1]
    let total = 0

    while (left < right) {
        if (leftMaxHeight < rightMaxHeight) {
            left++
            if (height[left] >= leftMaxHeight) {
                leftMaxHeight = height[left]
            } else {
                total += leftMaxHeight - height[left]
            }
        } else {
            right--
            if (height[right] >= rightMaxHeight) {
                rightMaxHeight = height[right]
            } else {
                total += rightMaxHeight - height[right]
            }
        }
    }
    return total
};