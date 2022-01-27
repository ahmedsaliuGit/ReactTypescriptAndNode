interface User {
    name: string,
    age: number
}

function canDrive(user: User) {
    console.log('Welcome ', user.name);

    if(user.age >= 16) {
        console.log('Allow to drive');
    } else {
        console.log('Don\'t allow to drive.');
    }
}

const tom: User = {
    name: 'Tom',
    age: 19
}

canDrive(tom);