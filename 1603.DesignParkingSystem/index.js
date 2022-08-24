function setupArguments(bigString, mediumString, smallString, carString) {
    const big = parseInt(bigString);
    const small = parseInt(smallString);
    const medium = parseInt(mediumString);
    const car = parseInt(carString);

    const parkingSystem = new ParkingSystem(big, medium, small);
    return parkingSystem.addCar(car);
}

const CAR_TO_SLOT_MAPPING = {
    1: "bigSlots",
    2: "mediumSlots",
    3: "smallSlots"
}

class ParkingSystem {
    bigSlots = 0;
    smallSlots = 0;
    mediumSlots = 0;

    constructor(big, medium, small) {
        this.bigSlots = big;
        this.smallSlots = small;
        this.mediumSlots = medium;
    }

    addCar(carType) {
        if(!this[CAR_TO_SLOT_MAPPING[carType]]) {
            return false;
        }

        this[CAR_TO_SLOT_MAPPING[carType]]--;
        return true;
    }
}

export default setupArguments;