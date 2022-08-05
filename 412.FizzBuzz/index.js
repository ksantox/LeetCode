function fizzBuzz(max) {
    const result = [];

    for (let i = 1; i <= max; i++) {
        if(i % 15 === 0) {
            result.push("FizzBuzz");
            continue;
        }
        
        if (i % 3 === 0) {
            result.push("Fizz");
            continue;
        }
        
        if(i % 5 === 0) {
            result.push("Buzz");
            continue;
        }

        result.push(i.toString());
    }

    return result;
}

export default fizzBuzz;