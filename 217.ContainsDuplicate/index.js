import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return containsDuplicate(numbers);
}

function containsDuplicate(numbers) {
    const hashTable = {};

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        if(hashTable[number]) {
            return true;
        }

        hashTable[number] = true;
    }

    return false;
}

export default setupArguments;