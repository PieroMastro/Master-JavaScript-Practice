// function removeFromFrontOfNew(arr) {
//     return arr.slice(1);
// }

const removeFromFrontOfNew = (array) => {
    return array.filter((element, index) => index !== 0);
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]