/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let res = []
    let k = 0
    let temp = []
    let wordLength = 0

    for (let i = 0; i < words.length; i++) {
        temp.push(words[i])
        wordLength += words[i].length

        if (wordLength + words[i + 1]?.length + temp.length > maxWidth) {
            if (temp.length === 1) {
                res[k] = temp[0] + ' '.repeat(maxWidth - wordLength)
            } else {
                let remainder = (maxWidth - wordLength) % (temp.length - 1)
                let quotient = (maxWidth - wordLength - remainder) / (temp.length - 1)

                res[k] = temp[0]
                for (let j = 1; j < temp.length; j++) {
                    let space = ' '.repeat(quotient)
                    if (remainder > 0) {
                        space += ' '
                        remainder--
                    }
                    res[k] = `${res[k]}${space}${temp[j]}`
                }
            }
            k++
            wordLength = 0
            temp = []
        } else if (i === words.length - 1) {
            res[k] = temp.join(' ') + ' '.repeat(maxWidth - wordLength - temp.length + 1)
        }
    }
    return res
};