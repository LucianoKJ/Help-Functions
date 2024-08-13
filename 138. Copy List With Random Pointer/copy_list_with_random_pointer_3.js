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
    let dict = new Map()
    let ogNode = head

    while (ogNode) {
        dict.set(ogNode, new _Node(ogNode.val, null, null))
        ogNode = ogNode.next
    }

    ogNode = head
    while (ogNode) {
        const cur = dict.get(ogNode)
        cur.next = dict.get(ogNode.next) || null
        cur.random = dict.get(ogNode.random) || null
        ogNode = ogNode.next
    }

    return dict.get(head)
};