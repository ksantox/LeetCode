import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const matrix = setupNestedArray(arrayString);
    return diagonalSum(matrix);
}

function diagonalSum(matrix) {
    if(matrix.length === 1) {
        return matrix[0][0];
    }

    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i] + matrix[i][matrix.length - i - 1];
    }

    if(matrix.length % 2 !== 0) {
        const middleIndex = Math.floor(matrix.length / 2);
        sum -= matrix[middleIndex][middleIndex];
    }

    return sum;
}

export default setupArguments;