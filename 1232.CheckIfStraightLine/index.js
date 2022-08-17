import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const coordinates = setupNestedArray(arrayString);
    return checkStraightLine(coordinates);
}

function checkStraightLine(coordinates) {
    if(coordinates.length === 2) {
        return true;
    }

    for (let i = 2; i < coordinates.length; i++) {
        const pointThree = coordinates[i];
        const pointTwo = coordinates[i - 1];
        const pointOne = coordinates[i - 2];
        
        if((pointOne[1] - pointTwo[1]) * (pointOne[0] - pointThree[0]) !== (pointOne[1] - pointThree[1]) * (pointOne[0] - pointTwo[0])) {
            return false;
        }
    }

    return true;
}

export default setupArguments;