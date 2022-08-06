import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numberArray = setupNumberArray(arrayString);
    return runningSum(numberArray);
};

function runningSum(numbers) {
    for (let i = 1; i < numbers.length; i++) {
        numbers[i] += numbers[i - 1];
    }

    return numbers;
};

export default setupArguments;