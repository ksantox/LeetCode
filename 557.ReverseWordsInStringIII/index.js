function reverseWords(text = "Let's take LeetCode contest") {
    const words = text.split(/\s/g);
    const reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";

        for(let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j];
        }

        reversedWords.push(reversedWord);
    }

    return reversedWords.join(" ");
}

export default reverseWords;