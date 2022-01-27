var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Motorcycle has " + this.wheelCount);
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Moved Motorcycle " + this.wheelCount + " miles");
        };
        Motorcycle.prototype.getFullName = function () {
            return "Mc-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("Beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
