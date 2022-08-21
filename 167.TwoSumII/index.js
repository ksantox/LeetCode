import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, stringNumber) {
    const target = parseInt(stringNumber);
    const numbers= setupNumberArray(arrayString);

    return twoSum(numbers, target);
}

function twoSum(numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    while(leftPointer <= rightPointer) {
        if(numbers[leftPointer] + numbers[rightPointer] === target) {
            return [leftPointer + 1, rightPointer + 1];
        }

        if(numbers[rightPointer] > target - numbers[leftPointer]) {
            rightPointer--;
            continue;
        }

        if(numbers[leftPointer] < target - numbers[rightPointer]) {
            leftPointer++;
            continue;
        }
    }

    return null;
}

export default setupArguments;