import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const matrix = setupNestedArray(arrayString);
    return rotate(matrix);
}

function rotate(matrix) {
    transpose(matrix);
    reflect(matrix);

    return matrix;
}

function transpose(matrix) {
    const rowLength = matrix.length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = row + 1; col < rowLength; col++) {
            const temp = matrix[col][row];
            matrix[col][row] = matrix[row][col];
            matrix[row][col] = temp;
        }
    }
}

function reflect(matrix) {
    const rowLength = matrix.length;

    for (let row = 0; row < rowLength; row++) {
        for (let col = 0; col < rowLength / 2; col++) {
            const temp = matrix[row][col];
            matrix[row][col] = matrix[row][rowLength - col - 1];
            matrix[row][rowLength - col - 1] = temp;
        }
    }
}

export default setupArguments;