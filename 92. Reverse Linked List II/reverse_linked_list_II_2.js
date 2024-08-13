/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let curNode = head
    let arr = []
    while (curNode) {
        arr.push(curNode)
        curNode = curNode.next
    }

    let leftPosition = left - 1
    let righPosition = right - 1

    while (leftPosition < righPosition) {
        const leftNode = arr[leftPosition]

        arr[leftPosition] = arr[righPosition]
        arr[righPosition] = leftNode
        leftPosition++
        righPosition--
    }


    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].next = arr[i + 1]
    }

    arr[arr.length - 1].next = null
    return arr[0]
};