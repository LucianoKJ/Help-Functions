/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const width = matrix.length
    let top = 0
    let bottom = width - 1

    while (top < bottom) {
        [matrix[top], matrix[bottom]] = [matrix[bottom], matrix[top]]
        top++
        bottom--
    }
    for (let x = 1; x <= width - 1; x++) {
        for (let y = 0; y < x; y++) {
            [matrix[y][x], matrix[x][y]] = [matrix[x][y], matrix[y][x]]
        }
    }
};