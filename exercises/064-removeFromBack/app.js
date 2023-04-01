
// function removeFromBack(arr) {
//     arr.pop();
//     return arr;
// }

const removeFromBack = arr => arr.slice(0, -1);

// This returns a new array that consists of all elements of the original array except for the last one.
// The slice method takes two arguments: the starting index and the ending index
// (which is excluded from the resulting array). 
// The -1 as the second argument means to exclude the last element of the array.

let output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]