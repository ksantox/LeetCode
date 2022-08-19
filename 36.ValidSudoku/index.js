import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const matrix = setupNestedArray(arrayString);
    return isValidSudoku(matrix);
}

function isValidSudoku(matrix) {
    const rowMap = {};
    const columnMap = {};
    const segmentMap = {};

    for (let row = 0; row < matrix.length; row++) {
        if(!rowMap[row]) {
            rowMap[row] = {};
        }

        for (let col = 0; col < matrix.length; col++) {
            const segmentRow = Math.floor(row / 3);
            const segmentColumn = Math.floor(col / 3);

            if(!columnMap[col]) {
                columnMap[col] = {};
            }

            if(!segmentMap[`${segmentRow}${segmentColumn}`]) {
                segmentMap[`${segmentRow}${segmentColumn}`] = {};
            }

            if(matrix[row][col] === ".") {
                continue;
            }

            if(rowMap[row][matrix[row][col]]) {
                return false;
            }

            rowMap[row][matrix[row][col]] = true;
            
            if(columnMap[col][matrix[row][col]]) {
                return false;
            }

            columnMap[col][matrix[row][col]] = true;

            if(segmentMap[`${segmentRow}${segmentColumn}`][matrix[row][col]]) {
                return false;
            }

            segmentMap[`${segmentRow}${segmentColumn}`][matrix[row][col]] = true;
        }
    }

    return true;
}

export default setupArguments;