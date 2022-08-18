import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return sumOddLengthSubarrays(numbers);
}

function sumOddLengthSubarrays(numbers) {
    let sum = 0;

    let subArrayLength = 1;
    const maximumRotations = numbers.length % 2 === 0 ? numbers.length : numbers.length + 1;

    while(subArrayLength < maximumRotations) {
        let subArraySum = 0;
        let leftPointer = 0;
        let rightPointer = leftPointer + subArrayLength - 1;

        while(rightPointer < numbers.length) {
            for (let i = leftPointer; i <= rightPointer; i++) {
                subArraySum += numbers[i];
            }

            leftPointer++;
            rightPointer++;
        }

        subArrayLength += 2;
        sum += subArraySum;
    }

    return sum;
}

export default setupArguments;