
// const isEvenAndGreaterThanTen = (num) => {
//     return num % 2 === 0 && num > 10 ? true : false;
// }

const isEvenAndGreaterThanTen = number => number % 2 === 0 && number > 10;

let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false