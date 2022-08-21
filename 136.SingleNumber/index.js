import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return singleNumber(numbers);
}

function singleNumber(numbers) {
    let number = 0;

    for(let i = 0; i <numbers.length; i++) {
        number ^= numbers[i];
    }

    return number;
}

export default setupArguments;