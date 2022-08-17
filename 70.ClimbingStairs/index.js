function setupArguments(stringNumber) {
    const stairs = parseInt(stringNumber);
    return climbStairs(stairs);
}

function climbStairs(stairs) {
    if(stairs < 4) {
        return stairs;
    }

    // First two steps are always 1
    let steps = 1;
    let previousSteps = 1;

    for (let i = 2; i <= stairs; i++) {
        const temp = steps;
        // Each variation of required steps is equivalent
        // to the sum of previous two stairs's steps needed to take
        steps = steps + previousSteps;
        previousSteps = temp;
    }

    return steps;
}

export default setupArguments;