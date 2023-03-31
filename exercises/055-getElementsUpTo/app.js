
function getElementsUpTo(array, index) {
  // your code here
  return array.slice(0, index);
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']