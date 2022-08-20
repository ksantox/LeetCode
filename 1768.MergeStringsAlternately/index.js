function mergeAlternately(firstWord, secondWord) {
    let result = "";
    let pointer = 0;

    while(pointer < firstWord.length || pointer < secondWord.length) {
        if(firstWord[pointer]) {
            result += firstWord[pointer];
        }

        if(secondWord[pointer]) {
            result += secondWord[pointer];
        }

        pointer++;
    }

    return result;
}

export default mergeAlternately;