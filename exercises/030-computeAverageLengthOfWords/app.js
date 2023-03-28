
// function computeAverageLengthOfWords(word1, word2) {
//     const averageLength = (word1.length + word2.length) / 2;
//     return `The average length of ${word1} and ${word2} is ${averageLength}.`;
// }

const computeAverageLengthOfWords = (word1, word2) => (word1.length + word2.length) / 2;

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6