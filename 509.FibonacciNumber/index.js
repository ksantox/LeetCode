function setupArguments(stringNumber) {
    const number = parseInt(stringNumber);
    return fib(number);
}

const map = {};

function fib(number) {
    if(map[number]) {
        return map[number];
    }

    if(number < 2) {
        return number;
    }

    const result = fib(number - 1) + fib(number - 2);
    map[number] = result;

    return result;
}

export default setupArguments;