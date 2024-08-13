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

    let dict = new Map([[head, new _Node(head.val, null, null)]])
    let ogNode = head
    let cur

    while (ogNode) {
        cur = dict.get(ogNode)
        if (ogNode.next) {
            if (dict.get(ogNode.next)) {
                cur.next = dict.get(ogNode.next)
            } else {
                cur.next = new _Node(ogNode.next.val, null, null)
                dict.set(ogNode.next, cur.next)
            }
        }
        if (ogNode.random) {
            if (dict.get(ogNode.random)) {
                cur.random = dict.get(ogNode.random)
            } else {
                cur.random = new _Node(ogNode.random.val, null, null)
                dict.set(ogNode.random, cur.random)
            }
        }
        ogNode = ogNode.next
    }

    return dict.get(head)
};