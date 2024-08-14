/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const width = matrix.length
    const turns = Math.floor(width / 2)
    for (let i = 0; i < turns; i++) {
        for (let j = 0; j < width - 2 * i - 1; j++) {
            let x = i + j
            let y = i
            let v = matrix[y][x]
            for (let k = 0; k < 4; k++) {
                [x, y] = [width - y - 1, x]
                let temp = matrix[y][x]
                matrix[y][x] = v
                v = temp
            }
        }
    }
};