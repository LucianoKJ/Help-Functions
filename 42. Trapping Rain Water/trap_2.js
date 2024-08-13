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
            leftMaxHeight = Math.max(leftMaxHeight, height[left])
            total += leftMaxHeight - height[left]
        } else {
            right--
            rightMaxHeight = Math.max(rightMaxHeight, height[right])
            total += rightMaxHeight - height[right]
        }
    }
    return total
};