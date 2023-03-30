
const isPersonOldEnoughToDrinkAndDrive = (person) => person.age >= 21;

let obj = {
  age: 45
};

let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false