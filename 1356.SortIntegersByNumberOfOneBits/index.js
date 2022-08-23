import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return sortByBits(numbers);
}

function sortByBits(numbers) {
    const map = {};

    for (let i = 0; i < numbers.length; i++) {
        let counter = 0;
        let bit = numbers[i];
        
        while(bit > 0) {
            counter += (bit & 1);
            bit = bit >> 1;
        }

        map[numbers[i]] = counter;
    }

    return numbers.sort((a, b) => map[a] - map[b] || a - b);
}

export default setupArguments;