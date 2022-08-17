function setupArguments(stringNumber) {
    const number = parseInt(stringNumber);
    return isHappy(number);
}

function isHappy(number) {
    const map = {};

    while(!map[number = getSumOfSquares(number)]) {
        if(number === 1) {
            return true;
        }

        map[number] = true;
    }

    return false;
}

function getSumOfSquares(number) {
    let sumOfSquares = 0;

    while(number) {
        sumOfSquares += Math.pow(number % 10, 2);
        number = (number - (number % 10)) / 10;
    }

    return sumOfSquares;
}

export default setupArguments;