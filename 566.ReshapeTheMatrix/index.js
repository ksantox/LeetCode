import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString, rowString, columnString) {
    const rows = parseInt(rowString);
    const columns = parseInt(columnString);
    const matrix = setupNestedArray(arrayString);

    return matrixReshape(matrix, rows, columns);
}

function matrixReshape(matrix, rows, columns) {
    const newMatrix = [];

    if(rows * columns !== matrix.length * matrix[0].length) {
        return matrix;
    }

    let rowReader = 0;
    let columnReader = 0;

    for (let row = 0; row < rows; row++) {
        const newRow = [];
        
        for (let col = 0; col < columns; col++) {
            if(columnReader > matrix[rowReader].length - 1) {
                columnReader = 0;
                rowReader++;
            }

            if(rowReader >= matrix.length) {
                return matrix;
            }

            newRow.push(matrix[rowReader][columnReader++]);
        }

        newMatrix.push(newRow);
    }

    return newMatrix;
}

export default setupArguments;