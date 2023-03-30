
const isPersonOldEnoughToDrink = (person) => {
  return person.age >= 21 ? true : false;
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false