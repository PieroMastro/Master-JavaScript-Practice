
function getElementsAfter(arr, index) {
  return arr.slice(index + 1);
}

let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']