
// function getLengthOfThreeWords(word1, word2, word3) {
//   return word1.length + word2.length + word3.length;
// }

function getLengthOfThreeWords(word1, word2, word3) {
  const wordsArr = [word1, word2, word3];
  return wordsArr.reduce((acc, cur) => acc + cur.length, 0);
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14