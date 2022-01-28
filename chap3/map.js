const mapItems = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 22 },
    { name: 'jon', age: 40 }
];
const res = mapItems.map((item, index) => `<div>${item.name}</div>`);
console.log(res);
