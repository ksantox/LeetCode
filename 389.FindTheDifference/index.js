function findTheDifference(original, modified) {
    const map = {};

    for (let i = 0; i < original.length; i++) {
        if(!map[original[i]]) {
            map[original[i]] = 0;
        }

        map[original[i]]++;
    }

    for (let i = 0; i < modified.length; i++) {
        if(!map[modified[i]]) {
            return modified[i];
        }

        map[modified[i]]--;
    }

    return "";
}

export default findTheDifference;