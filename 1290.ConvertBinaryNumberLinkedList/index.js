import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const head = setupLinkedList(arrayString);
    return getDecimalValue(head);
}

function getDecimalValue(head) {
    let stringBinary = "";
    let node = head;

    while(node) {
        stringBinary += node.val;
        node = node.next;
    }

    return parseInt(stringBinary, 2);
}

export default setupArguments;