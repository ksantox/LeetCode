import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayStringOne, arrayStringTwo) {
    const numbersOne = setupNumberArray(arrayStringOne);
    const numbersTwo = setupNumberArray(arrayStringTwo);

    return intersect(numbersOne, numbersTwo);
}

function intersect(numbersOne, numbersTwo) {
    // If first array is bigger swap
    // their positions to reduce map size
    if(numbersOne.length > numbersTwo.length) {
        return intersect(numbersTwo, numbersOne);
    }

    const map = {};

    for (let i = 0; i < numbersOne.length; i++) {
        if(!map[numbersOne[i]]) {
            map[numbersOne[i]] = 0;
        }

        map[numbersOne[i]]++;
    }

    const intersectedNumbers = [];

    for (let i = 0; i < numbersTwo.length; i++) {
        if(!map[numbersTwo[i]]) {
            continue;
        }

        intersectedNumbers.push(numbersTwo[i]);
        map[numbersTwo[i]]--;
    }

    return intersectedNumbers;
}

export default setupArguments;