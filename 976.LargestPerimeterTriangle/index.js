import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return largestPerimeter(numbers);
}

function largestPerimeter(numbers) {
    numbers.sort((a, b) => b - a);

    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] < numbers[i + 1] + numbers[i + 2]) {
            return numbers[i] + numbers[i + 1] + numbers[i + 2];
        }
        
    }

    return 0;
}

export default setupArguments;