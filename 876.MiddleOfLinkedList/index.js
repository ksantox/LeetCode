import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(numbersString) {
    const numbers = setupLinkedList(numbersString);
    return middleNode(numbers);
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

export default setupArguments;