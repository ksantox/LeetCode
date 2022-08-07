import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return sortedSquares(numbers);
}

function sortedSquares(numbers) {
    let sortedSquaredNumbers = [];

    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    for (let i = rightPointer; i >= 0; i--) {
        if(numbers[rightPointer] > Math.abs(numbers[leftPointer])) {
            sortedSquaredNumbers[i] = numbers[rightPointer] * numbers[rightPointer--];
            continue;
        }

        sortedSquaredNumbers[i] = numbers[leftPointer] * numbers[leftPointer++];
    }

    return sortedSquaredNumbers;
}

export default setupArguments;