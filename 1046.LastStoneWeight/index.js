import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return lastStoneWeight(numbers);
}

function lastStoneWeight(stones) {
    if(stones.length === 1) {
        return stones[0];
    }

    return "Not Implemented";
}

export default setupArguments;