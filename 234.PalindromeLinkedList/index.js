import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(numberString) {
    const head = setupLinkedList(numberString);
    return isPalindrome(head);
}

function isPalindrome(head) {
    let leftToRightData = "";
    let rightToLeftData = "";

    let node = head;

    while(node) {
        leftToRightData += node.val;
        rightToLeftData = node.val + rightToLeftData;

        node = node.next;
    }

    return leftToRightData === rightToLeftData;
}

export default setupArguments;