import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, stringNumber) {
    const rotations = parseInt(stringNumber);
    const numbers = setupNumberArray(arrayString);

    return rotate(numbers, rotations)
}

function rotate(numbers, rotations) {
    const actualRotations = rotations % numbers.length;

    reverse(numbers, 0, numbers.length - 1);
    reverse(numbers, 0, actualRotations - 1);
    reverse(numbers, actualRotations, numbers.length - 1);

    return numbers;
}

function reverse(numbers, leftPointer, rightPointer) {
    while(leftPointer < rightPointer) {
        const temp = numbers[leftPointer];
        numbers[leftPointer++] = numbers[rightPointer];
        numbers[rightPointer--] = temp;
    }
}

export default setupArguments;