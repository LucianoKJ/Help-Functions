/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let fastPointer = 0
    let slowPointer = 0
    let sum = 0
    let min = Infinity

    while (fastPointer < nums.length) {
        sum += nums[fastPointer++]
        while (sum >= target) {
            min = Math.min(min, fastPointer - slowPointer)
            sum -= nums[slowPointer++]
        }
    }

    return min === Infinity ? 0 : min
};