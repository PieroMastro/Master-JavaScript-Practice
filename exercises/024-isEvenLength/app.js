
// const isEvenLength = (word) => {
//     return word.length % 2 === 0 ? true : false;
// }

const isEvenLength = word => word.length % 2 === 0;

let output = isEvenLength('wow');
console.log(output); // --> false