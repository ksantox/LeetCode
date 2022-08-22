function setupArguments(stringNumber) {
    const number = parseInt(stringNumber);
    return isPowerOfTwo(number);
}

function isPowerOfTwo(number) {
    if (number <= 0) {
        return false;
    }

    return (number & (number - 1)) === 0;
};

export default setupArguments;