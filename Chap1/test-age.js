function canDrive(user) {
    console.log('Welcome ', user.name);
    if (user.age >= 16) {
        console.log('Allow to drive');
    }
    else {
        console.log('Don\'t allow to drive.');
    }
}
var tom = {
    name: 'Tom',
    age: 19
};
canDrive(tom);
