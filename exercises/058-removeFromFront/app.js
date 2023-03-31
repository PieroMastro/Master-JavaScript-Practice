
// function removeFromFront(arr) {
//     // your code here
//     arr.shift();
//     return arr
// }

const removeFromFront = array => array.slice(1);

let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]