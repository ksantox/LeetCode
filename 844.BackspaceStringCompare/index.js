function backspaceCompare(firstString, secondString) {
    let firstPointer = firstString.length - 1;
    let secondPointer = secondString.length - 1;

    let firstStringRemovals = 0;
    let secondStringRemovals = 0;

    while(firstPointer >= 0 || secondPointer >= 0) {
        if(firstString[firstPointer] === "#" || secondString[secondPointer] === "#") {
            if(firstString[firstPointer] === "#") {
                firstStringRemovals++;
                firstPointer--;
            }
            
            if(secondString[secondPointer] === "#") {
                secondStringRemovals++;
                secondPointer--;
            }

            continue;
        }

        if(firstStringRemovals || secondStringRemovals) {
            if(firstStringRemovals) {
                firstPointer--;
                firstStringRemovals--;
            }

            if(secondStringRemovals) {
                secondPointer--;
                secondStringRemovals--;
            }

            continue;
        }

        if(firstString[firstPointer] !== secondString[secondPointer]) {
            return false;
        }

        firstPointer--;
        secondPointer--;
    }

    return true;
}

export default backspaceCompare;