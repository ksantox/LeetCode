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

    return detectCycle(head);
}

function detectCycle(head) {
    let slowPointer = head;
    let fastPointer = head;
    
    while(fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next?.next;
        
        if (fastPointer === slowPointer) {            
            break;
        }
    }

    if(!fastPointer) {
        return null;
    }

    slowPointer = head;

    while (fastPointer !== slowPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }
        
    return slowPointer;
};

export default setupArguments;