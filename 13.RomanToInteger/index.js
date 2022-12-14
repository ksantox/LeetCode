const RomanMapping = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const AllowedSubtractableMapping = {
    "V": "I",
    "X": "I",
    "L": "X",
    "C": "X",
    "D": "C",
    "M": "C",
}

function romanToInt(romanNumber) {
    let result = 0;
    
    for(let i = 0; i < romanNumber.length; i++) {
        if(i === romanNumber.length - 1) {
            result += RomanMapping[romanNumber[i]];
            break;
        }
        
        if(RomanMapping[romanNumber[i]] >= RomanMapping[romanNumber[i + 1]]) {
            result += RomanMapping[romanNumber[i]];
            continue;
        }
        
        result -= RomanMapping[romanNumber[i]];
    }
    
    return result;
}

function romanToIntTwoMaps(romanNumber) {
    const numbers = [RomanMapping[romanNumber[0]]];
    const allowedSubtractable = Object.keys(AllowedSubtractableMapping);

    for (let char = 1; char < romanNumber.length; char++) {
        const character = romanNumber[char];
        
        if(allowedSubtractable.indexOf(character) !== -1 && romanNumber[char - 1] === AllowedSubtractableMapping[character]) {
            numbers[char - 1] *= -1;
        }

        numbers.push(RomanMapping[character]);
    }

    return numbers.reduce((sum, item) => sum + item, 0);
}

export default romanToInt;