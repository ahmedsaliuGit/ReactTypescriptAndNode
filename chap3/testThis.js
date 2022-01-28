function MyFunction() {
    console.log(this);
}
MyFunction();
var test = new MyFunction();
console.log(test);
