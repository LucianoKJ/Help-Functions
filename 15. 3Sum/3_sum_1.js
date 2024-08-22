/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []

    nums.sort((a, b) => a - b)
    const e = Math.min(nums.findIndex((v) => v >= 0), nums.length - 3)

    for (let i = 0; i <= e; i++) {
        const v = nums[i]
        if (v === nums[i - 1]) continue

        let start = i + 1
        let end = nums.length - 1
        while (start < end) {
            const sV = nums[start]
            const eV = nums[end]

            if (v + sV + eV > 0) {
                end--
            } else if (v + sV + eV < 0) {
                start++
            } else {
                const temp = [v, sV, eV]
                res.push(temp)
                start++
                end--
                while (nums[start] === nums[start - 1]) start++
                while (nums[end] === nums[end + 1]) end--
            }

        }
    }
    return res
};