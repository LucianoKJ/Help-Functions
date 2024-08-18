/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k === 1) return head

    let dummy = new ListNode(null, head)
    let last = dummy
    let start = head
    while (check(start, k)) {
        for (let i = 0; i < k - 1; i++) {
            const nextNode = start.next
            start.next = nextNode.next
            nextNode.next = last.next
            last.next = nextNode
        }
        last = start
        start = start.next
    }
    return dummy.next
};

function check(node, k) {
    if (!node) return false

    for (let i = 0; i < k - 1; i++) {
        node = node.next
        if (!node) return false
    }
    return true
}