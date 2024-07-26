var jump = function (nums) {
    let steps = []
    let start = 0
    let end = 0

    while (end < nums.length - 1) {
        let nextStep = 0
        for (let i = start; i <= end; i++) {
            if (i + nums[i] > nextStep + nums[nextStep]) {
                nextStep = i
            }
        }
        steps.push(nextStep)
        start = end + 1
        end = nextStep + nums[nextStep]
    }

    return steps.length
};