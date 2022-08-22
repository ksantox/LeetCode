import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return lastStoneWeight(numbers);
}

function lastStoneWeight(stones) {
    if(stones.length === 1) {
        return stones[0];
    }

    const indexMap = {};
    
    for (let i = 0; i < stones.length; i++) {
        const element = stones[i];
        
    }
}

export default lastStoneWeight;