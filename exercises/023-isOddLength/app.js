
// const isOddLength = (word) => {
//     return word.length % 2 !== 0 ? true : false;
// }

const isOddLength = word => word.length % 2 !== 0;

let output = isOddLength('special');
console.log(output); // --> true