function setupArguments(numberString, firstBadVersionString) {
    const number = parseInt(numberString);
    const firstBadVersion = parseInt(firstBadVersionString);

    const problemSolution = solution(number => number >= firstBadVersion);
    return problemSolution(number);
}

function solution(isBadVersion) {
    return number => {
        let smallest = 1;
        let midPoint = 0;
        let highest = number;

        while(smallest <= highest) {
            const allegedMidPoint = Math.floor((highest + smallest) / 2);

            if(isBadVersion(allegedMidPoint)) {
                midPoint = allegedMidPoint;
                highest = allegedMidPoint - 1;
                continue;
            }

            smallest = allegedMidPoint + 1;
        }

        return midPoint;
    };
}

export default setupArguments;