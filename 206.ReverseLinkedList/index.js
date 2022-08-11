import ListNode from "../common/LinkedListNode.js";
import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(listString) {
    const listHead = setupLinkedList(listString);
    return reverseList(listHead);
}

function reverseList(head) {
    if(!head) {
        return null;
    }

    let currNode = head;
    let newListNode = new ListNode(head.val);

    while((currNode = currNode.next) !== null) {
        const newNode = new ListNode(currNode.val, newListNode);
        newListNode = newNode;
    }

    return newListNode;
}

export default setupArguments;