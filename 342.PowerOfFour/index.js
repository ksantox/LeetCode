function setupArguments(stringNumber) {
    const number = parseInt(stringNumber);
    return isPowerOfFour(number);
}

function isPowerOfFour(number) {
    if(number <= 0) {
        return false;
    }

    return ((number & (number - 1)) == 0) && (number % 3 == 1);
}

export default setupArguments;