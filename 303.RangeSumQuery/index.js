import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, startString, endString) {
    const end = parseInt(endString);
    const start = parseInt(startString);
    
    const numbers = setupNumberArray(arrayString);
    const numArray = new NumArray(numbers);
    
    return numArray.sumRange(start, end);
}

class NumArray {
    data = [];

    constructor(numbers) {
        this.data = numbers;
    }

    sumRange(left, right) {
        let sum = 0;

        for (let i = left; i <= right; i++) {
            sum += this.data[i];
        }

        return sum;
    }
}

export default setupArguments;