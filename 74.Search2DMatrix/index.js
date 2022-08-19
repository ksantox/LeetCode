import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, stringNumber) {
    const matrix = setupNestedArray(arrayString);
    const target = parseInt(stringNumber);

    return searchMatrix(matrix, target);
}

function searchMatrix(matrix, target) {
    let row = 0;
    let leftPointer = 0;
    let rightPointer = matrix[row].length - 1;

    while(leftPointer <= rightPointer && row < matrix.length) {
        if(matrix[row][matrix[row].length - 1] < target) {
            row++;
            continue;
        }

        const middle = Math.floor((leftPointer + rightPointer) / 2);

        if(matrix[row][middle] === target) {
            return true;
        }

        if(matrix[row][middle] > target) {
            rightPointer = middle - 1;
            continue;
        }

        leftPointer = middle + 1;
    }

    return false;
}

export default setupArguments;