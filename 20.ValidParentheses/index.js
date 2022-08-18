const map = {
    "}": "{",
    "]": "[",
    ")": "("
};

function isValid(text) {
    const queue = [];

    for (let i = 0; i < text.length; i++) {
        if(text[i] === "(" || text[i] === "[" || text[i] === "{") {
            queue.push(text[i]);
            continue;
        }

        const lastElement = queue.pop();

        if(lastElement !== map[text[i]]) {
            return false;
        }
    }

    return !queue.length;
}

export default isValid;