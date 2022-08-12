import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return moveZeroes(numbers);
}

function moveZeroes(numbers) {
    if(numbers.length < 2) {
        return numbers;
    }

    let leftPointer = 0;
    let rightPointer = 1;

    while(rightPointer < numbers.length) {
        if(!numbers[leftPointer] && !numbers[rightPointer]) {
            rightPointer++;
            continue;
        }

        if(numbers[leftPointer]) {
            leftPointer++;
            rightPointer++;
            continue;
        }

        numbers[leftPointer++] = numbers[rightPointer];
        numbers[rightPointer++] = 0;
    }

    return numbers;
}

export default setupArguments;