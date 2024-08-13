/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let bigPointer = numbers.length - 1
    let smallPointer = 0

    while (smallPointer < bigPointer) {
        if (numbers[smallPointer] + numbers[bigPointer] === target) {
            return [smallPointer + 1, bigPointer + 1]
        } else if (numbers[smallPointer] + numbers[bigPointer] > target) {
            bigPointer--
        } else {
            smallPointer++
        }
    }
};