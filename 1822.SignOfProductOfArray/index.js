import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return arraySign(numbers)
}

function arraySign(numbers) {
    if(numbers[0] === 0) {
        return 0;
    }

    let product = numbers[0] > 0 ? 1 : -1;

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        
        if(number === 0) {
            return 0;
        }

        product *= number > 0 ? 1 : -1;
    }

    return product;
}

export default setupArguments;