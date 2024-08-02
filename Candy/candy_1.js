/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function (ratings) {
    let seperate = [0]
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] === ratings[i - 1]) {
            seperate.push(i)
        }
    }
    seperate.push(ratings.length)
    let arr = []
    for (let i = 0; i < seperate.length - 1; i++) {
        arr.push(ratings.slice(seperate[i], seperate[i + 1]))
    }

    let res = []
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i]
        if (check.length === 1) {
            res.push(1)
        } else {
            let test = []
            let lowest
            let direction = 'forward'
            let pointer = 0
            while (pointer < check.length) {
                if (pointer === 0 && check[pointer] < check[pointer + 1]) {
                    test[pointer] = 1
                    lowest = pointer
                    pointer++
                } else if (
                    check[pointer] < check[pointer + 1] && check[pointer] < check[pointer - 1]
                    || pointer === check.length - 1 && check[pointer] < check[pointer - 1]
                ) {
                    direction = 'backward'
                    test[pointer] = 1
                    lowest = pointer
                    pointer--
                } else if (
                    check[pointer] > check[pointer + 1] && check[pointer] > check[pointer - 1]
                    || pointer === 0 && check[pointer] > check[pointer + 1]
                    || pointer === check.length - 1 && check[pointer] > check[pointer - 1]
                ) {
                    test[pointer] = Math.max(test[pointer - 1] || 0, test[pointer + 1] || 0) + 1
                    if (direction === 'forward') {
                        pointer++
                    } else {
                        direction = 'forward'
                        pointer = lowest + 1
                    }
                } else {
                    if (direction === 'forward') {
                        if (check[pointer] < check[pointer + 1]) {
                            test[pointer] = test[pointer - 1] + 1
                            pointer++
                        } else {
                            pointer++
                        }
                    } else {
                        test[pointer] = test[pointer + 1] + 1
                        pointer--
                    }
                }
            }
            res.push(...test)
        }
    }
    return res.reduce((acc, cur) => acc + cur, 0)
};