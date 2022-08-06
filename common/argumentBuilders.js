import Node from "./LinkedListNode.js";

function setupLinkedList(numberString) {
    if(!numberString || !/[0-9](,\s{0,1}[0-9]){0,}/.test(numberString)) {
        throw new Error(`Invalid data received: ${numberString}, expected a list of numbers separated by a column.`);
    }

    const items = numberString.replace(/[\[\]]/g, "").split(/,\s{0,}/g);

    const parsedArray = items.map(number => {
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

    return head;
}

function setupNestedArray(string) {
    let match = null;
    const result = [];
    const regex = /\[([0-9a-zA-Z,])+\]/g;

    while((match = regex.exec(string)) !== null) {
        const currArray = [];
        let items = match[0].replace(/[\[\]]/g, "").split(/,\s{0,}/g);

        for (const item of items) {
            let itemToAdd = item;

            if(!isNaN(itemToAdd)) {
                itemToAdd = parseInt(itemToAdd);
            }

            currArray.push(itemToAdd);
        }

        result.push(currArray);
    }

    return result;
}

export {
    setupLinkedList,
    setupNestedArray
}