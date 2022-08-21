function setupArguments(stringNumber) {
    const number = parseInt(stringNumber);
    return isPowerOfTwo(number);
}

function isPowerOfTwo(number) {
    if (number <= 0) {
        return false;
    }
    
    if ((number & (number - 1)) === 0) {
        return true;
    }

    return false;
};

export default setupArguments;