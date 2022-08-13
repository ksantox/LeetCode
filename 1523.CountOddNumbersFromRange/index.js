function setupArguments(lowString, highString) {
    const low = parseInt(lowString);
    const high = parseInt(highString);

    return countOdds(low, high);
}

function countOdds(low, high) {
    const difference = (high - low) / 2;

    if(low % 2 === 0) {
        if(high % 2 === 0) {
            return difference;
        }

        return Math.ceil(difference);
    }

    if(high % 2 === 0) {
        return Math.ceil(difference);
    }

    return Math.ceil((high - low + 1) / 2);
}

export default setupArguments;