
const isPersonOldEnoughToVote = person => person.age >= 18;

let obj = {
  age: 19
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true