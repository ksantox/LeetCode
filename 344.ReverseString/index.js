import { setupStringArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const charArray = setupStringArray(arrayString);
    return reverseString(charArray);
}

function reverseString(charArray) {
    let leftPointer = 0;
    let rightPointer = charArray.length - 1;

    while(leftPointer < rightPointer) {
        const temp = charArray[leftPointer];
        charArray[leftPointer++] = charArray[rightPointer];
        charArray[rightPointer--] = temp;
    }

    return charArray;
}

export default setupArguments;