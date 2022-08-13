import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return average(numbers);
}

function average(salaries) {
    let sum = 0;
    let minSalary = Number.MAX_SAFE_INTEGER;
    let maxSalary = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < salaries.length; i++) {
        const salary = salaries[i];
        sum += salary;

        if(salary < minSalary) {
            minSalary = salary;
        }

        if(salary > maxSalary) {
            maxSalary = salary;
        }
    }

    sum -= minSalary + maxSalary;
    return sum / (salaries.length - 2);
}

export default setupArguments;