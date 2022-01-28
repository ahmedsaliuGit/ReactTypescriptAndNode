function MyFunction() {
    console.log(this);
}

MyFunction();
const test = new MyFunction();