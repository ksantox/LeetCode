function numberOfSteps(number) {
    let steps = 0;

    if(number === 0) {
        return steps;
    }

    while(number !== 0) {
        if(number % 2 === 0) {
            number /= 2;
        } else {
            number--;
        }

        steps++;
    }

    return steps;
}

export default numberOfSteps;