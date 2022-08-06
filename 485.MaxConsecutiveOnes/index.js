import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return findMaxConsecutiveOnes(numbers);
}

function findMaxConsecutiveOnes(numbers) {
    let counter = 0;
    let highest = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] === 1) {
            counter++;

            if(counter > highest) {
                highest = counter;
            }

            continue;
        }
        
        counter = 0;
    }
    
    return highest;
};

export default setupArguments