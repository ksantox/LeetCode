import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return isPossible(numbers);
}

// The idea behind this algorithm is that we track the available (or none occupied numbers)
// in one hashmap and the subsequences we make (and can potentially extend since we are
// taking a greedy approach) in another hashmap. The key in this algorithm's functionality
// is to check if every number can either be added to a preexisting sequences, therefore
// extending it, or start a new one by using a look ahead approach to verify that the 
// subsequence can be of length 3 at least. If neither of these cases is met we can
// safely conclude that the input is invalid for our case and return false.

function isPossible(numbers) {
    if(numbers.length < 3) {
        return false;
    }

    const occurrences = {};
    const existingSequences = {};

    for (const number of numbers) {
        occurrences[number] = occurrences[number] ? occurrences[number] + 1 : 1;
    }

    for (const number of numbers) {
        if(!occurrences[number]) {
            continue;
        }

        if(existingSequences[number]) {
            occurrences[number]--;
            existingSequences[number]--;
            existingSequences[number + 1] = existingSequences[number + 1] ? existingSequences[number + 1] + 1 : 1;
            continue;
        }

        if(occurrences[number] && occurrences[number + 1] && occurrences[number + 2]) {
            occurrences[number]--;
            occurrences[number + 1]--;
            occurrences[number + 2]--;
            existingSequences[number + 3] = existingSequences[number + 3] ? existingSequences[number + 3] + 1 : 1;
            continue;
        }

        return false;
    }

    return true;
}

export default setupArguments;