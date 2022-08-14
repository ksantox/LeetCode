import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, target) {
    const numbers = setupNumberArray(arrayString);
    const targetNumber = parseInt(target);

    return search(numbers, targetNumber);
}

function search(numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while(leftPointer <= rightPointer) {
        let index = Math.floor((leftPointer + rightPointer) / 2);

        if(numbers[index] === target) {
            return index;
        }

        if(target < numbers[index]) {
            rightPointer = index - 1;
            continue;
        }
        
        leftPointer = index + 1;
    }

    return -1;
}

export default setupArguments;