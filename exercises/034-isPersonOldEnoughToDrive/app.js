
const isPersonOldEnoughToDrive = (person) => person.age >= 16;

let obj = {
    age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true