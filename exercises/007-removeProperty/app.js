
const removeProperty = (obj, key) => {
  delete obj[key];
};

const myObj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

removeProperty(myObj, 'age');
console.log(myObj); // Output: { name: 'John', city: 'New York' }