import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, target) {
    const numbers = setupNumberArray(arrayString);
    const targetNumber = parseInt(target);

    return search(numbers, targetNumber);
}

function search(numbers, target) {
    let left = 0;
    let index = 0;
    let right = numbers.length - 1;

    while(left <= right) {
        index = Math.floor((left + right) / 2);

        if(numbers[index] === target) {
            return index;
        }

        if(target < numbers[index]) {
            right = index - 1;
            continue;
        }
        
        left = index + 1;
    }

    return -1
}

export default setupArguments;