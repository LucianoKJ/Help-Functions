var jump = function (nums) {
    let steps = []
    let farthest = 0
    let nextStep = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (i + nums[i] > nextStep + nums[nextStep]) {
            nextStep = i
        }
        if (i === farthest) {
            steps.push(nextStep)
            farthest = nextStep + nums[nextStep]
            if (farthest >= nums.length - 1) {
                break
            }
        }
    }

    return steps.length
};
