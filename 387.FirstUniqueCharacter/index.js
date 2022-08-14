function firstUniqChar(text) {
    const map = {};
    const queue = [];

    for (let i = 0; i < text.length; i++) {
        if(map[text[i]] !== undefined) {
            map[text[i]]++;
            continue;
        }

        map[text[i]] = 1;
        queue.push([text[i], i]);
    }

    let characterIndex = -1;

    for (let i = 0; i < text.length; i++) {
        if(map[text[i]] === 1) {
            return i;
        }

        if(queue.length && queue[0][0] === text[i]) {
            queue.shift();
        }
    }

    return characterIndex;
}

export default firstUniqChar;