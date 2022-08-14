function canConstruct(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) {
        return false;
    }

    let magazineCopy = magazine;

    for (const character of ransomNote) {
        if(magazineCopy.indexOf(character) !== -1) {
            magazineCopy = magazineCopy.replace(character, "");
        } else {
            return false;
        }
    }

    return true;
}

export default canConstruct;