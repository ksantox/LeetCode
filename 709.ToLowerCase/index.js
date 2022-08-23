function toLowerCase(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const charCode = text.charCodeAt(i);

        if(charCode > 64 && charCode < 91) {
            result += String.fromCharCode(charCode + 32);
            continue;
        }
        
        result += text[i];
    }

    return result;
}

export default toLowerCase;