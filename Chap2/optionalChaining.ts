namespace OptionalChainingNS {
    interface Wheel {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheel;
    }

    class Automobile implements Vehicle {
        constructor(public wheels?: Wheel) {}
    }

    const car: Automobile | null = new Automobile({count: undefined});
    console.log("Car ", car);
    console.log("Wheels ", car?.wheels);
    console.log("Count ", car?.wheels?.count);
}