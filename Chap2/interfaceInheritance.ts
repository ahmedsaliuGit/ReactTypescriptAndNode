namespace InterfaceNamespace {
    interface Thing {
        name: string,
        getFullName: () => string
    }

    interface Vehicle extends Thing {
        wheelCount: number,
        updateWheelCount: (newWheelCount: number) => void,
        showNumberOfWheels: () => void
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            this.name = name;
        }
        
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }

        showNumberOfWheels() {
            console.log(`Moved Motorcycle ${this.wheelCount} miles`);
        }

        getFullName() {
            return "Mc-" + this.name;
        }
    }

    const moto = new Motorcycle("Beginner-cycle");
    console.log(moto.getFullName());
}