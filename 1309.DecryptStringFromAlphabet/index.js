function freqAlphabets(text) {
    let result = "";

    for (let i = text.length - 1; i >= 0; i--) {
        if(text[i] !== "#") {
            result = String.fromCharCode(96 + parseInt(text[i])) + result;
            continue;
        }

        let indexOffset = 1;
        let numberToTransform = text[i - 1];

        if(!isNaN(text[i - 2]) && (text[i - 2] === "1" || text[i - 2] === "2")) {
            numberToTransform = text[i - 2] + numberToTransform;
            indexOffset++;
        }

        result = String.fromCharCode(96 + parseInt(numberToTransform)) + result;
        i -= indexOffset;
    }

    return result;
}

export default freqAlphabets;