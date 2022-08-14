function setupArguments(numberString) {
    const number = parseInt(numberString);
    return subtractProductAndSum(number);
}

function subtractProductAndSum(number) {
    const stringArray = number.toString().split("");

    let sum = 0;
    let product = 1;

    for (let i = 0; i < stringArray.length; i++) {
        const number = parseInt(stringArray[i]);
        
        sum += number;
        product *= number;
    }


    return product - sum;
}

export default setupArguments;