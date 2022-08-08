import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(firstArrayString, firstLengthString, secondArrayString, secondLengthString) {
    const targetArray = setupNumberArray(firstArrayString);
    const fillerArray = setupNumberArray(secondArrayString);

    const firstLength = parseInt(firstLengthString);
    const secondLength = parseInt(secondLengthString);

    return merge(targetArray, firstLength, fillerArray, secondLength);
};

function merge(targetArray, firstLength, fillerArray, secondLength) {
    let left = firstLength - 1;
    let right = secondLength - 1;
    let reversedIndex = firstLength + secondLength - 1;

    while(left >= 0 && right >= 0) {
        // Pick the bigger number from either of the arrays and reduce it's corresponding index
        targetArray[reversedIndex--] = targetArray[left] > fillerArray[right] ? targetArray[left--] : fillerArray[right--];
    }
    
    // Fill leftover sorted values from second array
    while(right >= 0) {
        targetArray[reversedIndex--] = fillerArray[right--];
    }

    return targetArray;
};

function mergeSlow(targetArray, firstLength, fillerArray, secondLength) {
    for (let i = 0; i < secondLength; i++) {
        const element = fillerArray[i];
        targetArray[firstLength + i] = element;
    }

    targetArray.sort((a, b) => a - b);

    return targetArray;
};

export default setupArguments;