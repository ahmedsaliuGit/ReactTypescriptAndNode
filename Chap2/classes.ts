class Person {
    constructor(private readonly msg: string) {}
    
    speak() {
        // this.msg = 'Speak ' + this.msg
        console.log(this.msg);
    }
}

let tom = new Person('Hello');
// tom.msg = 'Hello';
console.log(tom.speak());