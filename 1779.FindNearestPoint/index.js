import { setupNestedArray } from "../common/argumentBuilders.js";

function setupArguments(stringPointX, stringPointY, arrayString) {
    const pointX = parseInt(stringPointX);
    const pointY = parseInt(stringPointY);
    const points = setupNestedArray(arrayString);

    return nearestValidPoint(pointX, pointY, points);
}

function nearestValidPoint(pointX, pointY, points) {
    let smallestPointIndex = -1
    let smallestPointDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < points.length; i++) {
        if(pointX !== points[i][0] && pointY !== points[i][1]) {
            continue;
        }

        const distance = Math.abs(pointX - points[i][0]) + Math.abs(pointY - points[i][1]);
        
        if(distance >= smallestPointDistance) {
            continue;
        }

        smallestPointIndex = i;
        smallestPointDistance = distance;
    }

    return smallestPointIndex;
}

export default setupArguments;