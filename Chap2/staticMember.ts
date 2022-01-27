class ClassA {
    static typeA: string;

    constructor() {}

    static fullName(): string {
        return "ClassA " + ClassA.typeA;
    }
}

const a = new ClassA();
// This will error that it does not exist bcos is a class member and not instance member
// console.log(a.typeA);
console.log(ClassA.typeA);