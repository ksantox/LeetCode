function isAnagram(firstText, secondText) {
    if(firstText.length !== secondText.length) {
        return false;
    }

    const occurrenceMapFirstText = {};
    const occurrenceMapSecondText = {};

    for(let i = 0; i < firstText.length; i++) {
        occurrenceMapFirstText[firstText[i]] = occurrenceMapFirstText[firstText[i]] + 1 || 1;
        occurrenceMapSecondText[secondText[i]] = occurrenceMapSecondText[secondText[i]] + 1 || 1;
    }

    for (const character in occurrenceMapFirstText) {
        if(occurrenceMapFirstText[character] !== occurrenceMapSecondText[character]) {
            return false;
        }
    }

    return true;
}

export default isAnagram;