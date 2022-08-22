function setupArguments(stringRows, stringColumns) {
    const rows = parseInt(stringRows);
    const columns = parseInt(stringColumns);

    return uniquePaths(rows, columns);
}

function uniquePaths(rows, columns) {
    let row = new Array(columns).fill(1);

    for (let i = 0; i < rows - 1; i++) {
        let currentRow = new Array(columns).fill(1);

        for (let col = columns - 2; col >= 0; col--) {
            currentRow[col] = currentRow[col + 1] + row[col];
        }

        row = currentRow;
    }

    return row[0];
}

export default setupArguments;