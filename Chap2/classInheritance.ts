class Vehicle {
    constructor(protected wheelCount: number) {}

    showNumberOfWheel() {
        console.log(`Moved ${this.wheelCount} miles.`);
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(2);
    }

    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
    }
}

class Automobile extends Vehicle {
    constructor() {
        super(4);
    }
}

const bike = new Motorcycle();
bike.showNumberOfWheel();
const toyota = new Automobile();
toyota.showNumberOfWheel();