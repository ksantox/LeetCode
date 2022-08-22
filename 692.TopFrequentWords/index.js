import { setupStringArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, stringNumber) {
    const amount = parseInt(stringNumber);
    const words = setupStringArray(arrayString);

    return topKFrequent(words, amount);
}

function topKFrequent(words, amount) {
    const occurrencesMap = {};
    const occurrencesArray = [];

    for (let i = 0; i < words.length; i++) {
        if(occurrencesMap[words[i]] === undefined) {
            occurrencesArray.push({ word: words[i], occurrences: 1 });
            occurrencesMap[words[i]] = occurrencesArray.length - 1;
            continue;
        }
        
        occurrencesArray[occurrencesMap[words[i]]].occurrences++;
    }

    occurrencesArray.sort((a, b) => {
        if(a.occurrences === b.occurrences) {
            return a.word < b.word ? -1 : 1;
        }

        return b.occurrences - a.occurrences;
    });

    let result = [];

    for (let i = 0; i < amount; i++) {
        result.push(occurrencesArray[i].word);
    }

    return result;
}

// topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4);
topKFrequent(["i","love","leetcode","i","love","coding"], 3);

export default setupArguments;