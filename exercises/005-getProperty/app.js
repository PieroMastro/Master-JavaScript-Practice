// function getProperty(obj, key) {
//   return obj[key];
// }

const getProperty = (obj, key) => obj[key];

const car = {
    model: 'Toyota'
};

let output = getProperty(car, 'model');
console.log(output); // --> 'Toyota'