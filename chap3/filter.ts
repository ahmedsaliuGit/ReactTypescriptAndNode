const filterItems = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 22 },
    { name: 'jon', age: 40}
];

const allJons = filterItems.filter((item, index) => item.name === 'jon');
console.log(allJons);