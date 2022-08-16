function firstUniqChar(text) {
    const map = {};
    const queue = [];
    
    for(let i = 0; i < text.length; i++) {
        if(map[text[i]] === undefined) {
            map[text[i]] = i;
            queue.push(text[i]);
            continue;
        }
        
        if(queue[0] === text[i]) {
            queue.shift();
        }
    }
    
    return map[queue[0]] || -1;
}

export default firstUniqChar;