import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return maxSubArray(numbers);
}

function maxSubArray(numbers) {
    let sum = 0;
    let maxSum = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        sum = Math.max(sum, 0) + numbers[i];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}

export default setupArguments;