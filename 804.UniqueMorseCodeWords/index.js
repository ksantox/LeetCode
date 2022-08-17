import { setupStringArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const words = setupStringArray(arrayString);
    return uniqueMorseRepresentations(words);
}

const morseCode = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }

function uniqueMorseRepresentations(words) {
    const map = {};

    for(let i = 0; i < words.length; i++) {
        let encryptedWord = "";

        for (let l = 0; l < words[i].length; l++) {
            const character = words[i][l];
            
            encryptedWord += morseCode[character];
        }

        if(!map[encryptedWord]) {
            map[encryptedWord] = 0;
        }

        map[encryptedWord]++;
    }
    
    let uniqueWords = 0;

    for (const pattern in map) {
        if(map[pattern]) {
            uniqueWords++;
        }
    }

    return uniqueWords;
}

export default setupArguments;