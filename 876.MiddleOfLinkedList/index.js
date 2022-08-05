import Node from "../common/LinkedListNode.js";

function setupLinkedList(numbers) {
    if(!numbers || !/[0-9](,\s{0,1}[0-9]){0,}/.test(numbers)) {
        throw new Error(`Invalid data received: ${numbers}, expected a list of numbers separated by a column.`);
    }

    const numbersArray = numbers.split(",");

    const parsedArray = numbersArray.map(number => {
        if(isNaN(number)) {
            throw new Error(`Invalid number received: ${number}.`);
        }

        return parseInt(number);
    })

    const head = new Node(parsedArray[0]);
    let node = head;

    for(let i = 1; i < parsedArray.length; i++) {
        const newNode = new Node(parsedArray[i]);

        node.next = newNode;
        node = node.next;
    }

    return middleNode(head);
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

export default setupLinkedList;