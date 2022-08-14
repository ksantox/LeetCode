import ListNode from "../common/LinkedListNode.js";
import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, targetString) {
    const numbers = setupNumberArray(arrayString);
    const target = parseInt(targetString);

    const head = new ListNode(numbers[0]);
    let currNode = head;

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        const newNode = new ListNode(number);

        currNode.next = newNode;
        currNode = currNode.next;
    }

    return removeElements(head, target);
}

function removeElements(head, target) {
    const newHead = new ListNode(null, head);
    
    let node = head;
    let prevNode = newHead;

    while(node) {
        if(node.val === target) {
            prevNode.next = node.next;
            node = node.next;
            continue;
        }
        
        prevNode = node;
        node = node.next;
    }

    return newHead.next;
}

export default setupArguments;