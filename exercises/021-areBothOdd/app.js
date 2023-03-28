
// const areBothOdd = (num1, num2) => {
//     if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

const areBothOdd = (num1, num2) => num1 % 2 !== 0 && num2 % 2 !== 0;

let output = areBothOdd(1, 3);
console.log(output); // --> true