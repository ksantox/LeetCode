import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return duplicateZeros(numbers);
}

function duplicateZeros(numbers) {
    let pendingNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        
        if(!element) {
            pendingNumbers.push(element);
        }

        if(pendingNumbers.length) {
            pendingNumbers.push(numbers[i]);
            numbers[i] = pendingNumbers.shift();
            continue;
        }
    }

    return numbers;
}

export default setupArguments;