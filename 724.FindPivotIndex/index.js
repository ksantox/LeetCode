import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return pivotIndex(numbers);
}

function pivotIndex(numbers) {
    let sum = 0;
    const totalSum = numbers.reduce((sum, number) => sum + number, 0);

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        
        if(totalSum - sum - number === sum) {
            return i;
        }

        sum += number;
    }

    return -1;
}

export default setupArguments;