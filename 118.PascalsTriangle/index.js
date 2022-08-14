function setupArguments(rowsString) {
    const rows = parseInt(rowsString);
    return generate(rows);
}

function generate(rows) {
    const pyramid = [[1]];

    for (let row = 1; row < rows; row++) {
        const newRow = [];

        for (let col = 0; col <= row; col++) {
            newRow.push((pyramid[row - 1][col - 1] || 0) + (pyramid[row - 1][col] || 0));
        }

        pyramid.push(newRow);
    }

    return pyramid;
}

export default setupArguments;