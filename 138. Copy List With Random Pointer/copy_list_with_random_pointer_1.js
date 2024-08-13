/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
    if (!head) return null

    let res = new _Node(head.val, null, null)
    let dict = new Map([[head, 0]])
    let arr = [res]
    let k = 1

    let curNode = head.next
    while (curNode) {
        const node = new _Node(curNode.val, null, null)
        arr[k - 1].next = node
        arr[k] = (node)
        dict.set(curNode, k)

        curNode = curNode.next
        k++
    }

    curNode = head
    let cur = res
    while (curNode) {
        if (curNode.random) {
            cur.random = arr[dict.get(curNode.random)]
        }
        cur = cur.next
        curNode = curNode.next
    }
    return res
};