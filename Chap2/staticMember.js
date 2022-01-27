var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.fullName = function () {
        return "ClassA " + ClassA.typeA;
    };
    return ClassA;
}());
var a = new ClassA();
// This will error that it does not exist bcos is a class member and not instance call
// console.log(a.typeA);
console.log(ClassA.typeA);
