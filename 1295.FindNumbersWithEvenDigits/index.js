import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return findNumbers(numbers);
}

function findNumbers(numbers) {
    let evenDigitsNumbers = 0;

    for (let i = 0; i < numbers.length; i++) {
        const length = numbers[i].toString().length;

        if(length % 2 === 0) {
            evenDigitsNumbers++;
        }
    }

    return evenDigitsNumbers;
}

export default setupArguments;