import { setupLinkedList } from "../common/argumentBuilders.js";
import ListNode from "../common/LinkedListNode.js";

function setupArguments(arrayString, stringNumber) {
    const head = setupLinkedList(arrayString);
    const indexOfRemoval = parseInt(stringNumber);

    return removeNthFromEnd(head, indexOfRemoval);
}

function removeNthFromEnd(head, indexOfRemoval) {
    let dummy = new ListNode(null, head);
    let behindPointer = dummy;
    let forwardPointer = head;

    let advance = indexOfRemoval;

    while(advance > 0 && forwardPointer) {
        advance--;
        forwardPointer = forwardPointer.next;
    }

    while(forwardPointer) {
        behindPointer = behindPointer.next;
        forwardPointer = forwardPointer.next;
    }

    behindPointer.next = behindPointer.next.next;
    return dummy.next;
}

export default setupArguments;