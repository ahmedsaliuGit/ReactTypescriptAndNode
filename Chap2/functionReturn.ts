// function runMore(distance: number): number {
//     return distance + 10;
// }

function eat(calories: number) {
    console.log('I ate ' + calories + ' calories.');
}

function sleep(hour: number): void {
    console.log('I slept ' + hour + ' hours today.');
}

let ate = eat(100);
console.log(ate);
let slept = sleep(10);
console.log(slept);