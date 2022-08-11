import ListNode from "../common/LinkedListNode.js";
import { setupLinkedList } from "../common/argumentBuilders.js";

function setupArguments(firstListString, secondListString) {
    const firstListHead = setupLinkedList(firstListString);
    const secondListHead = setupLinkedList(secondListString);
    
    return mergeTwoLists(firstListHead, secondListHead);
}

function mergeTwoLists(firstList, secondList) {
    let firstListPointer = firstList;
    let secondListPointer = secondList;

    let newListPointer = new ListNode();
    const linkedListPointer = newListPointer;

    while(firstListPointer && secondListPointer) {
        if(firstListPointer.val < secondListPointer.val) {
            newListPointer.next = firstListPointer;
            firstListPointer = firstListPointer.next;
        } else {
            newListPointer.next = secondListPointer;
            secondListPointer = secondListPointer.next;
        }

        newListPointer = newListPointer.next;
    }

    while(firstListPointer) {
        newListPointer.next = firstListPointer;
        firstListPointer = firstListPointer.next;

        newListPointer = newListPointer.next;
    }

    while(secondListPointer) {
        newListPointer.next = secondListPointer;
        secondListPointer = secondListPointer.next;

        newListPointer = newListPointer.next;
    }

    return linkedListPointer.next;
}

export default setupArguments;