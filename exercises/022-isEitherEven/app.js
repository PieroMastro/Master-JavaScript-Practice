
// const isEitherEven = (num1, num2) => {
//     if (num1 % 2 === 0 || num2 % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const isEitherEven = (num1, num2) => (num1 % 2 === 0 || num2 % 2 === 0) ? true : false;

const isEitherEven = (num1, num2) => num1 % 2 === 0 || num2 % 2 === 0;


let output = isEitherEven(1, 4);
console.log(output); // --> true