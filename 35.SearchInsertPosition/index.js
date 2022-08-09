import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, targetString) {
    const numbers = setupNumberArray(arrayString);
    const target = parseInt(targetString);

    return searchInsert(numbers, target);
}

function searchInsert(numbers, target) {
    let midpoint = 0;
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while(leftPointer <= rightPointer) {
        midpoint = Math.floor((rightPointer + leftPointer) / 2);

        if(target === numbers[midpoint]) {
            return midpoint;
        }

        if(target < numbers[midpoint]) {
            rightPointer = midpoint - 1;
            continue;
        }

        leftPointer = midpoint + 1;
    }

    return leftPointer;
}

export default setupArguments;