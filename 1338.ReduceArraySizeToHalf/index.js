import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return minSetSize(numbers);
}

function minSetSize(numbers) {
    if(numbers.length < 3) {
        return 1;
    }

    const map = {};

    for (let i = 0; i < numbers.length; i++) {
        if(!map[numbers[i]]) {
            map[numbers[i]] = 0;
        }

        map[numbers[i]]++;
    }

    let orderedByOccurrences = [];
    
    for (const number in map) {
        orderedByOccurrences.push(map[number]);
    }
    
    orderedByOccurrences.sort((a, b) => b - a);
    
    let itemsRemoved = 0;
    let elementsRemoved = 0;
    let targetSize = numbers.length / 2;

    for (let i = 0; i < orderedByOccurrences.length; i++) {
        elementsRemoved++;
        itemsRemoved += orderedByOccurrences[i];
        
        if(itemsRemoved >= targetSize) {
            break;
        }
    }

    return elementsRemoved;
}

export default setupArguments;