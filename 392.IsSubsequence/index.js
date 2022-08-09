function isSubsequence(subsequence, text) {
    if(!subsequence) {
        return true;
    }

    let textPointer = 0;
    let subsequencePointer = 0;

    while(textPointer < text.length) {
        if(subsequence[subsequencePointer] === text[textPointer]) {
            if(++subsequencePointer === subsequence.length) {
                return true;
            }
        }

        textPointer++;
    }

    return false;
}

export default isSubsequence;