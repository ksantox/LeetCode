import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(firstArrayString, secondArrayString) {
    const sourceNumbers = setupNumberArray(firstArrayString);
    const targetNumbers = setupNumberArray(secondArrayString);

    return nextGreaterElement(sourceNumbers, targetNumbers);
};

function nextGreaterElement(sourceNumbers, targetNumbers) {
    const map = {};
    const result = [];

    for (let i = 0; i < sourceNumbers.length; i++) {
        let greaterNumber = -1;
        let didReachStartIndex = !!map[sourceNumbers[i]];
        
        for (let j = map[sourceNumbers[i]] || 0; j < targetNumbers.length; j++) {
            if(map[targetNumbers[j]] === undefined) {
                map[targetNumbers[j]] = j;
            }

            if(!didReachStartIndex) {
                if(sourceNumbers[i] !== targetNumbers[j]) {
                    continue;
                }

                didReachStartIndex = true;
            }

            if(targetNumbers[j] > sourceNumbers[i]) {
                greaterNumber = targetNumbers[j];
                break;
            }
        }

        result.push(greaterNumber);
    }

    return result;
}

export default setupArguments;