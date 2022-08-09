import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, targetString) {
    const numbers = setupNumberArray(arrayString);
    const target = parseInt(targetString);

    return twoSum(numbers, target);
}

function twoSum(numbers, target) {
    const map = {};

    for (let i = 0; i < numbers.length; i++) {
        const currNumber = numbers[i];

        if(map[currNumber] !== undefined) {
            return [map[currNumber], i];
        }

        map[target - currNumber] = i;
    }
}

export default setupArguments;