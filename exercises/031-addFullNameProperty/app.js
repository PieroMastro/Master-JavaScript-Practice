
// function addFullNameProperty(obj) {
//   obj.fullName = obj.firstName + ' ' + obj.lastName;
//   return obj;
// }

const addFullNameProperty = (obj) => {
  const { firstName, lastName } = obj;
  obj.fullName = `${firstName} ${lastName}`;
  return obj;
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'