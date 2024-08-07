/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let fastPointer = 0
    let slowPointer = 0
    let sum = nums[0]
    let min = nums.length + 1

    while (fastPointer < nums.length) {
        if (sum >= target) {
            min = Math.min(min, fastPointer - slowPointer + 1)
            if (min === 1) return 1
            sum -= nums[slowPointer++]
        } else {
            sum += nums[++fastPointer]
        }
    }

    return min > nums.length ? 0 : min
};