var canJump = function (nums) {
    let far = 0
    let pointer = 0

    while (far < nums.length - 1 && pointer >= 0) {
        const newFar = pointer + nums[pointer]
        if (newFar > far) {
            far = newFar
            pointer = newFar
        } else {
            pointer--
        }
    }
    return far >= nums.length - 1
};