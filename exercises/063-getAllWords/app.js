
const getAllWords = string => string.split(' ');

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

// This function uses the split method of strings to split the input sentence into an array of words,
// using a space character as the delimiter. The resulting array contains every word in the sentence.