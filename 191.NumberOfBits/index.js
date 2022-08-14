function setupArguments(bitNumberString) {
    const bitNumber = parseInt(bitNumberString, 2);
    return hammingWeight(bitNumber);
}

function hammingWeight(bitNumber) {
    let count = 0;

    while(bitNumber) {
        bitNumber = bitNumber & (bitNumber - 1);
        count++;
    }

    return count;
}

export default setupArguments;