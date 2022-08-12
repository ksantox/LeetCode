function longestPalindrome(text) {
    if(text.length < 2) {
        return text.length;
    }

    let equalCharactersCount = 0;
    const characterMap = new Map();

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if(characterMap.has(char)) {
            equalCharactersCount += 2;
            characterMap.delete(char);
            continue;
        }

        characterMap.set(char, 1);
    }

    if(characterMap.size > 0) {
        equalCharactersCount++;
    }

    return equalCharactersCount;
};

export default longestPalindrome;