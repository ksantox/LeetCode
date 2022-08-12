import Node from "../common/LinkedListNode.js";
import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, targetString) {
    const numbers = setupNumberArray(arrayString);
    const circleBackIndex = parseInt(targetString);

    const head = new Node(numbers[0]);
    let currNode = head;
    let circledNode = null;

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        const newNode = new Node(number);

        if(i === circleBackIndex) {
            circledNode = newNode;
        }

        currNode.next = newNode;
        currNode = currNode.next;
    }

    currNode.next = circledNode;

    return hasCycle(head);
}

function hasCycle(head) {
    let slowPointer = head;
    let fastPointer = head;

    while(fastPointer.next?.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next?.next;

        if(fastPointer === slowPointer) {
            return true;
        }
    }

    return false;
}

setupArguments("[1,2,3,4]", 1);

export default setupArguments;