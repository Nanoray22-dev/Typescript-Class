// object type
var google = 'number'

// const ADMIN = 0;
// const READ_ONLY = 1; 
// const AUTHOR = 2;

enum Role {ADMIN,READ_ONLY, AUTHOR};
const people = {
    name: 'Raysell',
    age: 23,
    hobbies: ['sport', 'cooking'],
    role: Role.ADMIN
    
}
let favoriteActivitie
favoriteActivitie = ['sports' ]

console.log(people.name)

for (const hobby of people.hobbies){
    console.log(hobby.toUpperCase())
}

if (people.role === Role.AUTHOR){
    console.log('is author')

}
// Array type
