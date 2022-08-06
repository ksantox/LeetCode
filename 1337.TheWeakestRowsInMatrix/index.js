const testMatrix = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]
];

function kWeakestRows(count, matrix = testMatrix) {
    const summedValues = [];

    for (let index = 0; index < matrix.length; index++) {
        const sum = matrix[index].reduce((sum, item) => sum + item, 0);
        summedValues.push({ index, sum });
    }

    summedValues.sort((a, b) => a.sum < b.sum ? -1 : 1);

    const result = [];

    for (let i = 0; i < count; i++) {
        const item = summedValues[i];
        result.push(item.index);
    }

    return result;
}

export default kWeakestRows;