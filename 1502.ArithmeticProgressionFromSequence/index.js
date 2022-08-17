import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return canMakeArithmeticProgression(numbers)
}

function canMakeArithmeticProgression(numbers) {
    if(numbers.length < 3) {
        return true;
    }

    selectionSort(numbers);
    const progressionDifference = numbers[1] - numbers[0];

    let leftPointer = 2;
    let rightPointer = numbers.length - 1;

    while(leftPointer <= rightPointer) {
        if(numbers[leftPointer] - numbers[leftPointer - 1] !== progressionDifference) {
            return false;
        }

        if(numbers[rightPointer + 1] !== undefined && numbers[rightPointer + 1] - numbers[rightPointer] !== progressionDifference) {
            return false;
        }

        leftPointer++;
        rightPointer--;
    }

    return true;
}

function selectionSort(numbers) {
    let indexOfMin = null;

    for (let i = 0; i < numbers.length; i++) {
        indexOfMin = i;

        for (let j = i + 1; j < numbers.length; j++) {
            if(numbers[j] < numbers[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if(indexOfMin !== i) {
            const temp = numbers[i];
            numbers[i] = numbers[indexOfMin];
            numbers[indexOfMin] = temp;
        }
    }

    return numbers;
}

export default setupArguments;