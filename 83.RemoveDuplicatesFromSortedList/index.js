import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(listString) {
    const listHead = setupLinkedList(listString);
    return deleteDuplicates(listHead);
}

function deleteDuplicates(head) {
    if(!head) {
        return null;
    }

    let currNode = head;

    while(currNode?.next) {
        let nextNode = currNode.next;

        while(nextNode && nextNode.val === currNode.val) {
            nextNode = nextNode.next;
        }

        currNode.next = nextNode;
        currNode = nextNode;
    }

    return head;
}

export default setupArguments;